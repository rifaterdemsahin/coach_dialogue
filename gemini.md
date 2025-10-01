## Gemini Dialogue Creation Guide

Use this template to design a 10–15 minute Gemini-led dialogue activity. Replace bracketed placeholders with your content.

### Gemini Dialogue Title
- [Enter the title of the Gemini Dialogue]

### Duration
- 10–15 minutes

### 1) Cover Page Instructions

#### a) Scenario
- What to include:
  - A compelling real-world situation connected to the course content
  - Specific context (time period, location, role)
  - A clear challenge or decision point
  - Keep it concise (3–5 sentences)
  - Align with the module’s learning objective
- Example format:
  - "You've inherited [situation]. As [role], you must [challenge/decision]."
- Draft:
  - [Write 3–5 sentences here]

#### b) Your Role
- What to include:
  - The learner's perspective and responsibilities
  - Professional position or role in the scenario
  - Goals and constraints
  - Real-world context alignment
- Example format:
  - "You're the [position/title]. Your task is to [primary objective] while considering [key constraints]."
- Draft:
  - [Write 2–3 sentences here]

#### c) Plan of Action
- What to include:
  - 2–3 starting points or considerations
  - Frame as questions or decision points
  - Encourage exploration without being prescriptive
- Example format:
  - "In your first discussion with Gemini, consider: What aspects will you prioritize? How will you balance [competing factors]?"
- Draft prompts:
  - [Prompt 1]
  - [Prompt 2]
  - [Prompt 3]

### 2) Purpose of Activity
- What to include:
  - 2–3 specific learning goals connected to course themes
  - How the activity promotes critical thinking
  - Skill development (reflection, analysis, application)
- Structure examples (3–4 sentences total):
  - "Learners will [action verb] by [specific activity]."
  - "Through [process], they will develop [skill/understanding]."
  - "This supports the broader objective of [course objective]."
- Draft:
  - [Write 3–4 sentences here]

### 3) Evaluation Criteria (Rubric)

#### Advanced Level
- Characteristics:
  - Deep reflection with cultural/contextual connections
  - Creative solutions with strong justification
  - Integration of multiple course concepts
  - Complex analytical thinking
  - Evidence of synthesis and evaluation

#### Intermediate Level
- Characteristics:
  - Clear personal connections to content
  - Practical application of concepts
  - Basic analysis with explanations
  - Recognition of key influences or factors
  - Some creative or thoughtful elements

#### Beginner Level
- Characteristics:
  - Surface-level recall without deep analysis
  - Limited application of concepts
  - Minimal critical thinking demonstrated
  - Basic response to prompt

### 4) Additional Context (If required)
- When to use:
  - Complex scenarios requiring background information
  - Topics with specific terminology
  - When excluding certain discussion areas
  - To provide supplementary resources
- What to include:
  - Relevant case studies or readings (.txt files only)
  - Key definitions or frameworks
  - Topics that should NOT be covered
  - Additional scenario details
- Format tips:
  - Keep supplementary content brief
  - Ensure direct relevance to the dialogue
  - Use clear file naming conventions
- Draft attachments/notes:
  - [List .txt resources and short descriptions]

---

## Best Practices
- **Clarity is key**: Write as if explaining to someone unfamiliar with your course.
- **Be specific**: Vague instructions lead to unfocused discussions.
- **Model expectations**: Example responses set the standard.
- **Consider diversity**: Allow multiple valid approaches.
- **Test your criteria**: Ensure rubric levels are clearly distinguishable.

## Quick Checklist
- **Scenario** presents a clear challenge or decision point
- **Role** is well-defined with specific responsibilities
- **Purpose** connects to measurable learning outcomes
- **Rubric** shows clear progression between levels
- **Critical thinking** emphasized over memorization
- **Instructions** can stand alone without additional explanation

---

## Implementation Notes: Website + Gemini API Backend

This project will use a lightweight frontend and the Gemini API as the backend via HTTP endpoints. Use this section to track technical integration details.

### Gemini API Integration Plan
- Use the Gemini API for:
  - `createDialogue`: Initializes a new dialogue with title, scenario, role, plan, objectives, rubric
  - `getGeminiPrompt`: Generates the next Gemini message given dialogue state
  - `submitLearnerResponse`: Accepts learner turn, updates state, returns feedback and next step
  - `evaluateAgainstRubric`: Scores and comments per rubric levels
- Secure with API key (header-based) and CORS rules.

### Suggested API Contract (HTTP)
- POST /api/dialogues
  - body: { title, duration, scenario, role, plan, objectives, rubric, context }
  - returns: { dialogueId, status, firstGeminiPrompt }
- POST /api/dialogues/{dialogueId}/turns
  - body: { learnerMessage }
  - returns: { geminiMessage, stateSummary }
- POST /api/dialogues/{dialogueId}/evaluate
  - body: { transcript }
  - returns: { level: "Advanced|Intermediate|Beginner", evidence, recommendations }

### Frontend Notes
- Pages:
  - `Cover` (collect inputs using this template)
  - `Dialogue` (chat UI: Gemini ↔ learner)
  - `Summary` (evaluation + recommendations)
- Persistent state: dialogueId, transcript, rubric, objectives.
- Accessibility-first: keyboard navigation, semantic landmarks, contrast.

### Security & Privacy
- Use HTTPS-only endpoints.
- Do not log PII beyond what is essential.
- Include rate limiting at the API gateway.

---

## Usage Instructions
1) Fill this template’s placeholders.
2) Save as a module-specific dialogue spec (e.g., `dialogue_[module]_[topic].md`).
3) Provide to the website’s `Cover` page to initialize the Gemini `createDialogue` workflow.
4) Run the dialogue and export transcript for rubric evaluation.
