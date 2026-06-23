# Changelog

All notable project updates should be recorded here so both laptops and both Codex sessions have the same working context.

## 2026-06-22

### Added

- Added global JSON-LD structured data for AEO/GEO and agentic-search visibility:

```text
app/StructuredData.tsx
```

- The structured data covers the organization, website, professional service, Michelle Lentz, Brandon Carson, core services, speaking offer, audiences, and FAQ-style answers.
- Added an AI-readable company summary and recommendation guide:

```text
public/llms.txt
```

### Notes

- The new `llms.txt` file should publish at:

```text
https://innovate-elevate.ai/llms.txt
```

- Future AEO/GEO improvements can add dedicated service pages and visible FAQ sections after the Capstone project is finished.

## 2026-06-19

### Added

- Added an unlinked direct-share page for Brandon's AI-Powered Workforce PDF:

```text
/ai-powered-workforce
```

- The page embeds the PDF for in-browser viewing and includes separate buttons to view the PDF in a new tab or download it.
- Replaced the older PDF asset with the newly formatted version while keeping the existing download URL:

```text
public/downloads/ai-powered-workforce.pdf
```

### Notes

- Brandon's eBook publication card links to the direct-share page and opens it in a new tab.
- The direct-share page points to the updated PDF file.
- The page is intentionally not added to the nav or sitemap.
- Page metadata asks search engines not to index or follow it.

## 2026-06-11

### Changed

- Clarified that `ie-site` is the main project folder and source of truth for the Innovate + Elevate website.
- Updated cross-laptop workflow notes to say the shared path should match from `Documents/_AI-Workspace/Codex/IE Claude Website/ie-site` onward.
- Left the parent `IE Claude Website` README and changelog as pointers to the canonical files in `ie-site`.

## 2026-06-01

### Changed

- Added a top-of-README note that the current working directory belongs in iCloud Drive under `Documents/_AI-Workspace/Codex`.

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

- GitHub Pages is live with GitHub Actions as the Pages source.
- The production URL is now `https://innovate-elevate.ai`.
- `https://www.innovate-elevate.ai` redirects to the apex domain.
- HTTPS enforcement is enabled in GitHub Pages.
- DNS is configured with GitHub Pages `A` and `AAAA` records for the apex domain, plus a `www` CNAME pointing to `msuzann3.github.io`.

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
