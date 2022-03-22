import styles from "./ResposiveStyles.module.css"

const BottomNavBar = () => {
    return (
        <div className={`${styles.whiteBBar}`}>
            <div className="row g-0">
                <div className="col text-center py-3">
                    <div className={`${styles.btnContainer} py-2`}>
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-purple-1.png" alt="..." />
                        {/* on click -->
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-orange-1.png" alt="..." /> */}
                    </div>
                </div>
                <div className="col text-center py-3">
                    <div className={`${styles.btnContainer} py-2`}>
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-purple-2.png" alt="..." />
                        {/* on click -->
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-orange-2.png" alt="..." /> */}
                    </div>
                </div>
                <div className="col text-center py-3">
                    <div className={`${styles.btnContainer} py-2`}>
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-purple-3.png" alt="..." />
                        {/* on click -->
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-orange-3.png" alt="..." /> */}
                    </div>
                </div>
                <div className="col text-center py-2">
                    <div className="py-3">
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-purple-4.png" alt="..." />
                        {/* on click -->
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-orange-4.png" alt="..." /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomNavBar