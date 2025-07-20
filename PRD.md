---Output from prompt1, dsave it in .md file 
---upload prd.md and run in claude
---------------

Here is a **Product Requirements Document (PRD)** for a **minimalist landing page** with a **Hero Section** for the **"Vibe Coding" course**. This PRD follows your provided requirements and preferred tech stack.

---

# Product Requirements Document (PRD)

## 1. Overview

**Project Name:** Vibe Coding – Hero Section Landing Page
**Owner:** \[Your Name/Team Name]
**Tech Stack:** React, Next.js, TailwindCSS (v3.1.4), Supabase, Netlify

---

## 2. Goal

Build a minimalist, modern, and responsive **Hero Section** that promotes the **Vibe Coding Course**—a program to help developers launch an MVP in under a month. The section should capture user interest by collecting their name and email via a form. The form data should be stored in Supabase and include a live counter displaying how many users have already submitted.

---

## 3. Target Audience

* **Aspiring Developers:** Individuals looking to launch a product idea quickly.
* **Startup Founders & Makers:** People in early stages of validating a product idea.
* **Freelancers:** Coders who want to speed up their MVP workflow.
* **Students:** Learning developers looking to work on a structured project with a clear goal.

---

## 4. Hero Section Components

### A. **Headline**

* **Text:** *“Launch Your MVP with Confidence.”*
* **Font:** Use **Inter**, a clean and professional sans-serif font.
* **Style:** Bold, uppercase, centered vertically next to the form.

### B. **Description Text**

* **Content:**
  *“Vibe Coding is your fast-track to launching a polished MVP within 30 days. Learn, build, and ship with confidence.”*
* **Font:** Inter, Regular, subtle grey tone (#6B7280).
* **Style:** Max-width 480px, responsive on all screens.

### C. **Interest Form**

* **Placement:** Right side of the Hero Section (on desktop view); stacked vertically on mobile.
* **Fields:**

  * Name (text input)
  * Email (email input)
  * Checkbox: "Subscribe for upcoming release, updates, and newsletter"
  * Submit Button: “Notify Me”
* **Validation:**

  * Required: Name and Email
  * Valid email format check

### D. **Submission Counter**

* **Text Example:** *“452 people have already signed up.”*
* **Data Source:** Supabase table (described below)
* **Live count:** Realtime or updated upon new form submission.

---

## 5. Supabase Integration

### A. **Database Table: `interest_submissions`**

| Column Name | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| id          | UUID (PK) | Auto-generated unique ID       |
| name        | Text      | User's name                    |
| email       | Text      | User's email                   |
| subscribed  | Boolean   | Checkbox for newsletter opt-in |
| created\_at | Timestamp | Auto-generated timestamp       |

### B. **Endpoints**

* **POST `/api/submit-interest`**

  * Adds submission to `interest_submissions`
* **GET `/api/interest-count`**

  * Returns count of all entries

---

## 6. Front-End Framework

* **React & Next.js:** Use `pages` directory or App Router (`app/`) depending on Next.js version.
* **TailwindCSS v3.1.4**

  * No PostCSS plugins
  * Use `@tailwind base`, `components`, `utilities` in `globals.css`

---

## 7. Deployment

* **Platform:** Netlify
* **Next.js Build Command:** `next build`
* **Publish Directory:** `.next`

---

## 8. Non-Functional Requirements

* **Performance:** Fast initial load, optimized assets
* **Responsiveness:** Mobile-first design
* **Accessibility:** Proper labeling for form fields
* **Security:** Basic form validation and Supabase API key protection using Next.js serverless functions (API routes)

---

## 9. Success Metrics

* ✅ 100+ form submissions within the first 2 weeks
* ✅ 99.9% uptime via Netlify
* ✅ Submissions visible in Supabase
* ✅ Live submission count updates in real-time or after form submit

---

Would you like me to generate the actual **React component**, **Supabase schema**, or **API route code** to go along with this PRD?
