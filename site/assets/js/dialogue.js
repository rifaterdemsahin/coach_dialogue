function loadState() {
  const raw = localStorage.getItem('coach_state');
  return raw ? JSON.parse(raw) : null;
}

function saveState(state) {
  localStorage.setItem('coach_state', JSON.stringify(state));
}

function renderChat(transcript) {
  const chat = document.getElementById('chat');
  chat.innerHTML = '';
  transcript.forEach((t) => {
    const div = document.createElement('div');
    div.className = `msg ${t.role}`;
    div.textContent = t.text;
    chat.appendChild(div);
  });
  chat.scrollTop = chat.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
  const state = loadState();
  if (!state) {
    window.location.href = './index.html';
    return;
  }

  document.getElementById('dialogue-title').textContent = state.title || 'Dialogue';
  renderChat(state.transcript || []);

  const form = document.getElementById('turn-form');
  const input = document.getElementById('learner-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';

    state.transcript.push({ role: 'learner', text });
    saveState(state);
    renderChat(state.transcript);

    try {
      const resp = await window.CoachAPI.submitTurn(state.dialogueId, text);
      const coachMessage = resp.coachMessage || '(No response)';
      state.transcript.push({ role: 'coach', text: coachMessage });
      saveState(state);
      renderChat(state.transcript);
    } catch (err) {
      alert(err.message || 'Failed to submit turn');
    }
  });
});


