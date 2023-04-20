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
              Global warming is not just a buzzword or a vague concept, it is a real and pressing threat to our planet. Our actions are causing the Earth&apos;s temperature to rise, and this has catastrophic consequences for the environment, wildlife, and human society.
            </p>
            <p className={styles.description}>
              We are already seeing the effects of global warming in the form of more frequent and intense natural disasters, rising sea levels, and more extreme weather conditions. But we still have a chance to make a difference. By reducing our carbon footprint, adopting sustainable practices, and promoting clean energy sources, we can help to mitigate the effects of global warming and ensure a brighter, safer future for generations to come.
            </p>
            <p className={styles.description}>The Climate Clock is Ticking: It&apos;s Time to Act</p>
          </div>
        </div>
      </div>
    </>
  );
}
