"use client";

import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const { handleCartClick } = useShoppingCart();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <nav className="flex items-center justify-between px-4 py-3 bg-white text-gray-800">
          <div>
            <Link href="/">
              <div className="text-3xl font-bold cursor-pointer">Next<span className="text-purple-600">Commerce</span></div>
            </Link>
          </div>
          <div className="flex-grow"></div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <div className="text-xl hover:text-purple-600 cursor-pointer">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/Men">
                  <div className="text-xl hover:text-purple-600 cursor-pointer">Men</div>
                </Link>
              </li>
              <li>
                <Link href="/Women">
                  <div className="text-xl hover:text-purple-600 cursor-pointer">Women</div>
                </Link>
              </li>
              <li>
                <Link href="/Teens">
                  <div className="text-xl hover:text-purple-600 cursor-pointer">Teens</div>
                </Link>
              </li>
              <li>
                <div className="text-3xl text-gray-300 cursor-pointer hover:text-purple-600" onClick={handleCartClick}>
                  <FaShoppingBag />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
