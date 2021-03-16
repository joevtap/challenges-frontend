import styles from "../styles/components/PricingComponent.module.scss";

export default function PricingComponent() {
    return (
        <div className={styles.cardContainer}>
            <header>
                <p>100K PAGEVIEWS</p>
                <div>
                    <h1>$16.00</h1>
                    <span>/ month</span>
                </div>
            </header>

            <input type="range" />
            <div className={styles.paymentType}>
                <p>Monthly Billing</p>
                <input type="checkbox" />
                <p>
                    Yearly Billing <span>25% discount</span>
                </p>
            </div>
            <footer>
                <div>
                    <p>
                        <img src="./img/icon-check.svg" alt="check" />
                        Unlimited websites
                    </p>
                    <p>
                        <img src="./img/icon-check.svg" alt="check" />
                        100% data ownership
                    </p>
                    <p>
                        <img src="./img/icon-check.svg" alt="check" />
                        Email reports
                    </p>
                </div>
                <a href="#">Start my trial</a>
            </footer>
        </div>
    );
}
