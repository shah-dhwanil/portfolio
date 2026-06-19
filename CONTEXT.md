# Divyesh Portfolio

A static-site-generated portfolio website for Divyesh Sarvaiya, an AI/ML Engineer. Content is authored in JSON files with markdown-capable fields, then rendered via Next.js SSG into a multipage site.

## Language

**Profile**:
Structured personal data (name, title, avatar, contact info, social links) stored in `content/profile.json`.
_Avoid_: About me (that's the bio section), Personal info

**About**:
The landing page section containing a markdown bio and a list of services offered.
_Avoid_: Home, Intro

**Service**:
A reusable card component describing a skill offering (e.g., Machine Learning, Data Science). Each has a title, markdown description, and icon.
_Avoid_: Offering, Skill (skills are proficiency levels in the Resume context)

**Resume**:
The page documenting Education, Experience, and Skills. Education and Experience are timeline items. Skills are proficiency bars with percentage values.

**Experience**:
A job or internship entry in the Resume timeline. Each has title, company, date period, a markdown-rich description, and a unique slug for its detail page.
_Avoid_: Job, Work history

**Project**:
A portfolio item with title, category, image, external URL, markdown description, and slug. May optionally be marked as "coming soon." Projects are filterable by category.
_Avoid_: Work, Case study

**Blog Post**:
A published article with title, date, category, image, excerpt, external URL, and full markdown body. Blog posts link externally to Medium.
_Avoid_: Article, Publication

**Contact**:
The contact page containing a Google Maps embed and an EmailJS-powered contact form. The form collects name, email, and message, then sends via EmailJS.

**Category**:
A classification label used to group Projects. Current categories: Machine Learning, Data Science, AI Tools.
_Avoid_: Tag, Filter, Type

**Slug**:
A URL-safe identifier derived from the title, used as the path segment for detail pages (`/projects/<slug>`, `/experience/<slug>`, `/blog/<slug>`).
_Avoid_: ID, Key, Path

**SSG (Static Site Generation)**:
The build approach used — all pages are pre-rendered at build time into static HTML via `next build && next export`. No server at runtime.
_Avoid_: SSR, ISR, SPA

## Single Source of Truth

All display content lives under `content/` as JSON files. The only exceptions are:
- Images under `public/images/`
- Tailwind/shadcn theme colors in `globals.css`
- EmailJS credentials in `content/contact.json`

Editing any content JSON file and rebuilding updates the corresponding page.
