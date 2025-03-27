import { useState } from "react";
import { MenuIcon as Bars3Icon } from "@heroicons/react/outline";
import useAuth from "@/auth/useAuth";
import Image from "next/image";
import Link from "next/link";
import { FaUserCheck } from "react-icons/fa6";

const DesktopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [cartLength] = useState(0);
  const { user } = useAuth();

  const handleRedirect = () => {
    // router.push("/account/");
  };

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white">
      <header className="relative bg-white">
        <section className="py-2 bg-primary text-center md-py-3">
          <p className="text-white text-xs md:text-sm">
            🎁 Buy any 3 product for ₹3000 Only!
          </p>
        </section>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2 md:px-0"
        >
          <div className="border-b border-gray-200">
            <div className="flex justify-between items-center h-24 mx-auto">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden pr-[56px]"
                onClick={() => setIsOpenSidebar(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
              </button>

              <div className="ml-2 flex lg:ml-0">
                <Link href="/" className="order-2 lg:order-1">
                  <Image
                    className="h-24 w-auto"
                    src="/logo.png"
                    alt="logo"
                    width={96}
                    height={96}
                    priority
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden sm:block relative h-4 w-4 lg:h-6 lg:w-6 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer">
                  <Link href="/track-order">
                    <Image
                      src="/tracking.svg"
                      alt="track order"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                </div>

                <button
                  className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                  onClick={() => setIsOpenSearch(true)}
                  aria-label="Search"
                >
                  <Image
                    src="/search.svg"
                    alt="search icon"
                    width={24}
                    height={24}
                    priority
                  />
                </button>

                <div className="hidden sm:block">
                  {!user ? (
                    <button
                      className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                      onClick={() => setIsOpenAccount(true)}
                      aria-label="User account"
                    >
                      <Image
                        src="/user.svg"
                        alt="user icon"
                        width={24}
                        height={24}
                        priority
                      />
                    </button>
                  ) : (
                    <button
                      className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                      onClick={handleRedirect}
                      aria-label="User account"
                    >
                      <FaUserCheck />
                    </button>
                  )}
                </div>

                <button
                  className="relative pr-4 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                  aria-label="Cart"
                >
                  <Image
                    src="/cart.svg"
                    alt="cart icon"
                    width={24}
                    height={24}
                    priority
                  />
                  {cartLength > 0 && (
                    <span
                      className="absolute right-2 -top-2 bg-primary text-white p-1 text-xs"
                      style={{
                        borderRadius: "30px",
                        height: "22px",
                        width: "22px",
                        textAlign: "center",
                        lineHeight: "10px",
                      }}
                    >
                      {cartLength}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default DesktopNav;
