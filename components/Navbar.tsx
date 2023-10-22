import Image from "next/image";
import styles from "@/app/styles";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-green-600">
            <div className={`navbar  ${styles.boxWidth}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link
                                    href="/"
                                    className="text-center text-black text-base font-bold hover:text-green-600 hover:bg-transparent">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dr-alaa"
                                    className="text-center text-black text-base font-bold hover:text-green-600 hover:bg-transparent">
                                    د / علاء
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-center text-black text-base font-bold hover:text-green-600 hover:bg-transparent">
                                    منتجاتنا
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="text-center text-black text-base font-bold hover:text-green-600 hover:bg-transparent"
                                    href="https://shadicenter.net/#services">
                                    خدماتنا
                                </a>
                            </li>
                            <li>
                                <Link
                                    className="text-center text-black text-base font-bold hover:text-green-600 hover:bg-transparent"
                                    href="/sabah-center">
                                    مركز الصباح
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="text-center text-black text-base font-bold hover:text-green-600 hover:bg-transparent"
                                    href="#">
                                    تواصل معنا
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Image
                        src="/images/logo.png"
                        width={64}
                        height={64}
                        alt="logo"
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                href="/"
                                className="flex flex-col group text-center text-white text-base font-bold hover:text-black hover:bg-transparent">
                                الرئيسية
                                <div className="w-[30px] invisible group-hover:visible h-1.5 bg-black rounded" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dr-alaa"
                                className="flex flex-col group text-center text-white text-base font-bold hover:text-black hover:bg-transparent">
                                د / علاء
                                <div className="w-[30px] invisible group-hover:visible h-1.5 bg-black rounded" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="flex flex-col group text-center text-white text-base font-bold hover:text-black hover:bg-transparent">
                                منتجاتنا
                                <div className="w-[30px] invisible group-hover:visible h-1.5 bg-black rounded" />
                            </Link>
                        </li>
                        <li>
                            <a
                                className="flex flex-col group text-center text-white text-base font-bold hover:text-black hover:bg-transparent"
                                href="https://shadicenter.net/#services">
                                خدماتنا
                                <div className="w-[30px] invisible group-hover:visible h-1.5 bg-black rounded" />
                            </a>
                        </li>
                        <li>
                            <Link
                                className="flex flex-col group text-center text-white text-base font-bold hover:text-black hover:bg-transparent"
                                href="/sabah-center">
                                مركز الصباح
                                <div className="w-[30px] invisible group-hover:visible h-1.5 bg-black rounded" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        target="_blank"
                        href="https://wa.me/0992575422134"
                        className={`${styles.ctaBtn} w-auto px-8 text-sm`}>
                        تواصل معنا
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
