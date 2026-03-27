# MagnaRix — Strategic Decision Orchestration

Public website for MagnaRix. Plain HTML, CSS, and JavaScript — no build step required.

## Structure

```
index.html          Home page
product.html        Platform details
use-cases.html      Enterprise use cases
why-magnarix.html   Category positioning
about.html          Company and principles
insights.html       Thought leadership
contact.html        Contact form
styles.css          Stylesheet
script.js           Interactions
CNAME               Custom domain
```

## Local Development

Open `index.html` in any browser. No server or build tools needed.

## Deployment (GitHub Pages)

1. Push to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the site deploys automatically

### Custom Domain

1. In **Settings → Pages**, enter your domain (e.g. `magnarix.com`)
2. Add a `CNAME` DNS record pointing to `<username>.github.io`
3. GitHub provisions HTTPS automatically

The `CNAME` file in this repo is already set to `magnarix.com`.

## License

Proprietary. All rights reserved by MagnaRix.
