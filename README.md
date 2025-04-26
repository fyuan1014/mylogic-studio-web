# MyLogic Studio Website

This is the official website for MyLogic Studio LLC, showcasing our technology services, products, and company information.

## Features

- Responsive design that works on all devices
- Modern UI with interactive components
- Sections for services, products, about, and contact
- Contact form for inquiries

## Technologies Used

- React
- TypeScript
- Styled Components
- React Router

## Development Setup

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser

## Deployment Options

### 1. GitHub Pages (Free)

One of the easiest and most cost-effective ways to deploy your website:

1. Install the gh-pages package:
   ```
   npm install --save-dev gh-pages
   ```

2. Add the following to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```