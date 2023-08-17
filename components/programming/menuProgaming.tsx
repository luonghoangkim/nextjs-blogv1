import { useRouter } from "next/router";
import React, { useState } from "react";
import menuDataProgramming from "./dataMenuProgramming";
import Link from "next/link";
import styles from "../../styles/menu.module.css";


const MenuProgramming = () => {
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
    // Xác định mục menu đang được chọn dựa vào đường dẫn hiện tại
    React.useEffect(() => {
      const path = router.pathname;
      const activeMenuItem = menuDataProgramming.find((item) => item.link === path);
      if (activeMenuItem) {
        setActiveMenu(activeMenuItem.title);
      } else {
        setActiveMenu(null);
      }
    }, [router.pathname]);
    return(
        <nav className={styles.nav}>
      <hr />
      <ul className={styles.ul}>
        {menuDataProgramming.map((item) => (
          <li key={item.title}>
            <Link href={item.link}  className={`${styles.a} ${activeMenu === item.title }`}>
                {item.title} 
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
    )
}

export default MenuProgramming;