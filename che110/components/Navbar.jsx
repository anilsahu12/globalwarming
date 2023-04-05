const styles = {
  navbarContainer: "flex justify-between py-6 max-w-7xl mx-auto items-center",
  linksContainer: "flex gap-8 items-center",
  elevatedButton: "bg-black text-white rounded-full py-2 px-4"
}

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Image src="medium.svg" alt="logo" width={160} height={160}/>
        </div>
        <div className={styles.linksContainer}>
            <a href="/">Our Story</a>
            <a href="/">Membership</a>
            <a href="/">Check AQI</a>
            <a href="/">Write</a>
          <button className={styles.elevatedButton}>Check AQI</button>
        </div>
      </div>

    </>
  )
}