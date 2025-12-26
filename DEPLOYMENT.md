# GitHub Pages Deployment Guide

This guide will help you deploy your personal website to GitHub Pages for **FREE** hosting.

---

## 📋 Prerequisites

1. A GitHub account (create one at [github.com](https://github.com) if you don't have one)
2. Git installed on your computer (check by running `git --version`)

---

## 🚀 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - Example: If your username is `arockiyaraja`, name it `arockiyaraja.github.io`
4. Set to **Public**
5. **Do NOT** check "Initialize with README"
6. Click **"Create repository"**

> **Important:** The repository name MUST be `your-username.github.io` for GitHub Pages to work automatically!

---

### Step 2: Initialize Git in Your Project

Open a terminal and navigate to your project folder:

```bash
cd /home/arockiya.r/.gemini/antigravity/scratch/personal-website
```

Initialize Git:

```bash
git init
git add .
git commit -m "Initial commit - Personal website"
```

---

### Step 3: Connect to GitHub and Push

Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/arockiyaraja/arockiyaraja.github.io.git
```

You'll be prompted for your GitHub username and password (or personal access token).

---

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

---

### Step 5: Access Your Website

After a few minutes (usually 2-5 minutes), your website will be live at:

```
https://YOUR-USERNAME.github.io
```

**Example:** `https://arockiyaraja.github.io`

---

## 🔄 Updating Your Website

Whenever you make changes to your website:

```bash
cd /home/arockiya.r/.gemini/antigravity/scratch/personal-website

# Add your changes
git add .

# Commit with a message describing your changes
git commit -m "Updated blog content"

# Push to GitHub
git push
```

Your website will automatically update within 1-2 minutes!

---

## 🌐 Adding a Custom Domain (Optional)

If you want to use a custom domain like `arockiyaraja.com`:

### Step 1: Buy a Domain
- Purchase from Cloudflare (~$10/year for .com)
- Or use Namecheap, Google Domains, etc.

### Step 2: Configure DNS
Add these DNS records in your domain registrar:

**For root domain (arockiyaraja.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 3: Configure on GitHub
1. Go to your repository → Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `arockiyaraja.com`)
3. Click **Save**
4. Check **"Enforce HTTPS"** (wait a few minutes for this option to appear)

### Step 4: Create CNAME File
In your project folder, create a file named `CNAME` (no extension) with your domain:

```bash
echo "arockiyaraja.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

---

## ✅ Checklist

- [ ] Create GitHub repository (username.github.io)
- [ ] Initialize Git in project folder
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Wait 2-5 minutes for deployment
- [ ] Visit your live website!
- [ ] (Optional) Configure custom domain

---

## 🐛 Troubleshooting

**Website not showing up?**
- Wait 5-10 minutes after first push
- Check Settings → Pages to see deployment status
- Make sure repository name is exactly `username.github.io`
- Ensure repository is set to Public

**Changes not reflecting?**
- Wait 1-2 minutes after push
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

**Need help?**
- Check GitHub Pages documentation: https://pages.github.com
- Verify all files are in the root directory (not in a subfolder)

---

## 📝 Quick Command Reference

```bash
# Navigate to project
cd /home/arockiya.r/.gemini/antigravity/scratch/personal-website

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# View remote URL
git remote -v
```

---

**Your website files are ready to deploy!** Follow the steps above to make your site live on the internet for free. 🎉
