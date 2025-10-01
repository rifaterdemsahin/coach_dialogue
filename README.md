# Coach Dialogue

Coach Dialogue is a lightweight website for rifaterdemsahin.com that helps learners engage in coach-guided dialogues around course assignments. The backend logic is powered by n8n workflows hosted at n8n.rifaterdemsahin.com.

## Purpose
- Create structured 10–15 minute dialogue activities tied to course modules.
- Guide learners with a coach persona, prompt turns, and evaluate against a rubric.

## Project Structure
- `cursor.md`: Authoring template and implementation notes.
- `site/`: Minimal static site (Cover → Dialogue → Summary).

## n8n Backend
- Host: https://n8n.rifaterdemsahin.com
- Expected endpoints (via n8n HTTP Request Trigger):
  - `POST /api/dialogues` → create a dialogue
  - `POST /api/dialogues/{dialogueId}/turns` → submit learner turn
  - `POST /api/dialogues/{dialogueId}/evaluate` → evaluate transcript against rubric
- Security: header-based API key (e.g., `x-api-key`). Ensure CORS allows the site origin.

## Frontend (Static Site)
Location: `site/`
- `index.html` (Cover): Collects scenario, role, plan, objectives, rubric; starts the dialogue.
- `dialogue.html` (Dialogue): Chat UI; submits learner turns; shows coach replies.
- `summary.html` (Summary): Evaluates transcript; shows level and recommendations.
- `assets/js/api.js`: Minimal client targeting `https://n8n.rifaterdemsahin.com`.

## Local Development
1. Open `site/index.html` in a browser (or serve with any static server).
2. Set your API key in `site/assets/js/api.js` (or via a simple local override).
3. Ensure n8n endpoints are reachable and CORS allows your local origin.

## Deployment
- Host the `site/` directory on rifaterdemsahin.com (e.g., CDN, static hosting).
- Configure CORS on n8n to allow `https://rifaterdemsahin.com`.
- Set an `x-api-key` and keep it private (avoid committing real keys).

## Courses
This site supports the courses on rifaterdemsahin.com by enabling structured, coach-guided dialogues that align with measurable learning outcomes and rubrics.
