# Changelog

All notable project updates should be recorded here so both laptops and both Codex sessions have the same working context.

## 2026-05-31

### Changed

- Switched production hosting notes from Netlify to GitHub Pages.
- Configured Next.js for static export so the site can deploy from GitHub Pages.
- Added a GitHub Actions Pages workflow:

```text
.github/workflows/deploy-pages.yml
```

- Added the custom domain file:

```text
public/CNAME
```

- Configured the GitHub Pages workflow to use Node 24.
- Removed the Netlify build configuration.
- Removed the unused Netlify contact form component.

### Notes

- GitHub Pages should use GitHub Actions as the Pages source.
- DNS for `www.innovate-elevate.ai` should use a `CNAME` record pointing to `msuzann3.github.io`.

## 2026-05-28

### Added

- Added this `CHANGELOG.md` to track site changes across laptops and Codex sessions.
- Expanded `README.md` with project overview, repo details, local setup, deployment notes, and sync workflow.
- Added the Codex working agreement: check `README.md`, `CHANGELOG.md`, and `git status` at the start of work; update `README.md` and `CHANGELOG.md` at the end of work.

## 2026-05-13

### Added

- Added downloadable eBook PDF:

```text
public/downloads/ai-powered-workforce.pdf
```

- Added Brandon's featured eBook publication card:

```text
The AI-Powered Workforce: A CEO's Roadmap to Competitive Advantage
```

- Added home page `FeaturedDownload` banner between `Hero` and `Duality`.
- Added `download?: boolean` to the `Publication` interface so internal downloadable assets use the browser download behavior.

### Changed

- Updated the home page eBook banner to a periwinkle background with dark navy text.
- Simplified Brandon's eBook tag to `eBook`.
- Removed the older ATD "The AI-Powered Workforce Series" publication card from Brandon's featured publications.
- Bumped `@netlify/plugin-nextjs` from `^4.41.6` to `^5.15.11`.

### Notes

- The home page eBook banner is intentionally temporary and can be removed from `app/page.tsx`.
- Netlify deploys from GitHub `main`.

## Earlier May 2026

### Added

- Added Plausible analytics.
- Added Michelle speaking page updates to match michelleslentz.com.
- Added Ziplines courses and workshops section to Michelle's speaking page.

### Changed

- Merged courses and podcasts into a single recent engagements list.
- Moved Plausible scripts into the document head for detection.
