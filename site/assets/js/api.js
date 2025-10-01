(function () {
  const API_BASE = 'https://n8n.rifaterdemsahin.com';
  const API_KEY = localStorage.getItem('coach_api_key') || '';

  async function request(path, options) {
    const res = await fetch(API_BASE + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify(options.body || {})
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${text}`);
    }
    return res.json();
  }

  window.CoachAPI = {
    setApiKey: (key) => localStorage.setItem('coach_api_key', key || ''),
    createDialogue: (payload) => request('/api/dialogues', { body: payload }),
    submitTurn: (dialogueId, learnerMessage) => request(`/api/dialogues/${encodeURIComponent(dialogueId)}/turns`, { body: { learnerMessage } }),
    evaluate: (dialogueId, transcript) => request(`/api/dialogues/${encodeURIComponent(dialogueId)}/evaluate`, { body: { transcript } })
  };
})();


