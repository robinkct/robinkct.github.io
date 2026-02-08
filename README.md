# Robin's Personal Homepage

A modern, responsive personal website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage**: Clean hero section with quick navigation
- 👤 **About Me**: Professional background, experience, and skills
- 💼 **Projects**: Automated GitHub repository integration
- 📝 **Blog**: Links to Notion blog categories (Travel, Book, LifeOS)
- 🎨 **Modern Design**: Responsive design with dark mode support
- 🚀 **Fast Performance**: Static site generation for optimal speed

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build the static site
npm run build

# The output will be in the `out` directory
```

## Project Structure

```
robin_home/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── blog/            # Blog page
│   ├── projects/        # Projects page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Footer.tsx       # Footer component
│   └── ProjectCard.tsx  # Project card component
├── lib/                 # Utility functions
│   └── github.ts        # GitHub API integration
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## Customization

### Update Personal Information

- Edit `app/about/page.tsx` for your bio and experience
- Update social links in `components/Footer.tsx`
- Modify `lib/github.ts` to change GitHub username

### Add Blog Categories

Edit `app/blog/page.tsx` to add or modify blog categories and Notion links.

## License

© 2026 Robin Kuo. All rights reserved.

## Contact

- GitHub: [@robinkct](https://github.com/robinkct)
- LinkedIn: [chinting-kuo](https://www.linkedin.com/in/chinting-kuo-3b7666191)
