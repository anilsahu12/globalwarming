const styles = {
    container: "mx-auto bg-black text-white px-16 py-32"
}

export default function Resources() {
    return (
        <>

            <div className={styles.container}>
                {/* <h2 className="text-5xl font-semibold">RESOURCES TO FOLLOW</h2> */}
                <div className=" m">

                <h3 className="text-4xl font-bold mb-7">Drawdown: The Most Comprehensive Plan Ever Proposed to Reverse Global Warming</h3>
                <a href="https://www.drawdown.org/" className="text-blue-400 text-lg font-semibold hover:text-white">Reverse Global Warming Plan ➲</a>
                <h3 className="text-4xl font-bold my-7">Climate Change 101" by National Geographic</h3>
                <a href="https://www.nationalgeographic.com/environment/global-warming/global-warming-101/" className="text-blue-400 text-lg font-semibold hover:text-white">National Geographic: "Climate 101" ➲</a>
                <h3 className="text-4xl font-bold my-7">Climate Change Impacts Map" by Environmental Defense Fund</h3>
                <a href="https://www.edf.org/climate/climate-change-impacts-map" className="text-blue-400 text-lg font-semibold hover:text-white">Climate Impacts Map ➲</a>
                <h3 className="text-4xl font-bold my-7">"The Climate Reality Project" by Al Gore
</h3>
                <a href="https://www.climaterealityproject.org/" className="text-blue-400 text-lg font-semibold hover:text-white">The Climate Reality Project
 ➲</a>
            </div>
            </div>
        </>
    )
}