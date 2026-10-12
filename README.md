# Portfolio website in 2 minutes (one prompt)

Built for the **@panther_ai_dev** reels *AI Build Diaries #6: "Poori website 2 minute mein"* and *Sach ya Jhooth #2: "AI se website 10 minute mein?"*.

A dark, mobile-friendly portfolio for a fictional fresher developer: hero, about, skills, 3 projects, contact form. Plain HTML/CSS/JS, no build step.

## Built with AI
- **Builder:** Claude Code (Opus 5.5), one prompt, no human edits
- **Prompt (as given):**
  > Ek fresher web developer ke liye portfolio website banao: hero, about, skills, 3 projects, contact form. Dark theme, mobile friendly, plain HTML/CSS/JS.
- **Time:** 2 min 10 s, including the browser and phone-width tests (the code itself took 27 s). Timeline in [LOG.md](LOG.md).

## Run it
Open `index.html` in a browser. Screenshots are in [`shots/`](shots/).

## Honest notes
- Name, college and projects are placeholder content.
- The contact form only shows "Thanks". It doesn't send the message anywhere.
- Not deployed. It runs locally only.
- `shoot.cjs` is the Playwright script used for the phone tests and screenshots. It expects a local server on port 8765.

The follow-up ("make it yours" prompts 2 and 3) is in [portfolio-make-it-yours](https://github.com/panther-ai-dev/portfolio-make-it-yours).

Follow [@panther_ai_dev](https://instagram.com/panther_ai_dev) for the reel.
