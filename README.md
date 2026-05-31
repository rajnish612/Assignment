# 📊 Student Dashboard (Next.js + Supabase + Framer Motion)

A modern, animated student dashboard built using **Next.js App Router**, **Supabase**, **Framer Motion**, and **Tailwind CSS**.  
The project focuses on clean server/client separation, smooth UI interactions, and a Bento-style layout system.

---

## Features

-  Server-side data fetching with Supabase
-  Bento-style responsive dashboard layout
-  Smooth animations using Framer Motion
-  Staggered page load animations
-  Interactive sidebar with layout animations
-  Course progress tracking UI
-  Skeleton loading states with Suspense
-  Graceful error handling UI

---

## Tech Stack

- Next.js (App Router)
- React Server Components (RSC)
- Supabase (Database)
- Framer Motion (Animations)
- Tailwind CSS
- Lucide Icons

---

## Architecture Overview

This project uses a **hybrid architecture** combining Server and Client Components.

in this project, I carefully separated Server Components and Client Components based on responsibility, especially because Next.js App Router enforces a strict boundary between server-only logic and browser-based interactions.

I used Server Components for all data-related logic, mainly:

Fetching course data from Supabase
Handling database queries and errors
Rendering initial dashboard structure

Example:

Dashboard (Server Component)
├── CoursesGrid (Client Component)
│   ├── CourseCard (Client Component)
├── Sidebar (Client Component)


All interactive and animated parts were moved to Client Components, such as:
Framer Motion animations (stagger, hover, spring effects)
Sidebar collapse/expand behavior
Course card hover interactions
Layout animations (layoutId highlights)

Examples:

CourseTile
Sidebar
CoursesGrid
BentoStagger


**How Data Flows Between Them**
Server Component fetches data from Supabase
Data is passed as props to Client Components
Client Components handle rendering + animations
UI interactions happen only after hydration
---

## Challenges Faced

1. Server vs Client Component Confusion

One of the main challenges was correctly separating Server Components and Client Components in Next.js App Router.

Framer Motion only works in Client Components
Supabase data fetching is best handled in Server Components

Solution:
Kept all data fetching in Server Components and moved all animations and interactions into Client Components.


2. Staggered Animations with Server Data

Since data is fetched on the server, applying staggered animations directly was not possible.

Solution:

Wrapped UI inside a Client Component (CoursesGrid)
Used staggerChildren in Framer Motion to animate items sequentially after render

3. Layout Issues with Sidebar

The sidebar initially had problems with:

Height not matching full screen
Width collapsing unexpectedly
Flex and absolute positioning conflicts

Solution:
Rebuilt layout using proper flex structure
Ensured parent container controls height (min-h-screen)
Removed conflicting width constraints

4. UI Responsiveness and Bento Layout Alignment

Creating a consistent Bento grid layout with different tile sizes required careful control of:

Grid spans
Flex behavior
Responsive breakpoints


Solution:
Standardized grid system
Used consistent col-span-* rules for tiles


### 🔹 Server Components (Data Layer)

Server components are responsible for:

- Fetching data from Supabase
- Handling database queries securely
- Rendering initial UI structure

Example:

```ts
const { data: courses, error } = await supabase
  .from("courses")
  .select("*")
  .order("created_at", { ascending: false });
