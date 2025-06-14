# Tabs Component - MEDIUM

A **Tabs Component** that allows users to switch between different tab content sections. Each tab is clickable, and clicking on a tab updates the displayed content accordingly.

---

## Requirements

1. The component should accept a list of tabs as props.
2. Each tab should have a `title` and `content`.
3. The first tab should be selected by default.
4. Clicking on a tab should update the displayed content.
5. The component should be reusable and scalable.

---

## Constraints

- **Constraint 1**: The `tabs` prop is an array of objects, each containing `title` and `content`.
- **Constraint 2**: Handle an empty `tabs` array gracefully by displaying `"No tabs available"`.
- **Constraint 3**: Handle cases where `title` is missing in a tab by displaying `"Tab 1"`, `"Tab 2"`, etc., according to the tab number.
- **Constraint 4**: Handle cases where `content` is missing in a tab by displaying `"No content available"`.

## Companies asked
- Meta, Airbnb, Swiggy, Meesho

---

## Getting Started

### Install Dependencies

```bash
pnpm i
```

### Run the project

```bash
pnpm run
```

Ask relevant questions
1. What all input types do I need to support ?
2. Do I need to add validations ?