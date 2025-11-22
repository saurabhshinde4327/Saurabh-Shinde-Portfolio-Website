# Portfolio Website - Software Engineer & Data Science

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and attractive UI/UX design
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 Sections: Hero, About, Skills, Projects, Contact
- 📧 Contact form with email functionality

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Configure email for contact form:
   - Create a `.env.local` file in the root directory
   - Add your email configuration:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=your-contact-email@gmail.com
   ```
   Note: For Gmail, you'll need to use an App Password instead of your regular password.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Customization

- **Add Your Profile Image:**
  - Place your profile image in the `public` folder
  - Name it `profile.jpg` (or update the path in `components/Hero.tsx`)
  - Recommended size: 800x800px or larger (square image works best)
  - Supported formats: JPG, PNG, WebP

- Update personal information in components (About, Contact, etc.)
- Replace project data in `components/Projects.tsx`
- Modify skills in `components/Skills.tsx`
- Update social links in `components/Footer.tsx` and `components/Navbar.tsx`

## Environment Variables

Create a `.env.local` file for email configuration:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=your-contact-email@example.com
```

## Build for Production

```bash
npm run build
npm start
```

## SEO Features

The website includes comprehensive SEO optimization:

- ✅ **Meta Tags**: Title, description, keywords, and author information
- ✅ **Open Graph Tags**: For better social media sharing (Facebook, LinkedIn)
- ✅ **Twitter Cards**: Optimized for Twitter sharing
- ✅ **Structured Data (JSON-LD)**: Schema.org Person markup for search engines
- ✅ **Sitemap**: Auto-generated sitemap.xml
- ✅ **Robots.txt**: Search engine crawling instructions
- ✅ **Canonical URLs**: Prevents duplicate content issues

### SEO Configuration

1. **Update Domain**: Replace `https://your-domain.com` in:
   - `app/layout.tsx` (metadataBase, Open Graph, Twitter)
   - `app/sitemap.ts` (baseUrl)
   - `public/robots.txt` (Sitemap URL)
   - `components/StructuredData.tsx` (url, sameAs)

2. **Add Social Media Links**: Update social profiles in `components/StructuredData.tsx`

3. **Add Images**: 
   - Create `/public/og-image.jpg` (1200x630px) for Open Graph
   - Update image paths in metadata if using different filenames

4. **Search Console Verification**: Add verification codes in `app/layout.tsx` metadata.verification

5. **Analytics**: Consider adding Google Analytics or other tracking tools

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Nodemailer

