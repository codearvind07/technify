# Typography Guide

This document outlines the consistent typography system implemented across the Technify project.

## Font Family

We use two primary font families:

1. **Primary Font**: Inter - A clean, modern sans-serif font for body text
2. **Heading Font**: Inter - The same font as primary but used for headings
3. **Monospace Font**: Fira Code - Used for code and technical content

These fonts are loaded via Google Fonts in `globals.css`.

## Typography Classes

We've created a set of utility classes for consistent typography across the application:

### Headings

- `.heading-1` - Largest heading (4xl on mobile, 5xl on medium screens, 6xl on large screens)
- `.heading-2` - Secondary heading (3xl on mobile, 4xl on medium screens, 5xl on large screens)
- `.heading-3` - Tertiary heading (2xl on mobile, 3xl on medium screens, 4xl on large screens)
- `.heading-4` - Fourth level heading (xl on mobile, 2xl on medium screens, 3xl on large screens)
- `.heading-5` - Fifth level heading (lg on mobile, xl on medium screens, 2xl on large screens)
- `.heading-6` - Sixth level heading (base on mobile, lg on medium screens, xl on large screens)

### Body Text

- `.body-large` - Large body text (lg on mobile, xl on medium screens)
- `.body-base` - Standard body text (base on mobile, lg on medium screens)
- `.body-small` - Small body text (sm on mobile, base on medium screens)

### Supporting Text

- `.caption` - Caption text (xs on mobile, sm on medium screens)
- `.overline` - Overline text (xs on mobile, sm on medium screens) with uppercase and wider tracking
- `.mono` - Monospace text using Fira Code font

## Implementation

All typography classes are defined in `app/globals.css` and can be used throughout the application. The classes automatically handle responsive font sizing and consistent styling.

## Usage Examples

```html
<h1 class="heading-1">Main Page Title</h1>
<h2 class="heading-2">Section Title</h2>
<h3 class="heading-3">Subsection Title</h3>
<p class="body-base">This is standard body text.</p>
<p class="body-small">This is smaller body text.</p>
<span class="caption">This is caption text.</span>
```

## Benefits

1. **Consistency**: All text elements follow the same design system
2. **Responsive**: Font sizes automatically adjust for different screen sizes
3. **Maintainability**: Changes to typography can be made in one place
4. **Accessibility**: Proper hierarchy and sizing improve readability