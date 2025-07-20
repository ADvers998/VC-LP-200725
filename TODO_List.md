# Claude Code Prompts for Vibe Coding Landing Page

## Task 1: Project Setup & Configuration
```
Create a new Next.js project with TypeScript for a landing page called "Vibe Coding". 

Requirements:
- Initialize Next.js 14+ with TypeScript and App Router
- Install and configure TailwindCSS v3.1.4
- Install required dependencies: @supabase/supabase-js, lucide-react
- Set up project structure with proper folder organization
- Configure globals.css with Tailwind directives
- Create environment variables template (.env.example)
- Add Inter font from Google Fonts
- Set up basic layout.tsx and page.tsx files

Deliverables:
- Complete project setup
- package.json with all dependencies
- tailwind.config.js configured
- Basic file structure ready for development
```

---

## Task 2: Supabase Database Schema & Configuration
```
Set up Supabase integration and database schema for the Vibe Coding landing page.

Requirements:
- Create Supabase client configuration with proper TypeScript types
- Design database table: interest_submissions
  - id: UUID primary key (auto-generated)
  - name: text (required)
  - email: text (required, unique)
  - subscribed: boolean (default false)
  - created_at: timestamp (auto-generated)
- Create TypeScript interfaces for database types
- Set up Row Level Security (RLS) policies if needed
- Create database migration/setup SQL script

Deliverables:
- lib/supabase.ts with client configuration
- types/database.ts with TypeScript interfaces
- SQL schema file for table creation
- Environment variables documentation
```

---

## Task 3: API Routes for Data Management
```
Create Next.js API routes to handle form submissions and counter data.

Requirements:
- POST /api/submit-interest: Handle form submissions
  - Validate required fields (name, email)
  - Check for duplicate emails
  - Insert data into Supabase
  - Return success/error responses with proper HTTP status codes
- GET /api/interest-count: Get total submission count
  - Query Supabase for total count
  - Return count as JSON
- Implement proper error handling and validation
- Add TypeScript types for request/response objects
- Include basic rate limiting considerations

Deliverables:
- app/api/submit-interest/route.ts
- app/api/interest-count/route.ts
- Proper error handling and validation
- TypeScript interfaces for API responses

Dependencies: Requires Task 2 (Supabase setup) to be completed first.
```

---

## Task 4: Reusable UI Components
```
Create reusable UI components for the landing page using TailwindCSS.

Requirements:
- Button component with variants (primary, secondary, loading states)
- Input component with validation states and error messages
- Checkbox component with proper accessibility
- Counter component for displaying submission count
- Loading spinner component
- All components should be fully typed with TypeScript
- Components should be responsive and accessible
- Use Inter font family throughout
- Follow atomic design principles

Deliverables:
- components/ui/Button.tsx
- components/ui/Input.tsx
- components/ui/Checkbox.tsx
- components/ui/Counter.tsx
- components/ui/LoadingSpinner.tsx
- Each component with proper TypeScript props interfaces
```

---

## Task 5: Hero Section Component with Form Logic
```
Build the main Hero Section component with integrated form functionality.

Requirements:
- Create HeroSection component with two-column layout (desktop) / stacked (mobile)
- Left side: Headline "Launch Your MVP with Confidence" and description
- Right side: Interest form with name, email, newsletter subscription checkbox
- Implement form state management with proper validation
- Connect to API routes from Task 3
- Show loading states during submission
- Display success/error messages
- Real-time counter showing "X people have already signed up"
- Fully responsive design (mobile-first approach)
- Smooth animations and transitions

Form Validation Rules:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Show inline validation errors

Deliverables:
- components/HeroSection.tsx
- Form state management with React hooks
- Integration with API routes
- Responsive design implementation
- Error handling and user feedback

Dependencies: Requires Tasks 3 & 4 (API routes and UI components) to be completed first.
```

---

## Task 6: Main Page Integration & Styling Polish
```
Integrate all components into the main page and add final styling touches.

Requirements:
- Update app/page.tsx to use HeroSection component
- Implement modern, minimalist design with:
  - Subtle gradients or geometric backgrounds
  - Proper spacing and typography hierarchy
  - Hover effects and micro-animations
  - Focus states for accessibility
- Add meta tags for SEO
- Optimize for Core Web Vitals
- Add loading states for the counter
- Implement proper error boundaries
- Test responsive behavior on all breakpoints
- Add subtle animations (fade-in, slide-up effects)

Styling Requirements:
- Clean, modern aesthetic
- Consistent color palette (use Tailwind's slate/gray colors)
- Proper contrast ratios for accessibility
- Interactive elements with hover/focus states

Deliverables:
- Completed app/page.tsx with full integration
- Final styling and animations
- SEO optimization
- Responsive design verification
- Error boundary implementation

Dependencies: Requires Task 5 (Hero Section) to be completed first.
```

---

## Task 7: Testing & Deployment Preparation
```
Add testing and prepare for Netlify deployment.

Requirements:
- Set up basic component testing with Jest/React Testing Library
- Test form validation and submission flows
- Test API routes functionality
- Create Netlify configuration
- Optimize build for production
- Add proper TypeScript strict mode checking
- Document environment variables needed
- Create deployment guide
- Add basic error monitoring setup

Testing Coverage:
- HeroSection component rendering
- Form validation logic
- API route responses
- Counter display functionality

Deliverables:
- Basic test suite setup
- netlify.toml configuration
- Production build optimization
- Deployment documentation
- Environment variables guide

Dependencies: Requires all previous tasks to be completed first.
```

---

## Task 8: Documentation & Code Quality
```
Create comprehensive documentation and ensure code quality standards.

Requirements:
- Add comprehensive README.md with:
  - Project overview and features
  - Setup instructions
  - Environment variables guide
  - Deployment steps
  - API documentation
- Add JSDoc comments to all components and functions
- Ensure consistent code formatting with Prettier
- Add ESLint configuration for code quality
- Create component documentation with usage examples
- Add troubleshooting guide
- Verify all TypeScript types are properly defined

Deliverables:
- Comprehensive README.md
- JSDoc documentation
- ESLint/Prettier configuration
- Component usage examples
- Troubleshooting guide

Dependencies: Requires all previous tasks to be completed first.
```

---

## Execution Notes:

1. **Run tasks sequentially** - Each task builds on the previous one
2. **Test after each task** - Verify functionality before moving to next task
3. **Keep code DRY** - Reuse components and utilities across tasks
4. **Environment Variables** - Set up `.env.local` with Supabase credentials after Task 2
5. **Version Control** - Commit after each task completion for rollback capability

## Success Criteria:
- ✅ Fully functional landing page with form submission
- ✅ Real-time counter displaying submission count
- ✅ Responsive design working on all devices
- ✅ Data successfully stored in Supabase
- ✅ Ready for Netlify deployment
- ✅ TypeScript strict mode with no errors
- ✅ Accessible and performant code