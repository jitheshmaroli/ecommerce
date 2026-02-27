import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
} from "../features/product/productThunk";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, categories, total, loading } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 8;
  const [category, setCategory] = useState("");

  console.log(products);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        limit,
        skip: (page - 1) * limit,
        category,
      }),
    );
  }, [page, category, dispatch]);

  const totalPages = Math.ceil(total / limit);

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Products</h1>
      <select
        className="border p-2 mb-4"
        onChange={(e) => {
          setCategory(e.target.value);
          setPage(1);
        }}
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) =>
              console.log("add product to cart", product)
            }
          />
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className="border px-3 py-1"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
