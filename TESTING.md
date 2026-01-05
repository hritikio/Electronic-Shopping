# Testing Checklist

Use this checklist to verify everything works before deploying to GitHub and production.

## Setup & Installation

- [ ] Run `npm install` successfully
- [ ] No dependency errors
- [ ] All packages installed in node_modules

## Development Server

- [ ] `npm run dev` starts without errors
- [ ] Application opens at `http://localhost:5173`
- [ ] No console errors or warnings
- [ ] HMR (Hot Module Reload) works with file changes

## Production Build

- [ ] `npm run build` completes successfully
- [ ] `dist` folder created with optimized files
- [ ] No build warnings or errors
- [ ] `npm run preview` shows production version

## Home Page (index.html)

### Navigation
- [ ] Logo displays correctly
- [ ] "Home" link points to index.html
- [ ] "Products" link points to products.html
- [ ] "About" link points to about.html
- [ ] "Contact" link points to contact.html
- [ ] Cart icon displays with correct count

### Hero Section
- [ ] Hero image displays
- [ ] "Explore Our Products" button links to products.html (NOT "prodcuts.html")
- [ ] Button is clickable

### Why Choose Us Section
- [ ] All 4 feature cards display
- [ ] Icons render correctly
- [ ] Text content is readable
- [ ] Layout is responsive

### Products Section
- [ ] Products load from products.json correctly
- [ ] Product cards display with:
  - [ ] Product image
  - [ ] Product name
  - [ ] Category tag
  - [ ] Star ratings (5 stars)
  - [ ] Description
  - [ ] Price with ₹ symbol
  - [ ] Actual price (3x markup)
  - [ ] Stock count
  - [ ] Quantity selector (+/- buttons)
  - [ ] "Add To Cart" button

### Product Interactions
- [ ] Increment (+) button increases quantity
- [ ] Decrement (-) button decreases quantity
- [ ] Quantity won't go below 1
- [ ] Quantity won't exceed stock count
- [ ] "Add To Cart" button works
- [ ] Toast notification appears when adding product
- [ ] Cart count in navbar updates

## Cart Page (addtocart.html)

### Navigation
- [ ] All navigation links work
- [ ] Can navigate back to home

### Cart Items Display
- [ ] Products added to cart display correctly
- [ ] Product image, name, category show
- [ ] Product price displays correctly
- [ ] Quantity displays correctly

### Cart Interactions
- [ ] Increment (+) button increases quantity
- [ ] Decrement (-) button decreases quantity
- [ ] Price updates when quantity changes
- [ ] Remove button works
- [ ] Toast notification shows on removal
- [ ] Cart count updates in navbar

### Cart Totals
- [ ] Sub Total calculates correctly
- [ ] Tax amount shows (₹50)
- [ ] Final Total = Sub Total + Tax
- [ ] Totals update when items change
- [ ] Empty cart shows ₹0 for all totals

### Empty Cart
- [ ] Empty cart displays message
- [ ] Can navigate home
- [ ] Cart icon shows 0

## Local Storage

- [ ] Products saved to localStorage as JSON
- [ ] Cart persists after page refresh
- [ ] Cart persists after browser closes/opens
- [ ] Private/Incognito browsing works
- [ ] Multiple products can be stored
- [ ] Removed products deleted from localStorage

## Data & API

### products.json
- [ ] File exists at API/products.json
- [ ] Valid JSON format
- [ ] All products have required fields:
  - [ ] id (unique)
  - [ ] name
  - [ ] category
  - [ ] brand
  - [ ] price
  - [ ] stock
  - [ ] description
  - [ ] image (path)
- [ ] Images exist in /public folder
- [ ] Image paths are correct

## Browser Compatibility

### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] Responsive design works

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Responsive design works

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Responsive design works

### Edge
- [ ] All features work
- [ ] No console errors
- [ ] Responsive design works

### Mobile (iOS/Android)
- [ ] Responsive layout works
- [ ] Navigation is mobile-friendly
- [ ] Touch interactions work
- [ ] Cart functions work on mobile
- [ ] Images load on mobile

## Responsive Design

### Desktop (1200px+)
- [ ] Layout displays correctly
- [ ] All elements visible
- [ ] Navigation horizontal
- [ ] Product grid displays properly

### Tablet (768px - 1199px)
- [ ] Layout adapts properly
- [ ] Navigation remains accessible
- [ ] Product grid responsive
- [ ] Touch targets are adequate

### Mobile (320px - 767px)
- [ ] All content visible
- [ ] Navigation hamburger (if implemented)
- [ ] Product cards stack vertically
- [ ] Buttons are touch-friendly
- [ ] Images scale properly

## Performance

- [ ] Page loads in < 3 seconds
- [ ] No memory leaks (DevTools)
- [ ] Smooth animations (60fps)
- [ ] No layout shift issues
- [ ] Images optimized
- [ ] Bundle size reasonable

## Styling & Visual

- [ ] All colors display correctly
- [ ] Fonts render properly
- [ ] Spacing is consistent
- [ ] Buttons have hover states
- [ ] Links are understandable
- [ ] Icons display correctly
- [ ] Alignment is proper

## JavaScript Code

- [ ] No console errors
- [ ] No console warnings
- [ ] All imports resolve correctly
- [ ] All exports are defined
- [ ] Event listeners attach properly
- [ ] Functions execute without errors
- [ ] No memory leaks

## File Structure

- [ ] All .js files present and correct
- [ ] All .html files present and correct
- [ ] style.css exists and complete
- [ ] API/products.json exists and valid
- [ ] public/ folder has images
- [ ] package.json is correct
- [ ] .gitignore is configured
- [ ] README.md is present
- [ ] DEPLOYMENT.md is present

## Git & GitHub Preparation

- [ ] `.gitignore` includes node_modules
- [ ] `.gitignore` includes dist folder
- [ ] `.gitignore` includes .env.local
- [ ] README.md is informative
- [ ] DEPLOYMENT.md is helpful
- [ ] All files committed
- [ ] No sensitive data in repo
- [ ] Repository is public (if deploying)

## Code Quality

- [ ] Consistent naming conventions
- [ ] Proper semicolon usage
- [ ] Proper indentation
- [ ] No unused variables
- [ ] No unused imports
- [ ] Meaningful comments present
- [ ] No hardcoded values (except where necessary)
- [ ] DRY principle followed

## Security

- [ ] No hardcoded API keys
- [ ] No console.log() for sensitive data
- [ ] XSS protection (innerHTML vs textContent)
- [ ] Input validation present
- [ ] HTTPS ready (for production)

## Accessibility

- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Form inputs are labeled
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

## Documentation

- [ ] README.md complete
- [ ] DEPLOYMENT.md complete
- [ ] Code comments clear
- [ ] Installation instructions clear
- [ ] Usage instructions clear

## Final Checks

- [ ] No TODO or FIXME comments left
- [ ] No console.log() debugging statements
- [ ] All team members reviewed code
- [ ] Feature requirements met
- [ ] No known bugs
- [ ] Performance acceptable
- [ ] Mobile responsive confirmed
- [ ] Ready to push to GitHub

---

## Sign Off

Once all items are checked, you're ready to:
1. Push to GitHub
2. Deploy to production
3. Share with users

**Testing Date**: _______________
**Tested By**: _______________
**Status**: ✅ READY / ❌ NEEDS FIXES
