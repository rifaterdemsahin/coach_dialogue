function loadState() {
  const raw = localStorage.getItem('coach_state');
  return raw ? JSON.parse(raw) : null;
}

document.addEventListener('DOMContentLoaded', () => {
  const state = loadState();
  if (!state) {
    window.location.href = './index.html';
    return;
  }

  const evaluateBtn = document.getElementById('evaluate');
  const results = document.getElementById('results');

  evaluateBtn.addEventListener('click', async () => {
    try {
      const transcript = state.transcript || [];
      const resp = await window.CoachAPI.evaluate(state.dialogueId, transcript);
      const { level, evidence, recommendations } = resp;
      results.innerHTML = '';
      const levelEl = document.createElement('div');
      levelEl.textContent = `Level: ${level || 'N/A'}`;
      results.appendChild(levelEl);
      if (evidence) {
        const ev = document.createElement('pre');
        ev.textContent = JSON.stringify(evidence, null, 2);
        results.appendChild(ev);
      }
      if (recommendations) {
        const rec = document.createElement('pre');
        rec.textContent = JSON.stringify(recommendations, null, 2);
        results.appendChild(rec);
      }
    } catch (err) {
      alert(err.message || 'Evaluation failed');
    }
  });
});


