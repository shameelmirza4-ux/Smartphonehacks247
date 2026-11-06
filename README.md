# Smartphonehacks247 - Free Hosting Guide (Roman Urdu)

Files:
- index.html  -> poori website (home, category, article, contact, dark/light toggle)
- posts.js    -> sab blog posts (admin.html isko khud update karta hai)
- admin.html  -> naya post likhne ka panel (aap ke domain/admin.html par)

## Step 1: GitHub par upload (free)
1. github.com par account banayein, "New repository" -> naam: smartphonehacks247 -> Public -> Create.
2. "uploading an existing file" par click karein, in 3 files ko drag karein, "Commit changes" dabayein.

## Step 2: Cloudflare Pages par live (free, credits ka koi masla nahi)
1. dash.cloudflare.com par free account banayein.
2. Workers & Pages -> Create -> Pages -> Connect to Git -> apni repository chunein.
3. Build command: khali. Build output directory: / (ya khali). Save and Deploy.
4. 1 minute me xxxx.pages.dev link mil jayega.
(GitHub Pages bhi chalta hai: repo Settings -> Pages -> Branch main -> Save.)

## Step 3: Admin token (ek baar)
1. GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> Generate new token.
2. Repository access: "Only select repositories" -> sirf smartphonehacks247.
3. Permissions -> Repository permissions -> Contents: Read and write.
4. Token copy karein, apni-site/admin.html kholein, username, repo, token daal kar Connect dabayein.
5. "Naya post" bharein -> Publish. Site 1-2 minute me update.

## Custom domain
Cloudflare Pages project -> Custom domains -> Set up a domain -> DNS record Cloudflare ke bataye mutabiq lagayein.

## Zaroori tabdeeliyan
- Social links aur follower counts: index.html me SOCIAL list.
- Newsletter aur Contact form: abhi demo/email app. Asli inbox ke liye formspree.io ya web3forms.com.
- Articles ka text sample hai, apne asli articles admin se edit karein. Images admin me "Image URL" se lagayein.
- Post links ab #/post/slug hain. Purane netlify links band ho jayenge.
