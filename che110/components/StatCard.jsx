const styles = {
  container: "max-w-xs border border-t-black border-x-0 border-b-0",
  flexContainer: "flex justify-between items-center",
  title: "text-3xl font-bold mb-2 text-amber-400"
}
export default function StatCard() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Carbon Dioxide</p>
        <div className={styles.flexContainer}>
          <p >I <span className="text-4xl font-bold">412</span> <sup>part per million(current)</sup></p>
          <p className="text-2xl">+</p>
        </div>
      </div>
    </>
  )
}