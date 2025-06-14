## Nested Checkbox Component - HARD

You have to implement a **nested checkbox component** that handles a tree-like structure of checkboxes. The component needs to support the following behavior:

---

### Functional Requirements:

1. **Parent → Child Behavior:**
  When a parent checkbox is checked or unchecked, **all its children and nested children** should follow the same state.

2. **Child → Parent Behavior:**
  When **all children** of a parent are checked, the parent should automatically become checked.
  If **any child** is unchecked, the parent should become unchecked.

3. **Recursive Tree Structure:**
  The checkbox tree can have **multiple levels of nesting**.

---

### Important Note

You **must use the same array structure** provided below (`CheckboxesData`) because all the test cases are written based on this specific tree.

## Companies asked
- Microsoft, Adobe, Amazon, Flipkart
