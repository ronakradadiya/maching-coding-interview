**Create a Progress Bar Component** in React that visually represents a single progress value. Users should be able to increment or decrement progress using buttons. Make sure to use inline CSS.

---

### Requirements

1. Display one progress bar.
2. The bar should reflect a numeric progress (0–100%).
3. Include buttons labeled '+10%' and '-10%' to increase or decrease the bar’s value.
4. Prevent values from going below 0% or above 100%.
5. Change bar color based on value (e.g., red, orange, green).
6. Color is selected based on thresholds:

   * Red if less than 40%
   * Orange if between 40–79%
   * Green if 80% or more

---

### Constraints & Edge Cases

* **Constraint 1**: Progress must stay between 0 and 100.
* **Constraint 2**: The background color-changing div must have an id="testBgColor" for testing the background color of progress bar.
* **Edge Case 1**: If decrementing would take a value below 0, clamp it to 0.
* **Edge Case 2**: If incrementing would take a value above 100, clamp it to 100.

---

## Companies asked
- Google, Microsoft, Uber, Facebook, Amazon