import styles from "../styles/components/PricingComponent.module.scss";
import React from "react";

export default function PricingComponent() {
    const [pageviews, setPageviews] = React.useState("100K");
    const [multiplier, setMultiplier] = React.useState(1);
    const [price, setPrice] = React.useState(multiplier * 16);
    const [inputRangeValue, setInputRangeValue] = React.useState(50);

    function handleInputRange(event) {
        switch (event.target.value) {
            case "0":
                setInputRangeValue(0);
                break;
            case "25":
                setInputRangeValue(25);
                break;
            case "50":
                setInputRangeValue(50);
                break;
            case "75":
                setInputRangeValue(75);
                break;
            case "100":
                setInputRangeValue(100);
                break;
        }
    }

    function handleCheckbox(event) {
        event.target.checked ? setMultiplier(0.75) : setMultiplier(1);
    }

    function updateValues() {
        switch (inputRangeValue) {
            case 0:
                setPageviews("10K");
                setPrice(multiplier * 8);
                break;
            case 25:
                setPageviews("50K");
                setPrice(multiplier * 12);
                break;
            case 50:
                setPageviews("100K");
                setPrice(multiplier * 16);
                break;
            case 75:
                setPageviews("500K");
                setPrice(multiplier * 24);
                break;
            case 100:
                setPageviews("1M");
                setPrice(multiplier * 36);
        }
    }

    React.useEffect(updateValues, [multiplier, inputRangeValue]);

    return (
        <div className={styles.cardContainer}>
            <header>
                <p>{pageviews} PAGEVIEWS</p>
                <div>
                    <h1>${price}.00</h1>
                    <span>/ month</span>
                </div>
            </header>

            <input
                step="25"
                type="range"
                defaultValue="50"
                min="0"
                max="100"
                onChange={handleInputRange}
            />
            <div className={styles.paymentType}>
                <p>Monthly Billing</p>
                <input type="checkbox" onChange={handleCheckbox} />
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
