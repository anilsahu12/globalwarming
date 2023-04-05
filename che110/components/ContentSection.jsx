const styles = {
  container: "border border-b-black",
  flexContainer: "flex justify-between",
  model3D: "flex-1 py-7 px-12",
  content: "flex-1 py-7 px-16 border border-r-black"
}

export default function ContentSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.content}>
            <p className="font-semibold mb-4 text-lg">The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
            </p>

            <p className="font-semibold text-lg">We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
            </p>
          </div>
          <div className={styles.model3D}>
            <p>Dummy content</p>
          </div>
        </div>
      </div>
    </>
  )
}