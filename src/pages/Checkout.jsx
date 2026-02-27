import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Checkout</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 border p-3 mb-2"
        >
          <div className="h-20 w-20">
            <img
              src={item.thumbnail}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="font-medium">{item.title}</h2>
            <p>₹ {item.price}</p>
            <p className="text-black"> Qty: {item.quantity}</p>
          </div>
          <button
            onClick={() => {
              dispatch(removeFromCart(item.id));
            }}
            className="bg-red-900 text-white px-3 rounded h-10"
          >
            Remove
          </button>
        </div>
      ))}
      <h2 className="text-xl mt-4">Total: ₹ {totalPrice}</h2>
      <button
        className="bg-green-900 text-white p-2 rounded"
        onClick={() => dispatch(clearCart())}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
