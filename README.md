# Personal Multi-Page Website for Mahmoud Shalash

This repository contains the files for Mahmoud Shalash's personal professional multi-page website.
It features a responsive design, a 3D protein animation and typed text animations on the homepage, scroll animations, a dark mode toggle, and an embedded Twitter feed on the contact page.

## File Structure

-   `index.html`: Home page (includes NGL protein viewer).
-   `about.html`: About Me page.
-   `research.html`: Research Focus page.
-   `experience.html`: Professional Experience page.
-   `education.html`: Education page.
-   `skills.html`: Skills page.
-   `projects.html`: Personal Projects page.
-   `publications.html`: Publications page.
-   `contact.html`: Contact page (includes placeholder for Twitter feed).
-   `css/style.css`: Custom CSS styles for the website.
-   `js/script.js`: General JavaScript (Typed.js for homepage, dark mode, AOS, active nav link, etc.).
-   `js/page-transitions.js`: JavaScript for basic page transition effects.
-   `images/`: Folder for images.
    -   **REQUIRED:** `profile.jpg` (your professional headshot).
    -   **REQUIRED:** `hero-background.jpg` (background for home page hero).
-   `assets/`: Folder for other assets.
    -   **REQUIRED:** `Mahmoud_Shalash_CV.pdf` (your CV).
    -   **(Optional):** `your_protein.pdb` (if you choose to load a local PDB file for the homepage animation).

## Setup Instructions

1.  **Create Folders & Files:**
    *   On your computer, create a main folder (e.g., `mahmoud_shalash_website`).
    *   Inside it, create all the subfolders (`css`, `js`, `images`, `assets`) and all the HTML files (`index.html`, `about.html`, etc.), `style.css`, `script.js`, `page-transitions.js`, and this `README.md` file as listed in the structure above.
2.  **Copy-Paste Code:**
    *   For each file, copy the complete code provided in the instructions and paste it into the corresponding empty file you created. Save each file.
3.  **Add Your Assets (CRITICAL):**
    *   Place your `profile.jpg` and `hero-background.jpg` into the `images/` folder.
    *   Place your `Mahmoud_Shalash_CV.pdf` into the `assets/` folder.
4.  **Configure Homepage Protein Animation (CRITICAL):**
    *   Open `index.html`.
    *   Find the line in the inline `<script>` at the bottom: `const proteinToLoad = "rcsb://1UBQ";`
    *   Change `"rcsb://1UBQ"` to the 4-character PDB ID of a protein you want to display (e.g., `"rcsb://2N5E"` from the RCSB PDB).
    *   OR, if you have your own `.pdb` file (e.g., `myprotein.pdb`), put it in the `assets` folder and change the line to `const proteinToLoad = "assets/myprotein.pdb";`.
5.  **Configure Twitter Feed on Contact Page (CRITICAL):**
    *   Open `contact.html`.
    *   Find the placeholder comment: `<!-- IMPORTANT: REPLACE THE CODE BELOW... -->`.
    *   Go to `https://publish.twitter.com/`, enter your Twitter profile URL (`https://twitter.com/__shalash__`).
    *   Choose the **"Embedded Timeline"** option.
    *   Copy the HTML code provided by Twitter.
    *   **Replace the placeholder comment in `contact.html` with this copied code.**
6.  **Review Content:**
    *   Open each HTML file and review all text content to ensure it's accurate.
    *   Check all links (social media, GitHub, internal page links).
7.  **Test Locally:**
    *   Open `index.html` in your web browser.
    *   Navigate through all pages using the navbar.
    *   Test dark mode.
    *   Check animations, protein viewer on the homepage, and the Twitter feed on the contact page.
    *   Test responsiveness using your browser's developer tools.

## Deployment to GitHub Pages

1.  **Create/Use Repository:**
    *   Create a new **public** repository on GitHub named `YourGitHubUsername.github.io` (replace `YourGitHubUsername` with your actual GitHub username).
2.  **Commit and Push Files:**
    *   Add all the files and folders (`index.html`, all other HTML files, `css/`, `js/`, `images/`, `assets/`, `README.md`) to this repository.
    *   Commit the changes: `git add .` then `git commit -m "Initial multi-page website setup"`
    *   Push to GitHub: `git push origin main` (or `master`).
3.  **Enable GitHub Pages:**
    *   Go to your repository on GitHub -> Settings -> Pages.
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   For "Branch", select your main branch (`main` or `master`) and the `/(root)` folder. Click "Save".
4.  **Access Your Site:**
    *   Your website should be live at `https://YourGitHubUsername.github.io` within a few minutes.

## Libraries Used (via CDN)

-   Bootstrap 5
-   Font Awesome
-   Google Fonts
-   Typed.js (for homepage text animation)
-   AOS (Animate On Scroll)
-   NGL Viewer (for homepage protein animation)
