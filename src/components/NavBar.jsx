import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/home">
        <h1 className="font-bold">My Store</h1>
      </Link>

      <div className="flex gap-4">
        <Link to="/checkout">Cart({cartCount}) </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
