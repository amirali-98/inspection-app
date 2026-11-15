"use client";

import Link from "next/link";
import { useState } from "react";
// اگر از آیکون‌های lucide-react استفاده می‌کنید، می‌توانید برای دکمه منو از آن‌ها استفاده کنید
// import { Menu, X } from "lucide-react";

const links = [
  { id: 1, title: "ثبت گزارش", href: "/report/create" },
  { id: 2, title: "لیست گزارش‌ها", href: "/report" },
  { id: 3, title: "گزارش گیری", href: "/statistics" },
  { id: 4, title: "اطلاعات پایه", href: "/configs" },
  { id: 6, title: "کاربران", href: "/users" },
];

export default function NavLink() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* دکمه منوی همبرگر در موبایل (فقط در سایزهای کوچک نمایش داده می‌شود) */}
      <div className="md:hidden flex items-center justify-between bg-mist-700 text-mist-300 p-4 shadow-md">
        <span className="text-xl font-bold">داشبورد مدیریتی</span>
        <button
          onClick={toggleMenu}
          className="w-10 h-10 flex items-center justify-center focus:outline-none rounded-lg bg-mist-800 text-white cursor-pointer"
          aria-label="تغییر وضعیت منو"
        >
          {isMenuOpen ? (
            <span className="text-xl leading-0 font-bold">✕</span>
          ) : (
            <span className="text-xl leading-0 font-bold">☰</span>
          )}
        </button>
      </div>

      {/* پس‌زمینه تیره هنگام باز شدن منو در موبایل (Backdrop) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 z-90 md:hidden transition-opacity"
        />
      )}

      {/* سایدبار اصلی */}
      <nav
        className={`fixed top-0 right-0 bg-mist-200 w-70 h-screen flex flex-col pb-3 shadow-[-3px_0px_14px_-2px_rgba(0,0,0,0.29)] z-100 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span className="text-2xl bg-mist-700 text-mist-300 font-bold hidden md:block w-full text-center py-10 mb-10">
          داشبورد مدیریتی
        </span>

        {/* دکمه بستن منو داخل سایدبار برای موبایل */}
        <div className="flex md:hidden items-center justify-between bg-mist-700 text-mist-300 p-6 mb-6">
          <span className="text-xl font-bold">منوی دسترسی</span>
          <button
            onClick={toggleMenu}
            className="text-2xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <ul className="text-center flex flex-col gap-4 px-2">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                onClick={() => setIsMenuOpen(false)} // با کلیک روی هر لینک، منو در موبایل بسته شود
                className="block py-3 hover:bg-mist-300 transition-colors rounded-xl text-stone-800"
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <button className="mt-auto border-2 border-red-600 text-red-600 py-2 mx-2 rounded-xl cursor-pointer transition-colors hover:bg-red-600 hover:text-white">
          خروج از حساب کاربری
        </button>
      </nav>
    </>
  );
}
