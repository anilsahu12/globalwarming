const styles = {
  navbarContainer: "flex justify-between py-6 max-w-7xl mx-auto items-center",
  linksContainer: "flex gap-8 items-center text-white font-semibold",
  elevatedButton: "bg-black text-white rounded-full py-2 px-4"
}

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="logo" width={80} height={60}/>
        </div>
        <div className={styles.linksContainer}>
            <a href="google.com">Our Story</a>
            <a href="google.com">Explore</a>
            <a href="google.com">Solutions</a>
           
          <button className={styles.elevatedButton}>Check AQI</button>
        </div>
      </div>

    </>
  )
}
