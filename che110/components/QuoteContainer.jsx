const styles = {
  container: "border border-w-black min-h-screen ",
  flexContainer: "flex justify-between bg-black text-white",
  rightContainer: "flex-1 py-7 px-12 border border-l-white py-16",
  content: "flex-1 py-7 px-16 border border-r-black py-16",
  imageContainer: "",
  quotesContainer: "",
  quote: "text-2xl font-semibold mb-3",
  authorName: "text-2xl"
}

// TODO: Change photo and quotes in every 5 seconds // use an api to fetch data of quotes and images
export default function QuoteContainer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.content}>
           <h2 className="text-8xl font-semibold">Over 100 million readers and growing.
</h2>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.imageContainer}></div>
            <div className={styles.quotesContainer}>
              <p className={styles.quote}>"Medium is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It feels like one of the few pure places to go online."</p>
              <p className={styles.authorName}>Joel Leon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}