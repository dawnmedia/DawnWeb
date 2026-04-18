# Dawn Web Official Website

The Dawn Web website is a static Astro site for the Dawn Web brand, services, projects, blog, product pages, insights, and documentation.

## Tech Stack

- Astro 6
- Tailwind CSS
- Astro content collections for blog, products, insights, and docs
- GitHub Pages deployment with the custom domain `dawnwebs.com`

## Getting Started

```bash
git clone https://github.com/dawnmedia/DawnWeb.git
cd DawnWeb
npm install
npm run dev
```

Useful scripts:

```bash
npm run check
npm run build
npm run preview
```

## Project Structure

- `src/pages`: static and dynamic routes
- `src/content/blog`: localized blog posts under `en`, `fr`, and `br`
- `src/content/products`: localized product/project content
- `src/content/insights`: localized insight articles
- `src/content/docs`: Starlight documentation content
- `src/components`: shared Astro UI components
- `src/assets/styles`: global and Starlight styles
- `src/images`: optimized local image assets
- `public`: static files served as-is, including `CNAME`

## Content Authoring

Blog posts live in `src/content/blog/{locale}` and require title, description, author details, publish date, card image, read time, and content paragraphs.

Product pages live in `src/content/products/{locale}` and drive the product listing plus dynamic product detail pages.

Insight articles live in `src/content/insights/{locale}` and require title, description, card image, alt text, and article body content.

Supported locales are:

- `en`: default, served from root URLs
- `fr`: served from `/fr`
- `br`: Brazilian Portuguese, served from `/br`

## Deployment

The canonical deployment target is GitHub Pages. The workflow in `.github/workflows/static.yml` installs dependencies, runs `npm run check`, builds the static site into `dist`, uploads the Pages artifact, and deploys it.

The custom domain is configured through `public/CNAME`.

## License

This project is licensed under the [MIT License](LICENSE).
