# 🏥 Dr. Harsha M T - Interventional Radiologist Website

A modern, professional medical website built with React and Vite, featuring a clean medical blue theme and responsive design.

![Medical Blue Theme](https://img.shields.io/badge/Theme-Medical%20Blue-2563EB)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 **Features**

### **Design**
- ✨ **Professional Medical Blue Theme** (#2563EB)
- 🎨 **Clean White Background** with subtle gradients
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- ⚡ **Smooth Animations** with Framer Motion
- 🎯 **Modern UI/UX** - Intuitive navigation

### **Sections**
- 🏠 **Hero Section** - Eye-catching introduction
- 👨‍⚕️ **About Doctor** - Professional credentials
- 💉 **Services** - Interventional radiology treatments
- 📊 **Before/After** - Patient success stories
- 💬 **Testimonials** - Patient reviews
- 📝 **Blog** - Medical insights
- ❓ **FAQ** - Common questions
- 📞 **Contact** - Appointment booking with WhatsApp

### **Technical**
- ⚛️ **React 18** - Modern React with hooks
- ⚡ **Vite** - Lightning-fast build tool
- 🎭 **Framer Motion** - Smooth animations
- 📦 **Code Splitting** - Optimized bundle size
- 🎨 **CSS Variables** - Consistent theming
- 📱 **Mobile-First** - Responsive breakpoints

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js >= 18.x
- npm >= 9.x

### **Installation**

```bash
# Clone repository
git clone https://github.com/Nitinkaroshi/dr-harshamt.git

# Navigate to directory
cd dr-harshamt

# Install dependencies
npm install

# Start development server
npm run dev
```

**Open**: http://localhost:5173

---

## 📦 **Available Scripts**

### **Development**
```bash
npm run dev
```
Starts development server with hot reload

### **Build**
```bash
npm run build
```
Creates production build in `dist/` folder

### **Preview**
```bash
npm run preview
```
Preview production build locally

### **Lint**
```bash
npm run lint
```
Check code quality with ESLint

---

## 🏗️ **Project Structure**

```
dr-harshamt/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FadeIn.jsx
│   │   │   └── ...
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── ...
│   │   └── pages/            # Full pages
│   │       ├── TreatmentPage.jsx
│   │       └── BlogPage.jsx
│   ├── config/
│   │   └── data.js           # Content data
│   ├── styles/
│   │   ├── index.css         # Global styles
│   │   └── theme.js          # Design system
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── vite.config.js           # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🎨 **Design System**

### **Colors**

```css
/* Primary Medical Blue */
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;

/* Neutral Grays */
--color-neutral-800: #1F2937;
--color-neutral-600: #4B5563;
--color-neutral-500: #6B7280;

/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #F8FAFC;
```

### **Typography**

```css
/* Font Family */
--font-family: 'Inter', sans-serif;

/* Font Sizes */
--font-size-5xl: 3rem;      /* Headings */
--font-size-base: 1rem;     /* Body */
```

### **Responsive Breakpoints**

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }
```

---

## 📱 **Responsive Design**

### **Desktop (> 768px)**
- Full navigation menu
- Large fonts and spacing
- Side-by-side layouts
- Doctor image visible

### **Tablet (481-768px)**
- Hamburger menu
- Medium fonts
- Flexible layouts
- Doctor image visible

### **Mobile (< 480px)**
- Compact hamburger menu
- Smaller fonts
- Stacked layouts
- Doctor image hidden

---

## 🔧 **Configuration**

### **Update Content**

Edit `src/config/data.js`:

```javascript
export const DOC = {
    name: "Dr. Harsha M T",
    title: "Consultant Vascular & Interventional Radiologist",
    phone: "+91 XXXXX XXXXX",
    email: "doctor@example.com",
    wa: "91XXXXXXXXXX",  // WhatsApp number
    // ... more fields
};
```

### **Update Colors**

Edit `src/styles/index.css`:

```css
:root {
    --color-primary-600: #2563EB;  /* Change primary color */
    /* ... other variables */
}
```

---

## 📊 **Performance**

### **Bundle Size**
- **Total**: ~318 KB (uncompressed)
- **Gzipped**: ~104 KB
- **CSS**: ~8 KB (gzipped)
- **JS**: ~95 KB (gzipped)

### **Optimizations**
- ✅ Code splitting (React vendor chunk)
- ✅ Minification with esbuild
- ✅ CSS optimization
- ✅ Tree shaking
- ✅ Lazy loading ready

---

## 🚀 **Deployment**

### **Render** (Recommended)

1. Connect GitHub repository on [Render](https://render.com)
2. Build command: `npm install; npm run build`
3. Publish directory: `dist`
4. Deploy!

### **Vercel**

```bash
npm install -g vercel
vercel --prod
```

### **Netlify**

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

---

## 📞 **Appointment System**

### **Current Implementation**

**WhatsApp Integration** ✅
- Direct WhatsApp link in contact section
- Opens WhatsApp with doctor's number
- Instant communication

**Contact Form** ⚠️
- Frontend validation
- Shows alert on submit
- **No backend** - data not saved

### **Future Enhancements**

- [ ] Backend API integration
- [ ] Email notifications
- [ ] SMS confirmations
- [ ] Admin dashboard
- [ ] Appointment calendar

---

## 🛠️ **Tech Stack**

### **Frontend**
- **React** 18.2.0 - UI library
- **Vite** 5.0.8 - Build tool
- **Framer Motion** 11.0.3 - Animations

### **Development**
- **ESLint** - Code linting
- **esbuild** - Minification
- **PostCSS** - CSS processing

---

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

**Dr. Harsha M T**
- Consultant Vascular & Interventional Radiologist
- SPARSH Hospital, Bengaluru
- [LinkedIn](https://www.linkedin.com/in/dr-harsha-m-t-35a225241/)

---

## 🙏 **Acknowledgments**

- Design inspired by modern medical websites
- Icons and illustrations from various sources
- Built with ❤️ for better patient care

---

## 📞 **Contact**

For questions or support:
- **Email**: [Contact via website]
- **GitHub Issues**: [Create an issue](https://github.com/Nitinkaroshi/dr-harshamt/issues)

---

## 🔄 **Version History**

### **v1.0.0** (2026-02-06)
- ✨ Initial release
- 🎨 Medical blue theme
- 📱 Responsive design
- 💬 WhatsApp integration
- 📝 Complete documentation

---

**Made with ❤️ for modern healthcare**

⭐ Star this repo if you find it helpful!
