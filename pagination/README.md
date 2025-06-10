# Pagination Component

A React component called **Pagination** that displays a list of products fetched from a remote API. The products are displayed in a paginated format with 10 items per page, including navigational buttons for moving to **previous** and **next** pages.

---

## Requirements

1. Fetch products from this API endpoint:  
   `https://dummyjson.com/products?limit=200`
2. Display **10 products per page** with:
   - Thumbnail image  
   - Title
3. Include pagination controls:
   - A **Previous** button with `id="previous"` to navigate to the previous page  
     - Disabled on the **first page**
   - A **Next** button with `id="next"` to navigate to the next page  
     - Disabled on the **last page**
   - Buttons for each page number (1–20), highlighting the **active** one
4. Clicking **"Next"** should go to the next page  
   Clicking **"Previous"** should go to the previous page  
   Clicking a page number (1–20) should directly load that page
5. Show **"No products found"** message if the product list is empty

---

## Additional Notes

- You **must use** `useState` and `useEffect`.
- **Do not use** any third-party pagination libraries.
- Use **functional components** only.
- You may use **react-icons**:  
  - `FiChevronsLeft` for the left arrow icon  
  - `FiChevronsRight` for the right arrow icon (optional)

## Companies asked
- Swiggy, Flipkart


Ask relevant questions
1. From where I will get data ?