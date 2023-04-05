const styles = {
  container: "bg-black text-white",
  flexContainer: "flex justify-between bg-black text-white",
  rightContainer:
    "flex-1 py-7 px-12 py-16 border border-l-white  border-b-white py-10",
  videoContainer: "flex-1/3 py-7 px-16 py-16 border border-b-white",
  description: "text-2xl font-semibold mb-3",
};

export default function EarthRotation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.videoContainer}>
            <video className=" h-[30rem] w-100" autoPlay muted loop>
              <source src="earthRotating.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.rightContainer}>
            <p className={styles.description}>
              Are you ready to face the truth about climate change? It's not a
              distant threat or a problem for future generations - it's
              happening right now, and it's affecting every aspect of our lives.
              From extreme weather events and rising sea levels to loss of
              biodiversity and food insecurity, the impacts of climate change
              are already being felt around the world.
            </p>
            <p className={styles.description}>
              The first step is to educate ourselves and others about the
              science and solutions of climate change, and to take action in our
              daily lives and communities. Together, we can be part of the
              solution and build a brighter, greener, and more resilient world.
              So, are you ready to join the fight against climate change?
            </p>
            <p className={styles.description}>"The Climate Clock is Ticking: It's Time to Act"
</p>
          </div>
        </div>
      </div>
    </>
  );
}
