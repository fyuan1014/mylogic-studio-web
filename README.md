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

3. Deploy your website:
   ```
   npm run deploy
   ```

### 2. Netlify (Free tier available)

Netlify offers a generous free tier with continuous deployment from Git:

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your Git repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy

Netlify will automatically build and deploy your site when you push changes to your repository.

### 3. Vercel (Free tier available)

Vercel is optimized for React applications:

1. Create an account on [Vercel](https://vercel.com/)
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Deploy:
   ```
   vercel
   ```

### 4. AWS Amplify (Pay as you go)

For scalable, enterprise-grade hosting:

1. Create an AWS account
2. Set up AWS Amplify Console
3. Connect your Git repository
4. Configure build settings
5. Deploy

### 5. Traditional Web Hosting

If you prefer traditional web hosting:

1. Build your React app:
   ```
   npm run build
   ```
2. Upload the contents of the `build` folder to your web hosting server via FTP or their control panel

## Custom Domain Setup

For all deployment options above, you can connect a custom domain:

1. Purchase a domain from a registrar like Namecheap, GoDaddy, or Google Domains (~$10-15/year)
2. Follow the custom domain setup instructions for your chosen deployment platform
3. Update DNS settings at your domain registrar to point to your deployment

## Recommended Cost-Effective Setup

For the best balance of cost, performance, and ease of use:

1. Deploy on Netlify or Vercel (Free tier)
2. Purchase a custom domain (~$10-15/year)
3. Connect your custom domain to your deployment

This setup provides:
- Free hosting with HTTPS
- Continuous deployment from Git
- Global CDN for fast loading
- Custom domain support
- Total cost: Only the domain registration fee (~$10-15/year)

## Maintenance

- Keep dependencies updated regularly with `npm update`
- Monitor analytics to understand user behavior
- Make periodic content updates to keep the site fresh

## Support

For any questions or support, please contact us at info@mylogicstudio.com.
