import { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useCart } from "../../context/CardContext"; // Corrected import path
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(cart.length > 0);
  }, [cart]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cart.map((item) => item.product_name));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (productName) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(productName)
        ? prevSelectedItems.filter((item) => item !== productName)
        : [...prevSelectedItems, productName]
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((productName) => removeFromCart(productName));
    setSelectedItems([]);
  };

  return (
    <div className="globalContainer ">
      {items ? (
        <div className="">
          <div className="flex items-start justify-between">
            <div className="flex">
              <input type="checkbox" onChange={handleSelectAll} />
              <p>Select all items</p>
            </div>
            <div className="flex" onClick={handleRemoveSelected}>
              <MdOutlineDeleteOutline className="h-5 w-5" />
              <p>Delete</p>
            </div>
          </div>
          {cart.map((item, index) => (
            <div key={index} className="flex items-start my-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.product_name)}
                onChange={() => handleSelectItem(item.product_name)}
              />
              <div className="w-[80px] h-[80px]">
                <img
                  src={item.img}
                  alt={item.product_name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="ml-4 align-text-bottom">
                <h3 className="text-base md:text-lg font-bold">
                  {item.product_name}
                </h3>
                <p className="text-gray-700">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[500px] flex flex-col items-center justify-center">
          <p className="mb-4">No products Added to cart</p>
          <button
            className="border border-orange-600 p-2 text-orange-600"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue to Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
