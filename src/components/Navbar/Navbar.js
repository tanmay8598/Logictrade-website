import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { FaWallet } from "react-icons/fa";
import { MdInstallMobile } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) return;

      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setVisible(true);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0d0c0c] shadow-md py-2" : "bg-black py-4"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMobileMenu}
              >
                <div className="mr-3">
                  <Image
                    src="/newlogo.png"
                    alt="TradeLogic Logo"
                    width={100}
                    height={40}
                    className="object-contain rounded-sm"
                  />
                </div>
                {/* <span className="text-xl font-bold">
                  <span className="text-amber-400">L</span>
                  <span className="text-white">ogic</span>
                  <span className="text-amber-400">T</span>
                  <span className="text-white">rade</span>
                </span> */}
              </Link>
            </div>

            <div className="hidden lg:flex text-sm items-center space-x-6">
              <Link
                href="/services"
                className="text-white hover:text-yellow-500 transition"
              >
                Service
              </Link>
              <Link
                href="/investor-charter"
                className="text-white hover:text-yellow-500 transition"
              >
                Investor Charter
              </Link>
              <Link
                href="/complaint-board"
                className="text-white hover:text-yellow-500 transition"
              >
                Complaint Board
              </Link>
              <Link
                href="/calculator"
                className="text-white hover:text-yellow-500 transition"
              >
                Calculators
              </Link>
              <Link
                href="/about-us"
                className="text-white hover:text-yellow-500 transition"
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                className=" py-2 text-white hover:text-yellow-500 transition"
              >
                Contact Us
              </Link>

              <Link
                href="/"
                className="flex items-center px-4 py-1 border-1 border-amber-400 text-white rounded-full transition font-medium"
              >
                <div className="bg-amber-400  p-2 rounded-full flex items-center justify-center">
                  <MdInstallMobile className="text-white text-md" />
                </div>
                <span className="ml-3 text-xs font-semibold">Download App</span>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <Link
            href="/"
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <div className="mr-3">
              <Image
                src="/logotradeLogic.jpg"
                alt="TradeLogic Logo"
                width={40}
                height={40}
                className="object-contain rounded-sm"
              />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-amber-400">L</span>
              <span className="text-white">ogic</span>
              <span className="text-amber-400">T</span>
              <span className="text-white">rade</span>
            </span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="overflow-y-auto h-full">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-amber-400 hover:text-yellow-500 py-3 transition border-b border-gray-700 flex items-center gap-1"
              onClick={closeMobileMenu}
            >
              Download App{" "}
              <MdInstallMobile className=" text-lg text-amber-400" />
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-yellow-500 py-3 transition border-b border-gray-700"
              onClick={closeMobileMenu}
            >
              Service
            </Link>
            <Link
              href="/investor-charter"
              className="text-white hover:text-yellow-500 py-3 transition border-b border-gray-700"
              onClick={closeMobileMenu}
            >
              Investor Charter
            </Link>
            <Link
              href="/complaint-board"
              className="text-white hover:text-yellow-500 py-3 transition border-b border-gray-700"
              onClick={closeMobileMenu}
            >
              Complaint Board
            </Link>
            <Link
              href="/calculator"
              className="text-white hover:text-yellow-500 py-3 transition border-b border-gray-700"
              onClick={closeMobileMenu}
            >
              Calculators
            </Link>

            <Link
              href="/about-us"
              className="text-white hover:text-yellow-500 py-3 transition border-b border-gray-700"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:text-yellow-500 py-3 transition border-b border-gray-700"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
