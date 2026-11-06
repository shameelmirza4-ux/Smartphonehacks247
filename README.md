# Smartphonehacks247 - Free Hosting Guide (Roman Urdu)

Files:
- index.html  -> poori website
- posts.js    -> sab blog posts (admin.html isko khud update karta hai)
- admin.html  -> naya post likhne ka panel (aap ke domain/admin.html par)

## Step 1: GitHub par upload (free)
1. github.com par account banayein, phir "New repository" -> naam: smartphonehacks247 -> Public -> Create.
2. "uploading an existing file" par click karein, in 3 files ko drag karein, "Commit changes" dabayein.

## Step 2: Cloudflare Pages par live (free, credits ka koi masla nahi)
1. dash.cloudflare.com par free account banayein.
2. Workers & Pages -> Create -> Pages -> Connect to Git -> apni repository chunein.
3. Build command: khali. Build output directory: / (ya khali). Save and Deploy.
4. 1 minute me aap ko xxxx.pages.dev link mil jayega.

(Behtar: GitHub Pages bhi chal sakta hai: repo Settings -> Pages -> Branch main -> Save.)

## Step 3: Admin ke liye token (ek baar)
1. GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> Generate new token.
2. Repository access: "Only select repositories" -> sirf smartphonehacks247.
3. Permissions -> Repository permissions -> Contents: Read and write.
4. Token copy karein, apni-site/admin.html kholein, username, repo, token daal kar Connect dabayein.
5. Ab "Naya post" bharein -> Publish. Site 1-2 minute me update.

## Custom domain (Cloudflare Pages)
Pages project -> Custom domains -> Set up a domain -> domain likhein -> Cloudflare jo DNS record bataye wo lagayein.
Agar domain kisi aur jagah se khareeda hai to nameservers Cloudflare par kar dein.

## Purani site ka /posts/slug link
Nayi site me post link #/post/slug hota hai. Purane links (netlify) band ho jayenge.

## Aam tabdeeliyan
- Reviews aur compare data: index.html me REVIEWS aur COMPARE list.
- Newsletter form abhi sirf demo hai. Asli emails ke liye formspree.io ya web3forms.com ka free form lagayein.
- Contact email footer me badal dein (hello@smartphonehacks247.com).
