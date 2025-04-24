# Jeremy Cleland's Portfolio

Modern Portfolio and Blog website built with React, Vite, Tailwind CSS, and Contentful CMS.

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38b2ac)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4-646cff)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-ff69b4)](https://www.framer.com/motion/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-eb5d6c)](https://www.contentful.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/924d78ba-50d2-4535-a332-e0d4fa60c936/deploy-status)](https://app.netlify.com/sites/jeremy-cleland/deploys)

🔗 [Live Demo](https://dev.clelandco.com)

## Table of Contents

- [Jeremy Cleland's Portfolio](#jeremy-clelands-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation-1)
  - [Development](#development)
  - [Usage](#usage)
  - [License](#license)
    - [More Images](#more-images)
      - [Home Page](#home-page)
      - [About Page](#about-page)
      - [Portfolio Page](#portfolio-page)
    - [Project Page](#project-page)
      - [Resume Page](#resume-page)
      - [Contact Page](#contact-page)
      - [Light Mode](#light-mode)
  - [SEO Enhancements](#seo-enhancements)
  - [Adding Blog Posts](#adding-blog-posts)
  - [Deploy](#deploy)
  - [Customization](#customization)
  - [Content Management with Contentful](#content-management-with-contentful)
    - [Setting Up Contentful](#setting-up-contentful)
    - [Adding Content](#adding-content)

## Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Automatic theme detection with toggle
- **Blog With Markdown**: Full-featured blog with markdown support
- **Project Showcase**: Highlight your best work
- **Contact Form**: Get in touch easily
- **Performance Optimized**: Fast loading times
- **SEO Optimized**: Ready for search engines

## Technologies Used

- **Frontend Framework:** React.js 18
- **Styling:** Tailwind CSS 3
- **Build Tool:** Vite 4
- **Animations:** Framer Motion
- **Content Management:** Contentful CMS
- **Deployment:** Netlify
- **Other Tools:**
  - TypeScript
  - React Router
  - ESLint
  - Prettier

## Installation

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- Contentful account

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn
   ```

3. Set up Contentful:
   - Create a `.env` file in the project root
   - Add your Contentful credentials:

   ```
   VITE_CONTENTFUL_SPACE_ID=your_space_id_here
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
   VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_access_token_here
   ```

4. Run migrations:
   - Install Contentful CLI: `npm install -g contentful-cli`
   - Log in to Contentful: `contentful login`
   - Run migrations: `contentful space migration --space-id your_space_id migrations/00-blog-post.js` and `contentful space migration --space-id your_space_id migrations/01-portfolio-project.js`

5. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Build for production:

   ```
   npm run build
   # or
   yarn build
   ```

## Development

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

Browse the portfolio sections using the sidebar navigation to learn more about Jeremy's skills, experiences, and projects. Toggle between dark and light modes using the button at the bottom of the sidebar.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### More Images

#### Home Page

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio6.jpg)

#### About Page

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio7.jpg)

#### Portfolio Page

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio1.jpg)

### Project Page

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio2.jpg)

#### Resume Page

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio3.jpg)

#### Contact Page

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio4.jpg)

#### Light Mode

![Screenshot of the portfolio website](./src/assets/images/portfolio/portfolio/Portfolio5.jpg)

## SEO Enhancements

This project includes several SEO optimizations:

1. **Schema.org Structured Data**
   - Blog posts use BlogPosting schema
   - Blog index uses Blog schema
   - Rich search results support

2. **RSS Feed**
   - Automatic generation during build
   - Manual generation with `npm run generate-rss`
   - Full content included for RSS readers

3. **Sitemap**
   - XML sitemap with all pages and blog posts
   - Priority and change frequency settings
   - Referenced in robots.txt

4. **Meta Tags**
   - Title, description and keywords
   - Open Graph and Twitter card support

5. **Robots.txt**
   - Search engine crawling instructions
   - Sitemap and RSS feed references

## Adding Blog Posts

See [docs/AddingBlogPosts.md](docs/AddingBlogPosts.md) for detailed instructions on how to add blog posts.

## Deploy

This project can be easily deployed to Vercel, Netlify, or GitHub Pages. See their respective documentation for deployment instructions.

## Customization

Edit the data files in `src/data/` to customize your:

- Personal information
- Projects
- Blog posts
- Skills and services

## Content Management with Contentful

This project uses Contentful as a headless CMS to manage blog posts and portfolio projects.

### Setting Up Contentful

1. **Create a Contentful account** at [contentful.com](https://www.contentful.com/)
2. **Create a new space** or use an existing one
3. **Set up content models** by running the migration scripts:

   ```bash
   contentful space migration --space-id your_space_id migrations/00-blog-post.js
   contentful space migration --space-id your_space_id migrations/01-portfolio-project.js
   ```

   Alternatively, you can manually create the content models through the Contentful web interface.

4. **Get API credentials**:
   - Go to Settings > API Keys
   - Create a new API key or use the default one
   - Copy the "Space ID", "Content Delivery API - access token" and "Content Preview API - access token"
   - Add these to your `.env` file as described in the Installation section

### Adding Content

1. **Blog Posts**:
   - In Contentful, go to Content
   - Click "Add Entry" and select "Blog Post"
   - Fill in all required fields
   - Publish the entry

2. **Portfolio Projects**:
   - In Contentful, go to Content
   - Click "Add Entry" and select "Portfolio Project"
   - Fill in all required fields
   - Publish the entry

The content will automatically appear in your website after publishing.
