# Semantic HTML

### What is it?
Semantic HTML is the practice of using HTML tags that accurately describe the meaning and purpose of the content they enclose, rather than just how it looks

### Semantic vs. Non-Semantic
Non-Semantic Elements: Tags like <div> and <span> tell the browser nothing about their content. They are just empty boxes used for layout and styling.
Semantic Elements: Tags like <header>, <article>, and <footer> clearly define their role. For example, a <nav> tag explicitly says, "This is a navigation menu," whereas a <div id="nav"> requires the browser to "guess" based on the ID.

## Key Benefits
1. Accessibility: Screen readers use semantic tags to create "landmarks." This allows visually impaired users to jump directly to the <main> content or skip the <nav> menu, making navigation much faster.
2. SEO (Search Engine Optimization): Search engines like Google prioritize pages with clear structures. Semantic tags help crawlers understand which content is the "main" article versus a "sidebar" (<aside>), which can improve your rankings.
3. Code Maintainability: It is much easier for you (or a teammate) to read a codebase where sections are clearly labeled with tags like <section> or <time> instead of a "soup" of nested <div> tags.
4. Future-Proofing: Browsers and new technologies (like voice assistants) are designed to work with standard semantic tags, ensuring your site remains functional as the web evolves


## Tags

Here are the semantic tags grouped by their primary function:

### 1. Structural (Layout) Elements
These tags define the high-level organization of your page. 
* <header>: Introductory content, logos, or navigation for a page or section.
* <nav>: A block of major navigation links.
* <main>: The unique, primary content of the document (use only once per page).
* <section>: A thematic grouping of content, usually with its own heading.
* <article>: Self-contained content that can stand alone (e.g., a blog post).
* <aside>: Supplemental content tangentially related to the main text (e.g., a sidebar).
* <footer>: The bottom section containing copyright, contact info, or sitemaps. 

### 2. Text Content & Meaning
These tags explain what specific pieces of text represent. 
* <h1> to <h6>: Section headings that establish content hierarchy.
* <p>: A paragraph of text.
* <strong>: Text of strong importance (typically bolded).
* <em>: Emphasized text (typically italicized).
* <blockquote>: A long quotation from another source.
* <cite>: The title of a creative work (book, movie, etc.).
* <time>: A machine-readable date or time.
* <mark>: Highlighted or marked text.
* <code>: A fragment of computer code. 

#### 3. Media & Interactive Elements
These provide context for images, media, or widgets. 
* <figure>: Self-contained content like images, diagrams, or code snippets.
* <figcaption>: A caption for a <figure>.
* <details>: A disclosure widget that the user can open or hide.
* <summary>: The visible heading for a <details> element.
* <dialog>: A native modal popup or dialog box. 

### 4. Lists & Tables
Used to organize data and items logically. 
* <ul>, <ol>, <li>: Unordered and ordered list structures.
* <dl>, <dt>, <dd>: Description lists for terms and their definitions.
* <table>, <thead>, <tbody>, <tfoot>: Grouping parts of a data table. 

#### 5. Forms & Input
Grouping and labeling user inputs. 
* <form>: A container for interactive user inputs.
* <label>: A caption for an input field.
* <fieldset>: A group of related elements within a form.
* <legend>: The caption for a <fieldset>