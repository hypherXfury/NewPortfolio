# Vaibhav Shrivastava — Portfolio

Personal portfolio site. Unity developer, B.Tech CS (LNCT Bhopal, 2026).

**Live:** https://vaibhavxdev.vercel.app

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where the content lives

All personal content is inline in the section components:

| Content | File |
|---|---|
| Name, site URL, SEO / OG metadata | `app/layout.tsx` |
| Intro, role, location, social links, resume | `app/sections/Hero.tsx` |
| Work history | `app/components/CompanyExperienceCard.tsx` |
| Projects | `app/sections/Projects.tsx` |
| Education & certifications | `app/sections/Education.tsx` |
| Email, footer | `app/sections/Contact.tsx`, `app/components/CopyEmailLink.tsx` |

Resume PDF: `public/Vaibhav_Shrivastava_Resume.pdf`

## Credits

Design and component code adapted from [bidyut10/bidyut-portfolio](https://github.com/bidyut10/bidyut-portfolio) by Bidyut Kundu.
