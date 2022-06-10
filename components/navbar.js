import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = () => {
    const toggleBurger = () => {
        const burgerIcon = document.getElementById("burger");
        const dropMenu = document.getElementById("navbarBasicExample");
        burgerIcon.classList.toggle("is-active");
        dropMenu.classList.toggle("is-active");
    };
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a
                    role="button"
                    id="burger"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={() => toggleBurger()}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu ">
                <div className="navbar-start">
                    <Link href="/">
                        <a className="navbar-item">Github Repos 📦</a>
                    </Link>
                    <Link href="/">
                        <a className="navbar-item">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="navbar-item">About</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
