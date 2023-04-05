const styles = {
  container: "py-[5rem] text-center bg-black text-white",
  title: "text-7xl max-w-7xl mb-16 font-bold",
  videoContainer: "",
}
export default function MainSection() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Before and After images of Earth</h1>
          <div className={styles.videoContainer}>
          <video className="absolute object-cover h-1/2 w-full" autoPlay muted loop>
          <source src='beforeAfterChange.mp4' type="video/mp4" />
        </video>
          </div>
        </div>
      </div>
    </>
  )
}