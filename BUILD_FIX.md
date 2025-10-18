# Build and Deploy Instructions

## 🚨 ISSUE: Images not showing on Vercel

The problem is that the build isn't working correctly. Here's how to fix it:

### **Step 1: Build the frontend locally**
```bash
cd frontend
npm install
npm run build
```

### **Step 2: Check the dist folder**
The `dist` folder should contain:
- `index.html`
- `assets/` folder with compiled files
- **All public assets should be copied to root level**

### **Step 3: Deploy to Vercel**
```bash
# Commit and push your changes
git add .
git commit -m "Fix image paths and build"
git push

# Vercel will automatically redeploy
```

### **Step 4: Verify deployment**
1. Go to your Vercel dashboard
2. Check the deployment logs
3. Visit your site: https://shopamtron.vercel.app/products
4. Open browser dev tools → Network tab
5. Check if `/img1.svg`, `/img2.svg` etc. are loading

## 🔧 Alternative Quick Fix

If the build still doesn't work, you can manually create the assets in the correct location:

1. **Copy public assets to dist:**
   ```bash
   cp frontend/public/*.svg frontend/dist/
   ```

2. **Commit and deploy**

## 📋 What should be in your dist folder:
```
dist/
├── index.html
├── img1.svg    ← These should be here
├── img2.svg    ← after build
├── img3.svg    ← 
├── img4.svg    ← 
├── img5.svg    ← 
├── img6.svg    ← 
├── img7.svg    ← 
└── img8.svg    ← 
```

The images are currently in `frontend/public/` but need to be accessible at the root level (`/img1.svg`) in production.
