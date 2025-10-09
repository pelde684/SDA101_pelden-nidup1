##  What I Applied

During this project, I implemented the following concepts and techniques:

### **1. Semantic HTML**
- Used HTML5 semantic tags to structure the webpage properly:
  - <header> for the top section with the logo and navigation bar
  - <nav> for navigation links
  - <main> as the main content container
  - <section> for the hero section and product listing
  - <footer> for legal information and social media links
- This improved **accessibility**, **readability**, and **SEO** optimization.

---

### **2. CSS Flexbox**
- Applied Flexbox to:
  - Create a **responsive navigation bar** with evenly spaced links
  - Align hero section text vertically and horizontally
  - Ensure navigation elements adapted well on smaller screens

---

### **3. CSS Grid**
- Used **CSS Grid** for the product section:
  - Displayed at least **6 products** with images, titles, and prices
  - Implemented a grid that adapts dynamically using repeat(auto-fit, minmax())
  - Provided consistent spacing and alignment across different screen sizes

---

### **4. Responsive Design**
- Added **media queries** to handle different device breakpoints:
  - **Mobile-first approach**
  - **Tablet view:** 768px to 1023px
  - **Desktop view:** 1024px and above
- Used **relative units** such as em, rem, %, vh, and vw for scalable and flexible designs.
- Ensured that:
  - Images resized correctly without distortion
  - Text remained readable across devices
  - Layout adjusted smoothly when resizing the browser window

---

### **5. Hero Section Design**
- Created a hero section with:
  - **Full-width background image**
  - Overlay text for title and tagline
  - Text centered both vertically and horizontally
- Ensured that the hero section is **fully responsive** and visually appealing.

---

### **6. Footer Section**
- Designed a footer that included:
  - Links to **Privacy Policy** and **Terms of Service**
  - Placeholder social media links/icons
- Maintained a clean design consistent with the rest of the page.


## challanges faced and how did you overcome
 **Challenge:**  
  Product images stretched or appeared distorted in some screen sizes.
  
- **Solution:**  
  - Applied object-fit: cover and fixed max-width: 100% to maintain proper proportions.
  - Added responsive containers for images to ensure they scaled correctly.
**Challenge:**  
  The overlay text in the hero section was sometimes hard to read due to background image brightness.
  
- **Solution:**  
  - Added a **semi-transparent overlay layer** using `rgba()` background color.
  - Used contrasting text colors and shadows to improve readability.