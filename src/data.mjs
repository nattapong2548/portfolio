export const missing = 'ข้อมูลยังไม่ได้รับการยืนยัน';
export const profile = {
  name: 'Nattapong Seebudda',
  role: 'Computer Engineering / IoT Student',
  year: 'Third-year student',
  university: 'Rajamangala University of Technology Krungthep',
  universityThai: 'มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ',
  gpa: '3.50',
  email: 'pcsb2548@gmail.com', github: 'https://github.com/nattapong2548', linkedin: null, resume: 'nattapong-resume.pdf',
  introduction: 'I connect a foundation in computer engineering with hands-on web projects and a curiosity for AI. Now preparing for a Software Engineering Internship.',
  about: 'I’m a third-year Computer Engineering / IoT student at Rajamangala University of Technology Krungthep. I enjoy breaking problems into smaller parts, learning new technologies, and turning ideas into software projects.',
  direction: 'My current direction is software development, systems, and practical applications of AI. I’m also interested in AI/ML infrastructure and continuing my studies in Computer Science, IT, or Data Science.',
  strengths: ['Systematic thinking', 'Problem solving', 'Adaptability', 'Self-directed learning'],
};

// Describes evidence from the supplied brief, not inferred proficiency ratings.
export const skills = [
  {title: 'Web development', context: 'Used in personal projects', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui']},
  {title: 'Data & workflow', context: 'Project experience', items: ['Supabase', 'Database-backed web apps', 'GitHub workflow', 'Deployment workflow']},
  {title: 'Engineering foundations', context: 'Academic coursework & assignments', items: ['Computer architecture', 'IoT / Arduino', 'Programming', 'Digital image processing', 'Software engineering']},
  {title: 'Exploring next', context: 'Areas of interest', items: ['Software systems', 'AI/ML infrastructure', 'AI-assisted workflows', 'Automation']},
];

export const projects = [
  {
    "id": "payment",
    "number": "01",
    "category": "FULL-STACK WEB APPLICATION",
    "name": "My Payment Pro",
    "short": "A real household problem, turned into a personal tool.",
    "description": "I designed My Payment Pro to keep household purchases and reimbursement requests in one place, instead of relying on memory and scattered messages.",
    "purpose": "I buy household supplies each month, but often forget to request reimbursement. For small purchases, sending another message each time also felt inconvenient.",
    "solution": "My idea was to record what I bought, what it was for, and how much I spent, then review everything together in a monthly summary.",
    "status": "System concept, requirements & hands-on testing · Claude-assisted coding",
    "stack": [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tesseract.js"
    ],
    "features": [
      "Sign up and sign in with Supabase Auth; expense data is separated by user account.",
      "Create, edit, delete, and view expenses with dates, amounts, categories, and receipt images.",
      "Search, filter by category, date range, and amount, then sort and paginate results.",
      "Organize parent and child categories with custom colors and icons.",
      "Dashboard with total spending, transaction counts, daily averages, trends, category breakdowns, and changes against a comparison period.",
      "Expense calendar with daily totals and a list of expenses for the selected day.",
      "Monthly reports with totals, category summaries, and expense details; export to PDF or print.",
      "Read-only report links with expiration dates, revocation, and optional receipt access.",
      "Tesseract.js OCR helps fill merchant names, dates, and totals, with keyword-based category suggestions. The current configuration focuses on English text."
    ],
    "technical": [
      "Next.js App Router separates member pages, expense management, and APIs, using Server and Client Components as appropriate.",
      "Relational expense, user, and category data with parent/child categories; Row Level Security (RLS) restricts expenses and categories to their owners.",
      "Zod validates forms, and receipt uploads check file type and size.",
      "OCR image reading, receipt-text parsing, and category suggestions are separate modules.",
      "Dashboard calculations are separated from the UI and handle zero comparison baselines and month boundaries.",
      "Reusable buttons, forms, tables, confirmation dialogs, and loading states keep the interface consistent."
    ],
    "technologies": [
      "Next.js 15 / React / TypeScript",
      "Tailwind CSS / Radix UI / Framer Motion",
      "PostgreSQL / Supabase Auth / Supabase Storage",
      "React Hook Form / Zod",
      "TanStack Query / Zustand",
      "Recharts",
      "Tesseract.js",
      "html2canvas / jsPDF"
    ],
    "learning": "I learned that generating code is only the starting point. I spent weeks testing and working through receipt-upload failures, unresponsive buttons, slow pages, and layouts that did not work on mobile.",
    "pending": null,
    "repo": "https://github.com/nattapong2548/my-payment-pro",
    "demo": "https://my-payment-pro-lac.vercel.app/",
    "role": "I defined the overall system concept and how I wanted to use it. Claude helped write the code; I tested the application and worked through bugs over several weeks.",
    "process": [
      {
        "title": "Start with my own problem",
        "text": "I buy household supplies each month, but often forget to request reimbursement. For small purchases, sending another message each time also felt inconvenient."
      },
      {
        "title": "Define the workflow",
        "text": "My idea was to record what I bought, what it was for, and how much I spent, then review everything together in a monthly summary."
      },
      {
        "title": "Build with AI, then test",
        "text": "I defined the overall system concept and how I wanted to use it. Claude helped write the code; I tested the application and worked through bugs over several weeks."
      }
    ],
    "debugging": "Receipt uploads · Button interactions · Page speed · Mobile usability"
  },
  {
    "id": "automation",
    "page": "https://www.facebook.com/profile.php?id=61568978551549",
    "number": "02",
    "category": "AI-ASSISTED CONTENT WORKFLOW",
    "name": "มีไรจะบอก",
    "short": "From curiosity to a repeatable process.",
    "description": "A knowledge-sharing content page using AI-assisted content creation, with an interest in building a more systematic workflow.",
    "purpose": "Explore ways to create general-knowledge content and organize a repeatable production process.",
    "solution": "Hands-on content creation supported by AI tools, with a proposed end-to-end automation pipeline.",
    "stack": [
      "AI-assisted content",
      "Workflow design",
      "Automation exploration"
    ],
    "features": [
      "Experience creating content for a knowledge-sharing page",
      "AI-assisted content creation",
      "Proposed pipeline: idea → research → script → AI generation → processing → publishing"
    ],
    "learning": "Practice areas: content workflows, AI tools, and process design. Specific tools, implementation details, and outcomes have not yet been confirmed.",
    "status": "Content activity / pipeline concept",
    "pending": "A working automated publishing pipeline, tool names, dates, and measured outcomes have not been confirmed.",
    "repo": null,
    "demo": null
  }
];
