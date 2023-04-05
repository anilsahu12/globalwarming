const styles = {
    footerContainer: "bg-black text-white flex items-center mx-auto py-10"
}
export default function Footer () {
    return (
        <>
        <div className={styles.footerContainer}>
            <p className="mx-auto font-semibold">Made with ❤️ in INDIA</p>
        </div>
        </>
    )
}