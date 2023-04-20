const styles = {
  navbarContainer: "flex justify-between py-6 max-w-7xl mx-auto items-center",
  linksContainer: "flex gap-8 items-center",
  elevatedButton: "bg-black text-white rounded-full py-2 px-4"
}

import Image from "next/image";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="logo" width={80} height={60}/>
        </div>
        <div className={styles.linksContainer}>
          <Link href="/our-story"><a>Our Story</a></Link>
          <Link href="/explore"><a>Explore</a></Link>
          <Link href="/solutions"><a>Solutions</a></Link>
          <button className={styles.elevatedButton}>Check AQI</button>
        </div>
      </div>
    </>
  )
}
