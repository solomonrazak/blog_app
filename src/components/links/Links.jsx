"use client"


import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useState } from "react";

const Links = () => {

    const [open, setOpen] = useState(false)

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        }, {
            title: "Blog",
            path: "/blog"
        }
    ]


    // TEMP
    const session = true;
    const isAdmin = true;
    
  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session?.user ? (
        <>
          {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
    <Image
        className={styles.menuButton}
        src="/images/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
    {open && (
      <div className={styles.mobileLinks}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    )}
  </div>
  )
}

export default Links;