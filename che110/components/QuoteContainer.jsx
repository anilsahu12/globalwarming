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
           <h2 className="text-8xl font-semibold">A Threat to Our Future Generations
</h2>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.imageContainer}></div>
            <div className={styles.quotesContainer}>
              <p className={styles.quote}>
                Climate change is not just an environmental problem, its a societal and economic one. The impacts of global warming, sea-level rise, and extreme weather events are devastating communities worldwide. Its a crisis that demands urgent action on a global scale. We need to transition to a low-carbon economy, invest in renewable energy, and promote sustainable land use. We must also address the social and economic inequalities that the crisis has exacerbated. Its time to take bold steps towards a sustainable and equitable future for all.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
