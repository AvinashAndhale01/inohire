# Next.js Migration Guide

## Migration Steps Completed

### 1. Created Next.js Configuration Files
- ✅ `next.config.js` - Next.js configuration with image domains
- ✅ `jsconfig.json` - Path aliases configuration
- ✅ `package-nextjs.json` - Next.js dependencies (rename to package.json)

### 2. Created App Router Structure
```
src/
├── app/
│   ├── layout.js (Root layout with Navbar & Footer)
│   ├── page.js (Home page)
│   ├── services/page.js
│   ├── countries/page.js
│   ├── pricing/page.js
│   ├── about/page.js
│   ├── partner/page.js
│   ├── contact/page.js
│   ├── privacy-policy/page.js
│   ├── terms/page.js
│   └── cookie-policy/page.js
├── components/ (Keep as is)
├── pages/ (Keep existing page components)
└── styles/
    └── globals.css (Copied from index.css)
```

### 3. Required Manual Changes

#### Update All Component Files:
Replace React Router imports with Next.js:
```javascript
// OLD (React Router)
import { Link } from 'react-router-dom';

// NEW (Next.js)
import Link from 'next/link';
```

#### Update Link Components:
```javascript
// OLD
<Link to="/about">About</Link>

// NEW
<Link href="/about">About</Link>
```

#### Update Navbar.jsx:
```javascript
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// ... rest of imports

const Navbar = () => {
  const pathname = usePathname(); // Replace useLocation()
  
  // Replace all 'to' with 'href' in Link components
  // Replace location.pathname with pathname
}
```

#### Update Footer.jsx:
```javascript
'use client';

import Link from "next/link";
// Replace all 'to' with 'href'
```

#### Add 'use client' to Interactive Components:
All components using hooks (useState, useEffect) need:
```javascript
'use client';
```

At the top of these files:
- src/components/layout/Navbar.jsx
- src/components/layout/Footer.jsx
- src/components/home/Testimonials.jsx
- src/components/home/CountriesCarousel.jsx
- src/components/home/TrustStats.jsx
- src/pages/Contact.jsx

### 4. Installation Steps

```bash
# 1. Backup current package.json
copy package.json package-react.json

# 2. Replace with Next.js package.json
copy package-nextjs.json package.json

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

### 5. Files to Update

#### Priority 1 - Navigation Components:
1. src/components/layout/Navbar.jsx
   - Add 'use client'
   - Replace: import { Link, useLocation } from "react-router-dom"
   - With: import Link from "next/link"; import { usePathname } from "next/navigation"
   - Replace: const location = useLocation()
   - With: const pathname = usePathname()
   - Replace: location.pathname with pathname
   - Replace: component={Link} to={"/path"} with component={Link} href={"/path"}

2. src/components/layout/Footer.jsx
   - Add 'use client'
   - Replace: import { Link } from 'react-router-dom'
   - With: import Link from 'next/link'
   - Replace all: to="/path" with href="/path"

#### Priority 2 - Page Components with Links:
Update all files in src/pages/ and src/components/home/:
- Replace Link imports
- Change 'to' props to 'href'
- Add 'use client' if using hooks

### 6. Image Optimization (Optional)
Replace <img> with Next.js Image:
```javascript
import Image from 'next/image';

<Image 
  src="/path/to/image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

### 7. PostCSS Configuration
Keep existing `postcss.config.js` - it works with Next.js

### 8. Environment Variables
Create `.env.local` for environment variables (if needed)

### 9. Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works (all links)
- [ ] Mobile menu works
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Styles applied correctly
- [ ] Scroll to top on navigation

### 10. Deployment
```bash
npm run build
npm start
```

## Key Differences: React Router vs Next.js

| Feature | React Router | Next.js |
|---------|-------------|---------|
| Routing | Client-side | File-based |
| Link Component | `<Link to="/path">` | `<Link href="/path">` |
| Current Route | `useLocation()` | `usePathname()` |
| Navigation | `useNavigate()` | `useRouter()` |
| Layout | Manual wrapper | `layout.js` |

## Notes
- All existing CSS, Tailwind, and MUI styles work as-is
- No UI/logic changes required
- Keep all existing component structure
- PostCSS and Tailwind config remain unchanged
