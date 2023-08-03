import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/menu.module.css";
import menuData from "./menuData";

const HorizontalMenu: React.FC = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Xác định mục menu đang được chọn dựa vào đường dẫn hiện tại
  React.useEffect(() => {
    const path = router.pathname;
    const activeMenuItem = menuData.find((item) => item.link === path);
    if (activeMenuItem) {
      setActiveMenu(activeMenuItem.title);
    } else {
      setActiveMenu(null);
    }
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>
      <hr />
      <ul className={styles.ul}>
        {menuData.map((item) => (
          <li key={item.title}>
            <Link href={item.link}  className={`${styles.a} ${activeMenu === item.title ? styles.active : ""}`}>
                {item.title} 
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  );
};

export default HorizontalMenu;
