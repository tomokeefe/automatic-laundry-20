# Vercel Deployment Guide

This Automatic Laundry website is now configured as a static site ready for Vercel deployment.

## Quick Deploy to Vercel

1. **Push to GitHub** (if not already done)
2. **Connect to Vercel**:

   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Vite configuration

3. **Build Settings** (auto-configured):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Form Integration

The contact forms are currently set up with placeholder alerts. For production, integrate with:

### Recommended Form Services:

- **Formspree** (easiest): https://formspree.io/
- **EmailJS** (free tier): https://www.emailjs.com/
- **Vercel Forms**: https://vercel.com/docs/functions/serverless-functions
- **Netlify Forms**: If switching back to Netlify

### Payment Integration:

For the card ordering system, integrate with:

- **Stripe** (recommended): https://stripe.com/
- **PayPal**: https://developer.paypal.com/
- **Square**: https://developer.squareup.com/

## Environment Variables

When integrating external services, add environment variables in Vercel dashboard:

- `VITE_FORMSPREE_ENDPOINT`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- etc.

## SEO & Analytics

The site includes:

- ✅ Meta tags and Open Graph
- ✅ Local business schema
- ✅ Sitemap ready structure

Add Google Analytics by including the tracking code in `index.html`.
