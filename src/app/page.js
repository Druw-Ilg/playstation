import styles from "./page.module.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Content from "@/components/Content";

import Footer from "@/components/Footer";

export default async function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Nav />
			<Content />
			<Footer />
		</main>
	);
}
