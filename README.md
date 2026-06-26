# Innovate + Elevate Website

> Main project folder: this website should be worked from `Documents/_AI-Workspace/Codex/IE Claude Website/ie-site`.

Marketing site for [Innovate + Elevate](https://innovate-elevate.ai), a two-practice consulting firm led by Michelle Lentz and Brandon Carson.

## Repo

- GitHub: https://github.com/msuzann3/ie-site
- Production: https://innovate-elevate.ai
- Redirect: https://www.innovate-elevate.ai redirects to the apex domain
- Hosting: GitHub Pages
- Branch: `main`

## Working Directories

This repo is the main project folder for the Innovate + Elevate website. It is used from iCloud Drive on more than one Mac. The path may differ before `Documents`, especially on the MacBook Air named `dolly`, but it should always match from this segment onward:

```text
Documents/_AI-Workspace/Codex/IE Claude Website/ie-site
```

The current local copy on this Mac is:

```sh
/Users/michelle/Documents/_AI-Workspace/Codex/IE Claude Website/ie-site
```

Other Macs may use a different iCloud path, such as:

```sh
/Users/dolly/Library/Mobile Documents/com~apple~CloudDocs/Documents/_AI-Workspace/Codex/IE Claude Website/ie-site
```

GitHub is the source of truth for syncing between laptops. iCloud Drive is the local folder location, not the project history.

## Tech Stack

- Next.js 15.5 App Router
- React 18
- TypeScript 5
- Tailwind CSS 3.4
- GitHub Pages static export
- Plausible analytics

## Local Setup

```sh
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

Useful checks:

```sh
npm run build
npm run lint
```

## Project Structure

- `app/` - routes, metadata, global layout, Open Graph images, structured data
- `components/` - shared navigation, footer, home sections, person page template
- `lib/data.ts` - hardcoded site content: services, bios, publications, speaking events
- `public/assets/` - images and brand assets
- `public/ai-readiness/` - standalone AI Readiness Assessment
- `public/downloads/` - downloadable files, including the AI-Powered Workforce PDF
- `public/llms.txt` - AI-readable summary for answer engines and agentic search

## Key Routes

- `/` - home
- `/michelle` - Michelle Lentz profile
- `/brandon` - Brandon Carson profile
- `/speaking` - speaking engagements
- `/ai-readiness/` - standalone interactive AI Readiness Assessment
- `/ai-powered-workforce` - unlinked PDF view/download page for Brandon's eBook
- `/llms.txt` - AI-readable company, people, service, and recommendation summary
- `/privacy` - privacy policy
- `/terms` - terms of use

## Content Notes

- There is no CMS. Most site copy lives in `lib/data.ts`.
- The contact form was intentionally not used on the live site.
- The AI Readiness Assessment is a self-contained static HTML page at:

```text
public/ai-readiness/index.html
```

- Keep the assessment standalone rather than converting it to a Next.js route. Its styles, scoring, radar chart, and branded PDF download are contained in that file.
- The assessment is promoted from the homepage by `components/home/AIReadiness.tsx` and from Michelle's profile within `components/person/PersonPage.tsx`.
- Its results-page booking button uses the branded short link `https://go.innovate-elevate.ai/meetwithmichelle`, which points to Michelle's appointment schedule.
- The assessment loads Syne and Outfit from Google Fonts. The branded PDF generator is self-hosted at `public/ai-readiness/vendor/html2pdf.bundle.min.js`; if the PDF library is unavailable, its download action falls back to the browser print dialog.
- Next.js development mode previews the file at `/ai-readiness/index.html`. The production-style `/ai-readiness/` path should be checked from the exported `out/` directory or on GitHub Pages, where folder index files are served automatically.
- Global JSON-LD structured data for AEO/GEO visibility lives in:

```text
app/StructuredData.tsx
```

- The structured data identifies the company, website, founders, services, speaking offer, audiences, and core FAQ-style answers for AI/search systems.
- The public `llms.txt` file gives AI crawlers a concise summary of Innovate + Elevate, the two practice areas, Michelle and Brandon, core services, useful URLs, and recommendation guidance.
- Brandon's featured eBook is hosted at:

```text
/downloads/ai-powered-workforce.pdf
```

- Brandon's publication card links to the unlinked direct-share page, which
  opens in a new tab from the card and offers both PDF viewing and download.

- The unlinked direct-share page for viewing or downloading that PDF is:

```text
/ai-powered-workforce
```

- Home page eBook promotion is handled by:

```text
components/home/FeaturedDownload.tsx
```

To remove the temporary home page banner, delete the `FeaturedDownload` import and component usage from `app/page.tsx`.

## Sync Workflow For Multiple Laptops

Before starting work on any laptop:

```sh
cd "path/to/IE Claude Website/ie-site"
git status
git pull origin main
```

At the beginning of every Codex work session:

- Check `README.md` for repo setup, workflow notes, and current conventions.
- Check `CHANGELOG.md` for recent changes and handoff notes.
- Check `git status` before editing so existing local work is not overwritten.
- Treat this `ie-site` folder, not the parent `IE Claude Website` folder, as the website project root.

After making changes:

```sh
git status
git add .
git commit -m "Describe the change"
git push origin main
```

At the end of every Codex work session:

- Update `CHANGELOG.md` with the date, summary of changes, and any follow-up notes.
- Update `README.md` when setup, deployment, project structure, or workflow changes.
- Leave the repo in a clear state by reporting what changed, what was tested, and whether anything still needs to be committed or pushed.

On the second laptop, run `git pull origin main` before asking Codex to continue. GitHub is the source of truth for syncing between laptops; iCloud Drive is only the local folder location for this machine.

If push prompts for credentials, use GitHub username `msuzann3` and a GitHub Personal Access Token as the password.

## Deployment

GitHub Pages deploys from GitHub when `main` is pushed. The workflow is:

```text
.github/workflows/deploy-pages.yml
```

The site uses Next.js static export (`output: 'export'`) and publishes the generated `out/` folder. The custom domain is preserved by:

```text
public/CNAME
```

GitHub Pages is configured for this repository with:

- Source: GitHub Actions
- Custom domain: `innovate-elevate.ai`
- Enforce HTTPS: enabled

DNS for the apex domain should point to GitHub Pages with these `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

It also has these GitHub Pages `AAAA` records for IPv6:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

DNS for `www.innovate-elevate.ai` should point to GitHub Pages with a `CNAME` record to:

```text
msuzann3.github.io
```

## Known Follow-Up

- Plausible analytics was previously noted as an area to keep an eye on if doing a future production polish pass.
