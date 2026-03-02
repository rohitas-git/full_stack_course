# Accessibility Guidelines

## Table of Contents

- [WCAG 2.0 Overview](#wcag-20-overview)
- [The 4 Principles of Accessibility (POUR)](#the-4-principles-of-accessibility-pour)
- [Color Contrast](#color-contrast)
- [Alternative Text](#alternative-text)
- [Links](#links)
- [Labels](#labels)
- [Lists](#lists)
- [Font-size: px vs. rem](#font-size-px-vs-rem)
- [Headings](#headings)
- [ARIA - Accessible Rich Internet Applications](#aria---accessible-rich-internet-applications)

## WCAG 2.0 Overview

**Web Content Accessibility Guidelines (WCAG) 2.0** defines three conformance levels:

- **Level A**: Minimum accessibility support.
- **Level AA**: Enhanced accessibility (recommended target).
- **Level AAA**: Enhanced accessibility for specialized audiences.

## The 4 Principles of Accessibility (POUR)

1. **Perceivable**: Users must be able to perceive information via one of their senses.
   - Example: Alt text for images, captions for videos.

2. **Operable**: Users must be able to interact with the interface.
   - Requires keyboard navigation and sufficient time to read content.

3. **Understandable**: Content and operation must be clear and intuitive.
   - Navigation should be predictable; users need help to avoid or correct mistakes.

4. **Robust**: Content must work across user agents and assistive technologies (screen readers, etc.).
   - Must remain compatible as technology evolves.

## Color Contrast

### Contrast Ratio Scale

- Black to black: 1:1 (no contrast)
- Black to white: 1:21 (maximum contrast)

### WCAG Compliance Targets

| Level   | Normal Text | Large Text (≥24px) |
| ------- | ----------- | ------------------ |
| **AA**  | 4.5:1       | 3:1                |
| **AAA** | 7:1         | 4.5:1              |

### Useful CSS Properties

- `background-blend-mode`: Control how background colors blend with underlying elements.

## Alternative Text

### Using Alt Attributes

- **Non-decorative images**: `alt="concise description of image"`
- **Decorative images**: `alt=""` (empty alt text)

Decorative images include:

- Stylistic flourishes
- Background images
- Spacing images
- Icons (if the icon's purpose is purely visual)

### Who Benefits

- People with little or no vision (screen readers read alt text)
- People who have disabled images
- Search engines (SEO benefit)

## Links

### Accessibility Requirements

- Use the semantic `<a>` element (not `<div>` or `<button>` styled as links).
- Make links visually recognizable (underline, color, hover state).
- Use descriptive, non-ambiguous link text.

### Poor vs. Good Link Text

**❌ Poor**: "Click here", "More", "Continue", "Read more"
**✅ Good**: "Learn about our pricing", "View product details", "Read the full article"

## Labels

### Text Inputs

- **Placeholder is insufficient** for screen readers; use the `<label>` element instead.
- Pattern: `<label for="input-id">Label text</label>` paired with `<input id="input-id" />`.
- See [label.html](../label.html) for examples.

### Buttons & Link Labels

Text inside `<button>` and `<a>` elements automatically creates an accessible name in the browser's accessibility layer.

### Custom Buttons

When creating custom buttons without the native `<button>` element, add the `aria-label` attribute to provide an accessible name:

```html
<div role="button" aria-label="Close dialog" onclick="closeDialog()">✕</div>
```

### Radio Buttons

Use `<fieldset>` and `<legend>` tags for accessibility:

```html
<fieldset>
  <legend>Choose an option:</legend>
  <input type="radio" name="option" id="opt1" />
  <label for="opt1">Option 1</label>
</fieldset>
```

## Lists

When presenting consecutive items, always use semantic list markup (`<ul>`, `<ol>`, `<li>`) instead of generic divs.

**✅ Correct**: Structured `<ul>` or `<ol>` with `<li>` elements.
**❌ Incorrect**: Repeating `<div>` elements that happen to be in sequence.

## Font-size: px vs. rem

### Pixels (px)

- Fixed, absolute unit.
- **Pros**: Predictable, compatible with zoom.
- **Cons**: Ignores browser font-size settings; breaks accessibility for users who enlarge text.

### Recommended: rem Units

Instead of `px`, use CSS's `rem` (root em) unit for better accessibility.

## rem Units Explained

### How rem Works

By default, most browsers set the root font size to **16px**.

- 1rem = 16px
- 2rem = 32px
- 0.5rem = 8px
- 1.5rem = 24px

### Why Use rem Over px?

1. **Accessibility**: If a user changes their browser's default font size (for better visibility), all rem-based sizes scale accordingly. Pixel values are "hard-coded" and won't adjust.
2. **Consistency**: Maintains a unified spacing and sizing system across your entire project.

### The "62.5% Trick"

Many developers set the root font size to 62.5% to simplify math calculations:

- 62.5% of 16px = **10px**
- Makes conversions easier: 1.6rem = 16px, 2.4rem = 24px, etc.

**Implementation**:

```css
html {
  /* Default 16px × 0.625 = 10px */
  font-size: 62.5%;
}

body {
  font-size: 1.6rem; /* equals 16px */
}
```

## Headings

### Best Practices

- Use headings **for structure, not style**. If you need larger text, use CSS instead.
- **Use only one `<h1>` per page** (usually the page title).
- **Keep heading levels consecutive** (h1 → h2 → h3, not h1 → h3).
- Headings introduce new content sections; never replace heading tags with `<p>` or `<div>`.
- Use semantic `<h1>`, `<h2>`, etc., to help screen reader users navigate and understand page structure.

### Example: Proper Heading Hierarchy

```html
<h1>Product Page</h1>

<h2>Features</h2>
<p>Description of features...</p>

<h2>Pricing</h2>
<h3>Basic Plan</h3>
<p>Details...</p>

<h3>Premium Plan</h3>
<p>Details...</p>
```

## ARIA - Accessible Rich Internet Applications

### The First Rule of ARIA

**Don't use ARIA. Use semantic HTML tags instead.**

ARIA should only supplement native HTML when semantic elements don't exist. Always prefer `<button>`, `<input>`, `<nav>`, etc., over ARIA roles on generic divs.

### When to Use ARIA

Use ARIA **only when you need custom interactive components** that don't have native HTML equivalents:

- Custom dropdowns, modals, or tab interfaces
- Toggle switches, sliders, and non-standard widgets
- Dynamic content announcements

### Example: Custom Toggle Button

```html
<div
  role="switch"
  aria-checked="false"
  aria-label="Toggle Dark Mode"
  tabindex="0"
  onclick="toggleTheme()"
>
  Light Mode
</div>
```

### ARIA Live Regions

Live regions announce dynamic content changes to screen readers without moving focus. Useful for real-time updates.

**Key properties**:

- `aria-live="polite"`: Announce changes when convenient (non-intrusive).
- `aria-live="assertive"`: Announce immediately (for urgent messages).
- `aria-live="off"`: Don't announce (default).

**Common use cases**:

- Real-time notifications and alerts
- Chat message updates
- Loading state changes
- Form validation errors

**Example**:

```html
<div aria-live="polite" aria-atomic="true">Items updated: 5 new messages</div>
```

- Status message afte form submission and
- updates resulting from on page filtering or searches

#### Core Attributes

- aria-live: The primary attribute that defines how updates are announced.
  - "polite": (Default for most use cases) Waits for the user to finish their current task or for a pause in speech before announcing the update.
  - "assertive": Interrupts the current speech immediately to announce the update. Use only for critical, time-sensitive information.
  - "off": Disables automatic announcements unless the user manually focuses on the region.
- aria-atomic: Determines if the screen reader should read the entire region ("true") or only the changed parts ("false", the default).
- aria-relevant: Specifies which types of changes trigger an announcement (e.g., "additions", "removals", or "text").
- aria-busy: Temporarily stops announcements while a region is still loading or being updated.

#### Specialized ARIA Roles

Some roles have built-in "live" behavior, so you don't always need to add aria-live manually:

- role="alert": Implicitly assertive and atomic="true". Best for immediate errors.
- role="status": Implicitly polite and atomic="true". Use for success messages or shopping cart updates.
- role="log": Implicitly polite. Designed for chat logs where new info is added at the end.
- role="timer" and role="marquee": Implicitly off because updates are too frequent.

#### Implementation Tips

- Mount Early: The live region container should ideally be in the DOM on page load (even if empty) so the accessibility API can track it.
- Trigger with JavaScript: Inject text or change the inner content of the pre-existing container to trigger the announcement.
- Use aria-atomic="true" for Context: If a partial update (like just a number) wouldn't make sense alone, use aria-atomic="true" to ensure the whole label is read.

### Programmable focus management

This technique involves controlling the browser's focus in response to certain user actions, like

Common use cases:

- When opening modals or menu
- After completing actions like form submissions
- To maintain a logical flow of navigation

- Modal dialogs: When a modal opens, focus should move to the first interactive element inside it. When it closes, focus should return to the element that triggered it.
- After form submission, focus moves to home page link

Example:

```Javascript
const home = document.getElementById("homelink");
home.focus();
```

## Accessibile Javascript

Instead of adding events that are accessibile using mouse, developer needs to think about touchscreen and keyboard only users.

Like showing a tooltip when mouse hovers on a button.

- this can't be accessed by keyboard only users and screen readers

Therefore, you can show message above the button and later clear it conditionally as you deem fit. (by setting text.opacity=0)

Example:
Before all fields are filled in the form, submit is disabled.
Line above the submit button shows warning. This is better than choosing to show a tooltip by hovering over the button.

When the form is filled, button is active and warning is cleared.

## Hiding Content

display: none
visibility: hidden

- Hides content from all users and assistive technologies.
- Content removed from accessibility tree

We should consider methods that hide content but keep it in the accessibility tree.

Common Methods:

1. Position content off screen using CSS. ex: chatgpt sidebar
2. Invisible with opacity attribute

Be cautious with using modals

## Skip Navigation Link

How to hide our skip link:

1. Its default state should be visually hidden yet accessible to all keyboard users.
2. It should utilize the transition property.

BAD:
display: none
visibility: hidden
< a hidden > Link </ a>

GOOD:

```css
left: 100%;
transform: translate(100%,0);
opacity:0
transition: [chanedProp] 1s
```
