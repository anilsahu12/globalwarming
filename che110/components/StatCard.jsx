const styles = {
  container: "max-w-sm border border-t-black border-x-0 border-b-0",
  flexContainer: "flex justify-between items-center",
  title: "text-3xl font-bold mb-2"
}
export default function StatCard({title, stat, description, isUp}) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.flexContainer}>
          <p >  <span className="text-6xl">{isUp ? "↑" : "↓"}</span><span className="text-6xl font-bold">{stat}</span> <sup className="text-sm">{description}</sup></p>
          <p className="text-6xl ml-4">+</p>
        </div>
      </div>
    </>
  )
}