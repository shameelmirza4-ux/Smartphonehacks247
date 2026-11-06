/* POSTS DATA: yahan sab blog posts hain. Admin page (admin.html) is file ko khud update karta hai.
   Aap chahein to haath se bhi naya post is list me add kar sakte hain. */
window.POSTS = [
  {
    "slug": "android-developer-settings-hidden-features",
    "title": "Secret Android Developer Settings & Hidden Features",
    "category": "Android",
    "date": "2026-11-04",
    "readTime": "5 min read",
    "views": 12840,
    "excerpt": "Android hides a powerful menu behind seven taps. Here are the settings that genuinely make your phone faster and smoother.",
    "image": "",
    "featured": true,
    "takeaways": [
      "Tap Build Number 7 times to unlock Developer Options",
      "Animation scales at 0.5x make any phone feel faster",
      "Only change settings you understand and note the original values"
    ],
    "content": "Every Android phone ships with a hidden menu called Developer Options. It was built for app developers, but a few switches inside it are useful for everyone.\n\n## How to unlock it\nGo to Settings > About phone and tap Build number seven times. Enter your PIN and you will see a message saying you are now a developer. The menu appears in Settings > System (or at the bottom of Settings on some brands).\n\n## Settings worth changing\n- Window, Transition and Animator animation scale: set all three to 0.5x for snappier navigation, or Off for the fastest feel.\n- Don't keep activities: only for testing, it hurts battery and multitasking, leave it off.\n- Background process limit: leave on Standard. Limiting it breaks notifications.\n- Stay awake: keeps the screen on while charging, handy when following a guide.\n- USB debugging: needed for ADB tools, turn it off when you are done.\n\n## Quick animation trick\nOpen Developer Options, scroll to the Drawing section and set the three scales. Restart the phone once to feel the difference.\n```\nWindow animation scale   -> 0.5x\nTransition animation scale -> 0.5x\nAnimator duration scale  -> 0.5x\n```\n\n## Stay safe\nNever enable options you do not understand, and never plug into unknown computers with USB debugging on. If something feels off, use the three-dot menu at the top and choose Reset to defaults."
  },
  {
    "slug": "iphone-battery-lifespan-hacks",
    "title": "iPhone Battery Lifespan Hacks & Charging Myths",
    "category": "iOS",
    "date": "2026-11-02",
    "readTime": "4 min read",
    "views": 9630,
    "excerpt": "Stop believing the old charging rules. These habits really protect battery health, and these myths can be ignored.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Keeping charge between 20% and 80% reduces long-term wear",
      "Overnight charging is safe thanks to Optimized Battery Charging",
      "Closing apps from the switcher does not save battery"
    ],
    "content": "Lithium-ion batteries age with heat and with time spent at very high or very low charge. A few settings help a lot.\n\n## Habits that help\n- Turn on Optimized Battery Charging in Settings > Battery > Battery Health & Charging.\n- If your iPhone offers a Charge Limit option, set it to 80% for daily use.\n- Avoid leaving the phone in a hot car or charging it under a pillow.\n- Use Low Power Mode when you need to stretch a day.\n- Check Maximum Capacity in Battery Health. Below 80% is when Apple considers a replacement.\n\n## Myths you can ignore\n- Closing apps in the switcher saves battery: it usually does the opposite because apps must reload.\n- Overnight charging ruins the battery: modern iPhones stop charging at full and optimize the schedule.\n- You must drain to 0% first: this is bad for lithium batteries, partial charges are better.\n\n## Settings that quietly drain power\nBackground App Refresh for apps you rarely use, Always-On Display at full brightness, and location access set to Always. Review them once and your battery will thank you."
  },
  {
    "slug": "free-security-apps-2026",
    "title": "Top 5 Free Security Apps to Protect Your Smartphone in 2026",
    "category": "Security",
    "date": "2026-10-30",
    "readTime": "6 min read",
    "views": 15210,
    "excerpt": "You do not need ten antivirus apps. These five free tools cover malware, passwords, two-factor codes, and private messaging.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Google Play Protect is already built in, keep it on",
      "A password manager is the biggest security upgrade you can make",
      "Install apps only from official stores"
    ],
    "content": "Security on a phone is mostly about good habits plus a few trustworthy tools. Here are five free ones worth installing.\n\n## 1. Google Play Protect (Android)\nAlready on your phone. Open the Play Store, tap your profile icon, choose Play Protect and make sure scanning is on.\n\n## 2. Bitwarden\nA free, open-source password manager. It creates unique passwords so one leaked site cannot unlock your other accounts.\n\n## 3. Aegis Authenticator or 2FAS\nTwo-factor codes on your phone are far safer than SMS. These apps are free, open source and support encrypted backups.\n\n## 4. Malwarebytes (free scan)\nA good second opinion if you suspect an infection. The free version scans manually, which is enough for most people.\n\n## 5. Signal\nEnd-to-end encrypted chats and calls with disappearing messages. Great for sensitive conversations.\n\n## Free is good, but be careful\nAvoid apps that promise to boost your phone and show many ads. Also ignore fake virus pop-ups in your browser, they are scams."
  },
  {
    "slug": "speed-up-slow-smartphone",
    "title": "How to Speed Up Any Slow Smartphone in 2 Minutes",
    "category": "Android",
    "date": "2026-10-27",
    "readTime": "3 min read",
    "views": 18920,
    "excerpt": "Phone feels laggy? Follow this checklist and you will often feel a real difference before your tea gets cold.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Restart weekly and keep 15% storage free",
      "Remove or disable apps you never use",
      "Shorter animations make everything feel faster"
    ],
    "content": "A slow phone is rarely broken. It is usually full, outdated, or overloaded with background apps.\n\n## The 2-minute checklist\n- Restart the phone. This clears memory and stuck processes.\n- Install pending system and app updates.\n- Delete or disable apps you have not used in a month.\n- Clear cache for the apps that use the most storage (Settings > Apps).\n- Free up at least 15% of your storage. Move photos and videos to the cloud.\n- Reduce animation scales to 0.5x in Developer Options.\n\n## For social media apps\nFacebook, Instagram and TikTok grow large caches. Use their Lite versions or the browser version if your phone is old.\n\n## If it is still slow\nBack up your data and do a factory reset. A clean start fixes most deep software slowdowns. If the phone is more than five years old and the battery is weak, a battery replacement helps too."
  },
  {
    "slug": "secret-codes-ussd-camera-tricks",
    "title": "Hidden Camera & Secret Codes Tricks (USSD Codes)",
    "category": "Hacks",
    "date": "2026-10-24",
    "readTime": "4 min read",
    "views": 21400,
    "excerpt": "Dial a few codes and unlock useful info about your phone, calls and network. Some work only on certain brands and carriers.",
    "image": "",
    "featured": false,
    "takeaways": [
      "*#06# shows your IMEI on almost every phone",
      "Call forwarding codes help you check for hidden diversions",
      "Codes vary by brand and carrier, so test calmly"
    ],
    "content": "Secret dialer codes, also called USSD or MMI codes, talk directly to your phone or carrier. A few are very handy.\n\n## Codes that work on most phones\n- *#06# shows your IMEI number. Save it for warranty or theft reports.\n- *#21# shows whether calls, messages or data are being forwarded.\n- *#62# shows where calls go when your phone is unreachable.\n- ##002# cancels all call forwarding on most GSM networks.\n\n## Brand specific codes\n- *#0*# opens a hardware test menu on many Samsung phones.\n- *#*#4636#*#* opens a phone information screen on many Android phones.\n\nTap to copy and paste into your dialer:\n```\n*#06#\n```\n```\n*#21#\n```\n\n## Camera quick tricks\nDouble press the power button to open the camera on many phones. Long press the shutter for burst mode and volume buttons for photos. Use the grid lines setting to level your shots.\n\n## A word of caution\nNever dial a code someone sent you in a message. Codes starting with ** or ending with # can change settings. Stick to the ones you know."
  },
  {
    "slug": "mobile-photography-pro-mode",
    "title": "Ultimate Mobile Photography Guide: Pro Mode Secrets",
    "category": "Camera",
    "date": "2026-10-21",
    "readTime": "7 min read",
    "views": 11050,
    "excerpt": "Pro mode looks scary, but three controls are all you need for sharper, richer photos in almost any light.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Keep ISO low and let shutter speed do the work",
      "Lock focus and exposure by long-pressing the screen",
      "Shoot RAW when you plan to edit later"
    ],
    "content": "Auto mode is great, but Pro mode lets you decide what your phone does. Start with these controls.\n\n## The three basics\n- ISO: sensitivity to light. Keep it between 50 and 200 in daylight. High ISO adds noise.\n- Shutter speed: how long the sensor looks. 1/250s or faster freezes motion. Slower speeds need a tripod.\n- White balance: set it to Daylight, Cloudy or a Kelvin number so colors stay true.\n\n## Practical tips\n- Long press the screen to lock focus and exposure before shooting.\n- Use the grid and the rule of thirds for balanced shots.\n- Clean your lens with a soft cloth. This improves photos more than any setting.\n- Use the main camera at night. Ultra-wide cameras usually have smaller sensors.\n\n## When to shoot RAW\nRAW files keep far more detail for editing in apps like Lightroom or Snapseed. They are bigger, so only use RAW for photos you care about.\n\n## Editing\nLift shadows slightly, add a touch of contrast, and avoid very heavy filters. Subtle edits look more professional."
  },
  {
    "slug": "recover-deleted-photos-files",
    "title": "How to Recover Deleted Photos and Files Easily",
    "category": "Tips",
    "date": "2026-10-18",
    "readTime": "4 min read",
    "views": 14320,
    "excerpt": "Deleted something by mistake? Do not panic. Check these places first before trying recovery apps.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Check Recently Deleted or Trash first",
      "Stop using the phone if the data is truly gone",
      "Turn on backups so this never hurts again"
    ],
    "content": "Most deleted photos are still recoverable if you act quickly.\n\n## Check these places first\n- iPhone: Photos > Albums > Recently Deleted, items stay there for 30 days.\n- Android: Google Photos > Library > Trash. Backed up items stay for 60 days, others for 30.\n- Samsung Gallery: Menu > Recycle bin.\n- Files app: look for a Trash or Recently deleted folder.\n\n## If the Trash is empty\n- Check your Google Drive, iCloud, OneDrive or WhatsApp chat backup.\n- Sign in to photos.google.com or icloud.com in a browser. Sometimes photos are there even if your phone no longer shows them.\n- Recovery apps rarely work on modern encrypted phones. Be careful with paid ones promising miracles.\n\n## Avoid making things worse\nStop taking new photos and installing apps while trying to recover, because new data can overwrite the old.\n\n## Prevent it next time\nTurn on automatic backup in Google Photos or iCloud Photos. It takes one minute and saves memories for years."
  },
  {
    "slug": "home-screen-widgets-themes",
    "title": "Customizing Your Home Screen Like a Pro (Widgets & Themes)",
    "category": "Customization",
    "date": "2026-10-15",
    "readTime": "5 min read",
    "views": 8740,
    "excerpt": "A clean, useful home screen saves time every day. Learn the layout rules designers use.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Keep one main page and one folder page",
      "Use widgets for information and icons for actions",
      "Matching icon packs make any wallpaper look premium"
    ],
    "content": "A good home screen should be calm, useful and fast.\n\n## Layout rules\n- Put your most used apps in the bottom dock and within thumb reach.\n- Limit page one to 12 apps and one widget.\n- Group the rest in folders with clear names.\n\n## Widgets that matter\nWeather, calendar, battery and a notes shortcut. Resize them to match your grid so it all aligns.\n\n## Themes and icons\n- Android: use Material You colors from your wallpaper, or a launcher like Nova or Niagara and an icon pack.\n- iPhone: long press the home screen, choose Edit > Customize to tint icons and change sizes.\n- Pick a dark wallpaper with low detail so icons stay readable.\n\n## Small details\nTurn on dark mode, remove badge counts you do not need and pick one accent color. Consistency is what makes it look professional."
  },
  {
    "slug": "gaming-performance-budget-phones",
    "title": "Gaming Performance Optimization on Budget Phones",
    "category": "Gaming",
    "date": "2026-10-12",
    "readTime": "5 min read",
    "views": 13560,
    "excerpt": "You can get smoother frame rates on a budget phone without spending a rupee. These settings help the most.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Lower graphics, but keep frame rate stable",
      "Heat is the biggest enemy of performance",
      "Free storage and a good connection matter for online games"
    ],
    "content": "Budget phones can play most popular games if you tune them properly.\n\n## In-game settings\n- Choose Smooth graphics and the highest frame rate your phone holds steadily.\n- Turn off shadows, anti-aliasing and motion blur first.\n- A steady 40 FPS feels better than a jumpy 60 FPS.\n\n## System settings\n- Turn on Game Mode or Game Booster if your phone has it.\n- Close background apps before you play, and disable battery saver, it throttles performance.\n- Keep at least 10% storage free.\n- Use 5 GHz Wi-Fi or a stable mobile signal for online games.\n\n## Keep it cool\nTake off thick cases, avoid playing while charging, and rest after long sessions. Heat makes the processor slow down.\n\n## Controls\nIncrease touch sensitivity slightly, and use a clean screen protector with no bubbles."
  },
  {
    "slug": "whatsapp-social-privacy-settings",
    "title": "Essential WhatsApp & Social Media Privacy Settings",
    "category": "Security",
    "date": "2026-10-09",
    "readTime": "5 min read",
    "views": 16890,
    "excerpt": "Five minutes in your settings can stop strangers from seeing your photo, status and chats.",
    "image": "",
    "featured": false,
    "takeaways": [
      "Turn on two-step verification in WhatsApp",
      "Limit who can add you to groups",
      "Never share your six-digit verification code"
    ],
    "content": "Your privacy settings are often too open by default. Fix them in minutes.\n\n## WhatsApp\n- Settings > Privacy > Privacy Checkup walks you through the key options.\n- Set Last seen, Profile photo and About to My contacts.\n- Turn on Settings > Account > Two-step verification.\n- Set Groups to My contacts so strangers cannot add you.\n- Turn on Silence unknown callers to cut spam calls.\n- Use Chat lock for private conversations.\n\n## Instagram, Facebook and TikTok\n- Make your account private if you do not need a public profile.\n- Review tagged photos before they appear on your profile.\n- Remove old apps connected to your login in Settings.\n\n## Scam warning\nNever share your WhatsApp verification code, even with someone you know. Scammers use it to take over accounts.\n\n## Habit\nReview your privacy settings every few months, especially after big app updates."
  }
];
