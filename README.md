# Innovate + Elevate Website

Marketing site for [Innovate + Elevate](https://www.innovate-elevate.ai), a two-practice consulting firm led by Michelle Lentz and Brandon Carson.

## Repo

- GitHub: https://github.com/msuzann3/ie-site
- Production: https://www.innovate-elevate.ai
- Hosting: Netlify
- Branch: `main`

## Working Directories

This repo is used from iCloud Drive on more than one Mac. The current local copy on this Mac is:

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
- Netlify with `@netlify/plugin-nextjs`
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

- `app/` - routes, metadata, global layout, Open Graph images
- `components/` - shared navigation, footer, home sections, person page template
- `lib/data.ts` - hardcoded site content: services, bios, publications, speaking events
- `public/assets/` - images and brand assets
- `public/downloads/` - downloadable files, including the AI-Powered Workforce PDF

## Key Routes

- `/` - home
- `/michelle` - Michelle Lentz profile
- `/brandon` - Brandon Carson profile
- `/speaking` - speaking engagements
- `/privacy` - privacy policy
- `/terms` - terms of use

## Content Notes

- There is no CMS. Most site copy lives in `lib/data.ts`.
- The contact form was intentionally not used on the live site.
- Brandon's featured eBook is hosted at:

```text
/downloads/ai-powered-workforce.pdf
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

Netlify deploys from GitHub when `main` is pushed. Build settings are in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Known Follow-Up

- Plausible analytics was previously noted as an area to keep an eye on if doing a future production polish pass.
