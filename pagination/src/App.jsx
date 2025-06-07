import { useEffect, useState } from "react";
import "./App.css";
import { PAGE_SIZE } from "./constants";
import ProductCard from "./components/product-card";
import Pagination from "./components/pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/products?limit=200`);
      const json = await data.json();
      setProducts(json.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE; // 0, 10, 20
  // const end = (currentPage + 1) * PAGE_SIZE; // 10, 20, 30
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const gotoPreviousPage = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const gotoNextPage = () => {
    if (currentPage === noOfPages - 1) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  if (!products.length) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <h1>Pagination</h1>
      <Pagination
        gotoNextPage={gotoNextPage}
        gotoPreviousPage={gotoPreviousPage}
        currentPage={currentPage}
        noOfPages={noOfPages}
        handlePageChange={handlePageChange}
      />
      <div className="products-container">
        {products.slice(start, end).map((productItem) => (
          <ProductCard
            key={productItem.id}
            image={productItem.thumbnail}
            title={productItem.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
