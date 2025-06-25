# 🚀 weKnowCO Cloning Checklist

This marketing site is designed to be easily cloned for new verticals. Follow these steps:

## 🎯 Quick Start (5 minutes)

1. **Clone the repository**
   ```bash
   git clone [repo-url] [new-site-name]
   cd [new-site-name]
   rm -rf .git
   git init
   ```

2. **Run the setup script**
   ```bash
   node setup-new-site.js
   ```
   This will prompt you for:
   - Site name
   - Contact info
   - Pricing
   - Location details

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Add your API key**
   ```bash
   # Edit .env file
   VITE_TRUEFORM_API_KEY=your-api-key-here
   ```

5. **Start developing**
   ```bash
   npm run dev
   ```

## 📝 Manual Updates Required

### 1. **Logo Files** (Required)
Replace these files with your branding:
- `/static/images/logo/weknowco-full-logo.png` → `[yoursite]-full-logo.png`
- `/static/images/logo/weknowco-icon.svg` → `[yoursite]-icon.svg`
- Update paths in `site.config.ts`

### 2. **Brand Colors** (Required)
Edit `/tailwind.config.js`:
```js
colors: {
  'skyline-blue': {...},    // Rename to your primary
  'aspen-gold': {...},       // Rename to your secondary
  'granite-gray': {...},     // Keep or rename
  'snowfield-white': {...},  // Keep or rename
  'red-rocks-rust': {...}    // Rename to your accent
}
```

### 3. **Content Updates** (Required)
- Homepage: `/src/routes/+page.svelte`
- About: `/src/routes/(company)/about/+page.svelte`
- Services: `/src/routes/(marketing)/*/+page.svelte`
- Footer: `/src/lib/components/layout/Footer.svelte`

### 4. **Favicon** (Optional)
- `/static/favicon.ico`
- `/static/favicon.png`
- `/static/favicon.svg`

### 5. **Analytics** (Optional)
Add to `.env`:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

## 🔍 What Gets Configured Automatically

✅ Site name and tagline  
✅ Contact email and phone  
✅ Domain and URLs  
✅ White label ID for TrueForm  
✅ API endpoint naming  
✅ Price points  
✅ Location references  

## 🤝 TrueForm Integration

Your site will automatically:
- Send leads to: `/api/[your-white-label-id]-leads`
- Include white label ID in all submissions
- Tag leads with your site as the source

TrueForm should be configured to:
1. Accept leads from your domain
2. Route based on white label ID
3. Apply appropriate theming in client portal

## 🚨 Important Notes

1. **Remove old Git history** - Don't accidentally push to the original repo
2. **Update all content** - Search for "Colorado", "Denver", "Mile-High" references
3. **Test forms** - Ensure lead capture works with your TrueForm instance
4. **Check meta tags** - Update SEO descriptions for your market

## 📊 Deployment

1. **Vercel** (Recommended)
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Environment Variables**
   Add in Vercel dashboard:
   - `VITE_TRUEFORM_API_KEY`
   - `VITE_TRUEFORM_API_URL`
   - `VITE_SITE_URL`

## ✨ Tips for Customization

- **Pricing Hook**: Make it memorable like "$5,280" for Denver
- **Color Names**: Use local landmarks (e.g., "mountain-blue", "desert-sand")
- **Content Voice**: Adapt the altitude/elevation metaphors to your region
- **Testimonials**: Update with your market-specific social proof

## 🐛 Troubleshooting

1. **Build errors**: Run `npm run check` to find TypeScript issues
2. **Form not submitting**: Check API key and endpoint configuration
3. **Styles broken**: Ensure Tailwind color names match your config
4. **404 on routes**: Run `npm run build` to check for routing issues

---

**Time to clone**: ~30 minutes for full customization  
**Time to deploy**: ~5 minutes with Vercel  

Happy cloning! 🎉