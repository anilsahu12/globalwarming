const styles = {
  container: "py-[5rem] text-center border border-y-black mt-1",
  title: "text-6xl max-w-7xl"
}
export default function MainSection() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Every idea needs a <span className="font-bold">Medium</span></h1>
        </div>
      </div>
    </>
  )
}