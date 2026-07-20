# cszhu.github.io

My personal website and blog, built with Astro and TinaCMS!

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up TinaCMS credentials**
   - Create a `.env.development` file in the root directory
   - Add your TinaCMS credentials:
     ```
     TINACLIENTID=your_client_id_here
     TINATOKEN=your_token_here
     TINASEARCH=your_search_token_here
     ```
   - Get these from [tina.io](https://tina.io)

## Development

```bash
# Start dev server with TinaCMS
npm run dev

# Or start Astro dev server only (without CMS)
npm start

# Access TinaCMS admin at http://localhost:4321/admin/index.html
```

## Build

```bash
# Build the site locally (Astro only, no TinaCMS credentials needed)
npm run build:site
npm run preview

# Full production build, including the /admin CMS (requires TinaCMS credentials)
npm run build
```

The site's content is read directly from the local `posts/*.md` files, so
`npm run build:site` produces a complete, deployable site without any TinaCloud
credentials. You only need `npm run build` (with credentials) if you want the
hosted `/admin` editor and search index — which is what the GitHub Actions
deploy uses.

## Deployment

The site is configured for GitHub Pages deployment. The build output goes to the `dist/` directory.

For GitHub Pages:

1. Build the site: `npm run build`
2. Deploy the `dist/` folder contents to your GitHub Pages branch
3. Or set up a GitHub Actions workflow to automate this

## Blog Posts

Blog posts are stored in the `posts/` directory as Markdown files. You can:

- Add posts manually by creating `.md` files in `posts/`
- Use TinaCMS admin interface at `/admin` to create/edit posts

## License

The MIT License (MIT)
Copyright (c) 2016-2026 Christina Zhu

Built with [Cassidy's blog template](https://github.com/cassidoo/blahg)!
