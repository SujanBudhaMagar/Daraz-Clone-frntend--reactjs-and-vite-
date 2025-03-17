import { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white mr-4">
        HELP & SUPPORT
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Help Center
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Contact Customer Care
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Shipping & Delivery
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Payment
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Order
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
