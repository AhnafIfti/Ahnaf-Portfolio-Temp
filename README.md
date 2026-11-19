# Ahnaf Shahriar Ifti – Portfolio

My personal portfolio website, built with **React** and **Vite**.
It shows my projects, experience, education, research, skills and news, and how to contact me.

## Pages

- **Home** – introduction, social links and resume
- **Projects** – my software and machine learning projects, with filters
- **Experience** and **Education** – timelines of my work and studies
- **Research** – publications, research interests and research experience
- **Expertise** – what I do, plus skill levels for languages, frameworks and tools
- **News** – recent updates
- **Contact** – email, phone, location and links to my profiles

## Tech stack

- React 19
- Vite
- React Router
- react-icons
- Plain CSS with CSS variables (no CSS framework)

## Getting started

You need **Node.js 20.19 or newer**.

```bash
# 1. Install packages
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

## Scripts

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Starts the dev server with live reload |
| `npm run build`   | Builds the site into the `dist` folder |
| `npm run preview` | Runs the built site locally to test it |
| `npm run lint`    | Checks the code for problems           |

## Editing the content

Almost all text on the site lives in **`src/data/content.js`**:
projects, experience, education, publications, skills, news and contact details.
Change it there and the pages update by themselves.

Images and logos are in `src/assets/`.

## Project structure

```
src/
├── assets/        # images, icons, logos
├── components/    # small reusable parts (cards, headings, icons…)
├── containers/    # Navbar, Footer, Layout
├── data/          # content.js – all site text
├── pages/         # one folder per page
├── theme/         # colours, fonts, spacing (theme.css)
├── utils/         # helpers for loading icons and logos
├── routes.jsx     # page addresses
└── main.jsx       # app entry point
```

## Contact

- Email: ahnafshahriarifti@gmail.com
- GitHub: [AhnafIfti](https://github.com/AhnafIfti)
- LinkedIn: [Ahnaf Shahriar Ifti](https://www.linkedin.com/in/ahnaf-shahriar-ifti-9b1408162/)
