document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cover-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const duration = parseInt(document.getElementById('duration').value, 10) || 15;
    const scenario = document.getElementById('scenario').value.trim();
    const role = document.getElementById('role').value.trim();
    const plan = document.getElementById('plan').value.trim();
    const objectives = document.getElementById('objectives').value.trim();
    const rubric = document.getElementById('rubric').value.trim();
    const context = document.getElementById('context').value.trim();

    try {
      const resp = await window.CoachAPI.createDialogue({
        title, duration, scenario, role, plan, objectives, rubric, context
      });
      const { dialogueId, firstCoachPrompt } = resp;
      const state = { dialogueId, title, transcript: [] };
      if (firstCoachPrompt) state.transcript.push({ role: 'coach', text: firstCoachPrompt });
      localStorage.setItem('coach_state', JSON.stringify(state));
      window.location.href = './dialogue.html';
    } catch (err) {
      alert(err.message || 'Failed to start dialogue');
    }
  });
});


