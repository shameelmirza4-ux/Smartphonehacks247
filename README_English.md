# Smartphonehacks247 - Free Hosting Guide (English)

Files:
- index.html  -> the complete website
- posts.js    -> all blog posts (admin.html updates this file automatically)
- admin.html  -> panel for writing new posts (at your-domain/admin.html)

## Step 1: Upload to GitHub (free)
1. Create an account at github.com, then click "New repository" -> name: smartphonehacks247 -> Public -> Create.
2. Click "uploading an existing file", drag in these 3 files, and click "Commit changes".

## Step 2: Go live on Cloudflare Pages (free, no credits problem)
1. Create a free account at dash.cloudflare.com.
2. Workers & Pages -> Create -> Pages -> Connect to Git -> choose your repository.
3. Build command: leave empty. Build output directory: / (or leave empty). Click Save and Deploy.
4. In 1 minute you will get a xxxx.pages.dev link.

(Alternative: GitHub Pages also works: repo Settings -> Pages -> Branch main -> Save.)

## Step 3: Token for the admin panel (one time)
1. GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> Generate new token.
2. Repository access: "Only select repositories" -> only smartphonehacks247.
3. Permissions -> Repository permissions -> Contents: Read and write.
4. Copy the token, open your-site/admin.html, enter your username, repository and token, then click Connect.
5. Now fill in "New post" -> Publish. The site updates in 1-2 minutes.

## Custom domain (Cloudflare Pages)
Pages project -> Custom domains -> Set up a domain -> enter your domain -> add the DNS records Cloudflare tells you to.
If you bought the domain somewhere else, point its nameservers to Cloudflare.

## Old /posts/slug links
On the new site, post links look like #/post/slug. Old (Netlify) links will stop working.

## Common changes
- Reviews and compare data: the REVIEWS and COMPARE lists in index.html.
- The newsletter form is only a demo for now. For real emails, add a free form from formspree.io or web3forms.com.
- Change the contact email in the footer (hello@smartphonehacks247.com).
