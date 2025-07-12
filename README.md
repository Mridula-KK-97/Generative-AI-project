# React + Vite

# Lexisg Frontend Intern Test – Legal Assistant Interface

This React.js app simulates a legal assistant where users can ask legal questions and view AI-generated answers with clickable legal citations.

## 🚀 How to Run

1. Clone the repo  
2. Install dependencies  
3. Add `.env` file with OpenRouter API key (optional)  
4. Start the server

```bash
npm install
npm run dev


---

### 3. 🔑 **Environment Setup (Optional)**
Only if you’re using OpenRouter:

```markdown
## 🔑 Environment Variable (Optional for AI Response)

Create a `.env` file:

VITE_OPENROUTER_API_KEY = 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

## 🖼️ Screenshot

![UI Screenshot](./screenshot.png)

## 📎 Citation Handling

- The citation is displayed below the AI answer.
- Clicking it opens the judgment PDF in a new tab.
- (Bonus) If modal is implemented: PDF opens inside a popup viewer.

## ⚙️ Tech Stack

- React.js
- Tailwind CSS
- OpenRouter API (optional)

