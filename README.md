# Turn markdown into something

## Export to pdf

- Create `./draft/target.md`
- Run to export
	```bash
	pnpm run build-pdf
	```

## Presentation slide

- Play the slide:
	```bash
	pnpm play-slide
	```
- Build the slide:
	```bash
	pnpm build-slide
	```
- Export slide to pdf:
	```bash
	pnpm build-slide-pdf
	```

### Special effects

- With animation:
	```bash
	pnpm run slide-export --with-clicks
	```
- Dark theme:
	```bash
	pnpm run slide-export --dark
	```