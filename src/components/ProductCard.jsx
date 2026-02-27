const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow ">
      <img src={product.thumbnail} className="h-40 w-full object-cover" />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="text-gray-500">{product.price}</p>
      <button
        className="bg-green-500 test-white w-full mt-2 p-2"
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
