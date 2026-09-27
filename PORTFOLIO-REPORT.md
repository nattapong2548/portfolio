## Reference and motion update — 2026-09-25

The new user reference https://pin.it/3telZRgFA resolved to the same Pinterest pin and was successfully viewed in motion. Its high-angle city canyon, cyan/red lighting, and drifting white particles now inform the hero. Earlier notes below about unavailable reference media describe the initial delivery and are superseded by this update.

The hero now uses new original AI artwork (1659 × 948 WebP, 247,132 bytes), animated with slow pan/zoom and a slight rotation, cyan/red light variation, and two particle layers. This is CSS animation of a still illustration, not the Pinterest video. No source video is copied. Pause motion was browser-tested; CSS transforms changed over time, and pause state was confirmed. Reduced-motion CSS disables all background animations. The original street-level image is preserved outside the published output in assets-source/hero-street-level.webp.

# Nattapong Seebudda — Portfolio delivery

## 1. Portfolio Positioning

Third-year Computer Engineering / IoT student at Rajamangala University of Technology Krungthep, GPA 3.58, preparing for Software Engineering Internship applications.

- **Target Role:** Software Engineering / Software Developer Intern; related full-stack and systems internships.
- **Core Strengths:** Systematic thinking, problem solving, adaptability, and self-directed learning, as described by the user.
- **Technical Direction:** Web development, software systems, and practical AI; AI/ML infrastructure is an interest rather than a professional-experience claim.
- **Personal Brand Statement:** “I connect a foundation in computer engineering with hands-on web projects and a curiosity for AI.”

**Confidence: 95%.** The positioning is directly supported by the supplied brief and avoids seniority or employment claims.

Confirmed here means supplied by the user, not independently audited. Contact details, project links, exact proficiency, dates, completed feature scope, and specific learning outcomes remain **ข้อมูลยังไม่ได้รับการยืนยัน**. No professional employment, awards, certificates, user counts, revenue, follower counts, health information, home address, or phone number is introduced.

## 2. Information Architecture

- **Hero:** Name, student identity, career direction, and a direct route to projects.
- **About:** Engineering background, interests, and strengths.
- **Skills:** Tools grouped by documented project use, academic foundations, and future interests.
- **Projects:** Two supplied projects, with expandable scope and evidence notes.
- **Education:** University, study year, GPA, coursework, and postgraduate interests.
- **Activities:** Content creation is integrated into Projects and Education; no unsupported employment timeline.
- **Contact:** Explicit unconfirmed states, ready for real contact URLs.

Recruiter journey: identify the student → understand technical direction → inspect skills → examine projects and scope → reach contact information when supplied.

**Confidence: 92%.** A single page makes the supplied amount of evidence easy to review without inventing additional routes or content.

## 3. Website Copy

**Hero:** “Nattapong Seebudda” / “Computer Engineering student. Building toward what’s next.”

“I connect a foundation in computer engineering with hands-on web projects and a curiosity for AI. Now preparing for a Software Engineering Internship.”

**About:** “I’m a third-year Computer Engineering / IoT student at Rajamangala University of Technology Krungthep. I enjoy breaking problems into smaller parts, learning new technologies, and turning ideas into software projects.”

**Skills:** “My working toolkit.” / “Tools I’ve used, foundations I’m studying, and areas I want to explore.”

**Projects:** “Ideas. Experiments. Things I’ve worked on.” The descriptions and scope are in Section 4 and in `src/data.mjs`.

**Education:** “The engineering foundation.” / “Third-year Computer Engineering / IoT student.” / “GPA 3.58.”

**Contact:** “Let’s build what’s next.” / “Preparing for Software Engineering Internship opportunities. Interested in software development, systems, and practical AI.”

Unconfirmed fields visibly use “ข้อมูลยังไม่ได้รับการยืนยัน”. Skills use evidence categories rather than assumed Comfortable/Familiar levels. Exact proficiency remains unconfirmed.

## 4. Project Presentation

### My Payment Pro

Updated from the user’s development brief: personal expense management with Supabase Auth, expense CRUD, receipt uploads, search and filters, nested categories, dashboard, calendar, monthly PDF reports, expiring report links, and English-focused Tesseract.js OCR. Technical details and the full technology stack are available in src/data.mjs with Thai translations. Repository and demo links remain unspecified.

### มีไรจะบอก — AI-assisted content workflow

- **Problem / Purpose:** Creating knowledge content and exploring a repeatable production process.
- **Solution:** AI-assisted content creation, plus an automation pipeline concept.
- **Tech Stack:** AI-assisted content tools and workflow design. Specific tools: **ข้อมูลยังไม่ได้รับการยืนยัน**.
- **Key Features / Exploration:** Content-page experience; proposed idea → research → script → AI generation → processing → publishing pipeline.
- **What I Learned:** Workflow design, AI tool usage, and process organization are documented practice areas. Specific outcomes: **ข้อมูลยังไม่ได้รับการยืนยัน**.
- **Still unconfirmed:** Automated publishing implementation, dates, tool names, links, and metrics. No follower count is stated.

## 5. Visual Design System

- **Direction:** Restrained cyberpunk atmosphere with an original city illustration, large condensed name typography, and structured content below.
- **Palette:** Background `#070c12`, surface `#0d151e`, text `#e9eef0`, secondary text `#a3b2bc`, cyan `#5ce5da`, coral `#ff977d`.
- **Typography:** Barlow Condensed for the name, Space Grotesk for content, IBM Plex Mono for metadata, and IBM Plex Sans Thai for Thai text. System fallbacks included.
- **Layout:** Maximum content width 1240px; open sections, skill rows, project panels, split education/contact layouts.
- **Components:** Semantic links, visible focus states, native expandable project notes, data-driven sections, and no fake contact buttons.
- **Animation:** Smooth anchor scrolling and subtle disclosure-icon rotation; disabled with reduced-motion preference. No autoplay or flashing animation.
- **Responsive behavior:** Two project columns on desktop and tablet, one on mobile. Navigation remains visible without a JavaScript menu.
- **Artwork:** Original generated image, optimized to WebP at 1672 × 941, 140,768 bytes. Not a screenshot of a real project or an asserted real location.

**Confidence: 80%.** The Pinterest page title indicates cyberpunk, but its actual media could not be viewed reliably. This is an interpretation of that theme, not a faithful reproduction of the unseen reference. Content contrast and restrained motion support recruiter readability.

## 6. Recommended Tech Stack

**Implemented:** Static HTML/CSS generated by Node.js ES modules, with separate data and section components. No runtime dependencies or client-side JavaScript.

**Confidence: 93%.** The current portfolio is a content-reading experience with native disclosure interactions, so a static build provides editable structure and SEO-visible content without a framework runtime.

**Future option:** Next.js + TypeScript if the site later requires a CMS, a blog with multiple routes, or authenticated editing. **Confidence: 85%.** This aligns with the supplied project experience, but those capabilities are not currently requested. This delivery does not claim to be a Next.js implementation.

## 7. Website Structure

```text
portfolio/
  src/
    data.mjs          # personal data, projects, skills, contact fields
    components.mjs    # reusable semantic HTML section functions
    styles.css        # tokens and responsive presentation
  public/
    hero.webp
  dist/               # deployable generated output
    index.html
    style.css
    hero.webp
  .openai/hosting.json # existing Sites identity
  build.mjs
  server.cjs
  package.json
  README.md
  PORTFOLIO-REPORT.md
```

## 8. Implementation

The implementation is saved in the files above. Run `npm run build` followed by `npm run dev`, then open http://127.0.0.1:4173. No package installation is needed. Edit source files, rebuild, and refresh.

Data is separated from section rendering. Strings are HTML-escaped. Project notes use native `details`/`summary` and work without JavaScript. Contact links are only rendered when verified URLs are populated. No secrets, external database connection, analytics, or data-collection form is included.

SEO includes title, description, Open Graph title/type/description/locale, Twitter summary metadata, English document language, Thai language spans, a custom favicon, and one primary heading. A production canonical URL is deferred until a real deployed URL exists. No unrequested social image is generated.

The local preview is available. Online deployment is **not complete**: the previously available Sites workflow files disappeared from the installed plugin location during the task. The project ID is retained, and the generated `dist` folder is ready for a static host. No successful public/private deployment URL is claimed.

## 9. Missing Information

- Verified professional email, GitHub URL, and optional LinkedIn URL.
- Actual resume file or URL, if a download link is desired.
- Repositories, live demos, and real screenshots for each project.
- Completed feature scope, contribution/ownership details, dates, and specific learning outcomes.
- Confirmed skill proficiency levels.
- Attendance dates and expected graduation.
- Optional profile photo. The site does not depend on a portrait.

Certificates are not required and no empty certificate section is added. Contact completion is necessary before the portfolio can function as a recruiter contact endpoint.

## 10. Sources

**User-provided information:** The attached Thai brief (`ข้อความที่วาง.txt`) supplied the name, year, field, university, GPA, career interests, strengths, project information, and coursework. No external biography was searched or merged into the site.

**User-provided visual reference:** [Pinterest reference](https://pin.it/2AXKDEx3c), resolving to [Cyberpunk Vibes: Future Meets Chaos](https://www.pinterest.com/pin/11329436558564842/). The browser returned the title; media inspection then failed. Visual matching to the actual pin remains unverified.

**Generated visual asset:** Original AI-generated city artwork, made for this portfolio. It is not factual evidence for the owner's biography or projects.

**Internet-verified personal facts:** None. No fabricated source or URL is used. The confidence percentages in this report are subjective design/engineering judgments, not statistical measurements.

## 11. Final Self-Check

- [x] Personal facts grounded in the supplied brief; uncertainty distinguished.
- [x] No fabricated sources, contact accounts, experience, achievements, or metrics.
- [x] Student-level positioning; no senior or professional employment claim.
- [x] No unnecessary sensitive personal data.
- [x] Recommendations above include confidence and reasons.
- [x] English recruiter-facing copy with clear project scope.
- [x] Cohesive dark/cyan design and original optimized artwork.
- [x] Browser inspected at desktop 1440px, tablet 820px, and mobile 390px; no horizontal overflow detected at 320px or 390px.
- [x] Navigation to projects and native disclosure opening tested; Enter key toggles disclosure.
- [x] Relevant browser console error/warning log empty during checks.
- [x] Semantic headings, alt-equivalent image label, skip link, focus styles, and reduced-motion support implemented.
- [x] Metadata, generated internal links, unique IDs, and primary heading validated.
- [x] Separated data/components/styles and build instructions provided.
- [ ] Exact Pinterest visual fidelity: reference media unavailable.
- [ ] Comprehensive WCAG audit and real assistive-technology testing: not performed.
- [ ] Production deployment: blocked by unavailable Sites workflow files.
- [ ] Verified contact links and project evidence: awaiting user information.

### Visual QA notes

1. Large two-line name remains readable on desktop and mobile; cyan surname echoes the generated city lighting.
2. Dark left-side image treatment keeps the hero copy legible, while the city remains visible on the right.
3. Project layout shifts from two to one columns to avoid narrow text columns.
4. Body copy and skill tags were enlarged after inspection; primary descriptive copy uses 16px.
5. Project details preserve evidence boundaries and expose implemented OCR and proposed pipeline status on expansion.
6. Tablet and mobile DOM overflow checks passed; contact placeholders are plain text rather than dead links.

No accepted concept screenshot was supplied or approved, so this report does not claim pixel-level fidelity to one.

