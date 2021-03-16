import Head from "next/head";
import PricingComponent from "../components/PricingComponent";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Princing Component</title>
                <link rel="icon" href="./favicon.png" />
            </Head>
            <img
                className={styles.bgPattern}
                src="./img/bg-pattern.svg"
                alt="bg-pattern"
            />
            <header>
                <h1>Simple, traffic-based pricing</h1>
                <p>Sign-up for our 30-day trial. No credit card required</p>
                <img src="./img/pattern-circles.svg" alt="pattern-circles" />
            </header>
            <main>
                <PricingComponent />
            </main>
        </div>
    );
}
