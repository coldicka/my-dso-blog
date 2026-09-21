# Docusaurus Portfolio

Personal portfolio and documentation website built with **Docusaurus**, **React**, and **TypeScript**. Deployed to **GitHub Pages** using **GitHub Actions**.

Showcases work in:

* 🔐 Cybersecurity
* 💻 Software Development
* ⚙️ IT Operations
* 🛠️ Infrastructure & Automation

---

## Table of Contents

* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Environment Configuration](#environment-configuration)
* [Development](#development)
* [GitHub Pages](#github-pages)
* [Deployment](#deployment)
* [Production Build](#production-build)
* [Security](#security)
* [License](#license)

---

## Tech Stack

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| Docusaurus         | Documentation & static site |
| React / TypeScript | Portfolio UI                |
| CSS Modules        | Styling                     |
| dotenv             | Environment configuration   |
| GitHub Actions     | CI/CD                       |
| GitHub Pages       | Hosting                     |

---

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── docs/
│   └── project/
│       ├── README.md
│       └── _category_.json
├── src/
│   ├── components/
│   └── pages/index.tsx
├── static/
├── docusaurus.config.ts
├── sidebars.ts
├── example.env
├── .gitignore
├── package.json
└── README.md
```

| File / Directory               | Purpose               |
| ------------------------------ | --------------------- |
| `docusaurus.config.ts`         | Site configuration    |
| `sidebars.ts`                  | Documentation sidebar |
| `src/pages/index.tsx`          | Portfolio homepage    |
| `src/components/`              | React components      |
| `docs/`                        | Projects & write-ups  |
| `.github/workflows/deploy.yml` | Deployment workflow   |

---

## Getting Started

### Requirements

* Node.js `v24.16.0+`
* npm `v11.17.0+`
* Git

### Installation

```bash
git clone git@github.com:coldicka/my_dso_blog.git
cd my_dso_blog
npm install
```

---

## Environment Configuration

Create the environment file:

```bash
cp example.env .env
```

Configure:

| Variable                     | Description          | Example                          |
| ---------------------------- | -------------------- | -------------------------------- |
| `BLOG_ENABLED`               | enable blog          | false                            |
| `DEPLOYMENT_URL`             | GitHub Pages URL     | https://YOUR_USERNAME.github.io  |
| `DEPLOYMENT_BRANCH`          | Your branch          | main                             |
| `BASE_URL`                   | Repository base path | /my-dso-blog/                    |
| `GITHUB_ORG`                 | GitHub organisation  | YOUR_GITHUB_ORGANISATION         |
| `GITHUB_PROJECT`             | Repository base name | my-dso-blog                      |
| `GIT_REPOSITORY_URL`         | GitHub URL           | https://github.com/YOUR_USERNAME |
| `GITHUB_USERNAME`            | GitHub username      | YOUR_GITHUB_NAME                 |

---

## Development

Start the local development server:

```bash
npm run start
```

---

## GitHub Pages

Create a GitHub repository and push the project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Enable GitHub Pages:

**Settings → Pages → Source → GitHub Actions**

### GitHub Actions Secrets

Add the environment variables from `.env` as repository secrets under:

**Settings → Secrets and variables → Actions**

The workflow creates the environment configuration, builds the site, and deploys it automatically.

---

## Deployment

Every push to `main` triggers a deployment:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Website:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

---

## Production Build

Build and serve the production version locally:

```bash
npm run build
npm run serve
```

The generated files are stored in `build/`.

---

## Security

Keep sensitive and generated files out of version control:

```gitignore
.env
node_modules/
build/
```

---

## License

This project is intended as a personal portfolio and documentation website.
:::
