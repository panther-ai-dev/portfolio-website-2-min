# Build log: "AI se website 10 minute mein?"

## Rules (fixed before start)
- Builder: Claude Code (Opus 5.5), one prompt, no human edits.
- Site: portfolio for a fictional fresher developer. Plain HTML/CSS/JS, one folder.
- Done = site opens in a browser, works on desktop and phone width, no console errors.
- Limit: 10 minutes. Deploy is NOT included.

## Prompt
> Ek fresher web developer ke liye portfolio website banao: hero, about, skills, 3 projects, contact form. Dark theme, mobile friendly, plain HTML/CSS/JS.

## Timeline
- 11:44:15 START
- 11:44:42 Code written (index.html, style.css, script.js)
- 11:45:27 Opened in browser, no console errors; desktop + mobile screenshots taken
- 11:46:15 Phone test passed: menu opens, form validates and confirms, no horizontal scroll (only error: missing favicon 404)
- 11:46:25 DONE. Total: 2 min 10 s

## Honest notes (what the reel must say)
- Works: hero, about, skills, 3 projects, contact form, mobile menu, dark theme. No JS errors.
- Fake parts: name, college and projects are placeholder content. You must fill in your real details.
- The contact form only shows "Thanks"; it does NOT send the message anywhere. Needs a form service or backend.
- Not deployed. It runs on localhost only; putting it online (Netlify/GitHub Pages) is extra time.
- Testing took longer than writing the code (in-app browser screenshots timed out, switched to Playwright).
- Missing favicon (404), cosmetic.

## Evidence
- shots/desktop.png, shots/mobile.png, shots/mobile-menu.png, shots/mobile-form.png
