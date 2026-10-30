# Web Technologies (CSC336) – FA26 BCS A Lab Mid Term

**Name:** Hamza
**Roll number:** FA24-BCS-040
**Program:** BS Computer Science, COMSATS University Islamabad, Lahore Campus

**Project:** Bloody Gaming Store – a static, responsive e-commerce front end (home page with product listing and a product detail page) built with HTML, CSS, Bootstrap and, for Task 3, plain JavaScript.

## My personal numbers

N | last two digits of roll number | **40** |
BP (breakpoint)| 600 + N | **640px** |
H (accent hue) | (N × 7) mod 360 | **280** → `hsl(280, 70%, 45%)` |
K (categories) | (N mod 3) + 3 | **4** |
Sticky offset (Task 2) | (N mod 40) + 70 | **70px** |
| Premium limit (Task 3) | N × 100 | **Rs.4,000** |

## Files changed

| File | Change |

| `index.html` | Task 1 filter markup (radios, filter bar, categories), cards merged into one grid, Task 3 search box, sort button, "No products found" message and `script.js` link |
| `products.html` | Task 2: layout rebuilt with a CSS Grid (image, details, description areas), quantity input added, longer description |
| `style.css` | Added Task 1 filter styles, Task 2 grid and sticky styles, Task 3 search, sort, Premium and empty-message styles |
| `script.js` | New file: Task 3 live search, price sort and Premium label |
| `README.md` | This file |
| `FA24-BCS-040-midterm.pdf` | Screenshots and code for each task |

## Task 1 – CSS-only category filter

- Each of the 8 product cards got a `data-category` attribute with one of K = 4 categories (Wireless Mouse, Dual-Mode Mouse, Wired Headset, Wireless Headset). I added 5 radio buttons above the grid: "All" (checked on load) plus one per category.
- The radios are siblings placed before the grid, so `#f-x:checked ~ .product-section .product-item:not([data-category="x"]) { display: none; }` hides non-matching cards without JavaScript. `display: none` removes cards from the grid flow, so no gaps are left. I merged my two product rows into one grid for the same reason.
- The selected pill uses the accent colour `hsl(280, 70%, 45%)` through a `--accent` CSS variable.

## Task 2 – Product page layout with a sticky details box

- `products.html` now uses a CSS Grid with named `grid-template-areas`: below 640px it is one column (image, details, description); from 640px it is `"image details" / "description description"`.
- From 640px, `.product-details` is `position: sticky; top: 70px` with `align-self: start`, so it stays visible while scrolling. I made the description long and gave the image area a `min-height` so the sticky effect can be seen.
- I added a quantity input to the details box and moved the product features into the description area. No JavaScript is used in Tasks 1 and 2.

## Task 3 – JavaScript live search and price sort

- `script.js` (plain JavaScript) works on the existing cards: the search box hides cards whose name does not contain the typed text (not case-sensitive) and works together with the Task 1 filter, so a card shows only if it matches both. If nothing matches, "No products found" replaces the grid.
- The "Sort by price" button reads each price from the card text and reorders the existing card elements with `appendChild` (first click low to high, then high to low); `innerHTML` is not used.
- On page load the script adds a "Premium" label to every product costing more than N × 100 = Rs.4,000.

## AI tools used

- Claude (Anthropic)
