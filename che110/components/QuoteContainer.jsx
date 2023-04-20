const styles = {
  container: "",
  flexContainer: "flex justify-between bg-black text-white",
  rightContainer: "flex-1 py-7 px-12 py-16 border border-l-white border-r-0 border-b-white border-t-0 py-10",
  content: "flex-1 py-7 px-16 py-16 border border-b-white border-x-0 border-t-0",
  imageContainer: "",
  quotesContainer: "",
  quote: "text-2xl font-semibold mb-3",
}

// TODO: Change photo and quotes in every 5 seconds // use an api to fetch data of quotes and images
export default function QuoteContainer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.content}>
           <h2 className="text-8xl font-semibold">The threat of Global Warming
</h2>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.imageContainer}></div>
            <div className={styles.quotesContainer}>
              <p className={styles.quote}>
              Global warming is one of the most pressing issues facing humanity today. The Earth&apos;s temperature has been steadily increasing over the past century, primarily due to human activities like burning fossil fuels and deforestation. The consequences of this trend are already becoming apparent: melting ice caps, rising sea levels, more frequent and severe weather events, and the displacement of millions of people. </p>
              <p className={styles.quote}>It&apos;s time for all of us to take responsibility and work together to create a sustainable and livable world.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
