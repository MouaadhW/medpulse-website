# MedPulse Website

MedPulse is a React-based website for a healthcare reception product.
It includes multiple pages (Home, About, Services, Pricing, Contact), modern UI styling, and a product demo video section.

## Tech Stack

- React 18
- React Router DOM
- Create React App
- Spline (`@splinetool/react-spline`) for the 3D landing experience

## Project Structure

- `src/App.js` → Routes + scroll-to-top behavior
- `src/components/` → Navbar and all pages
- `public/videos/medpulse-video.mp4` → Product demo video used on Services page

## How to Start

### 1) Open terminal in the project

```bash
cd "c:\Users\medpulse-website"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm start
```

### 4) Open the app

Go to:

```text
http://localhost:3000
```

## Useful Commands

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

## Video Setup

The Services page video file is currently:

```text
/public/videos/medpulse-video.mp4
```

If you replace it with another file name, update the path in:

- `src/components/Services.js`

## Current UX Notes

- Navbar CTA is `Contact Us`
- Route navigation always scrolls to top
- Contact form is simplified to email + reason
