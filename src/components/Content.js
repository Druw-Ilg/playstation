"use client";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Game from "./Game";
import Game2 from "./Game2";
import Accessory from "./Accessory";
import Article from "./Article";
import Banner from "./Banner";
import collection from "@/lib/collection.js";
import BounceLoader from "react-spinners/BounceLoader";

const override = {
	display: "block",
	margin: "0 auto",
	color: "#00439c",
	borderColor: "#00439c",
};

const Content = () => {
	const [data, setData] = useState([]);
	let [color, setColor] = useState("");
	let [loadBanner, setLoadBanner] = useState(true);
	let [loadReleases, setLoadReleases] = useState(true);
	let [loadComing, setLoadComing] = useState(true);
	let [loadAccessories, setLoadAccessories] = useState(true);
	let [loadArticles, setLoadArticles] = useState(true);

	useEffect(() => {
		// fetch data when the component monts
		const fetchData = async () => {
			const items = await collection();

			setData(items.items);
		};

		fetchData();
		setLoadBanner(false);
		setLoadReleases(false);
		setLoadComing(false);
		setLoadAccessories(false);
		setLoadArticles(false);
	}, []); // Empty dependency array to run once on mount

	return (
		<>
			{loadBanner ? (
				<BounceLoader
					loading={loadBanner}
					color={"#00439c"}
					cssOverride={override}
					size={70}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			) : (
				<Banner images={data.covers} />
			)}
			<section className={styles.section}>
				{/* New release */}

				<div className={styles.card}>
					<div className={styles.newReleases}>
						<div className={styles.cardHeader}>
							<h3 className={styles.cardTitle}>New Releases</h3>
							<h6 className={styles.cardDescription}>
								Amazing PS4 and PS5 games available now
							</h6>
						</div>
						<span>
							{loadReleases ? (
								<BounceLoader
									color={"#00439c"}
									loading={loadReleases}
									cssOverride={override}
									size={70}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							) : (
								data.games
									.slice(0, 8)
									.map((game) => <Game key={game.id} game={game} />)
							)}
						</span>
					</div>
				</div>

				{/* Coming soon */}

				<div className={styles.card}>
					<div className={styles.comingSoon}>
						<div className={styles.cardHeader}>
							<h3 className={styles.cardTitle}>Coming soon</h3>
							<h6 className={styles.cardDescription}>
								Awesome new experiences are just around the corner
							</h6>
						</div>
						<span>
							{loadComing ? (
								<BounceLoader
									color={"#00439c"}
									loading={loadComing}
									cssOverride={override}
									size={70}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							) : (
								data.games
									.slice(8)
									.map((game) => <Game2 key={game.id} game={game} />)
							)}
						</span>
					</div>
					<div className={styles.comingSoonOverlay}></div>
				</div>

				{/* Accessories */}

				<div className={styles.card}>
					<div className={styles.accessories}>
						<div className={styles.cardHeader}>
							<h3 className={styles.cardTitle}>Gaming Product</h3>
							<h6 className={styles.cardDescription}>
								Experience an all new generation of incredible product
							</h6>
						</div>
						<span>
							{loadAccessories ? (
								<BounceLoader
									color={"#00439c"}
									loading={loadAccessories}
									cssOverride={override}
									size={70}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							) : (
								data.accesories.map((acc) => (
									<Accessory key={acc.id} accessory={acc} />
								))
							)}
						</span>
					</div>
				</div>

				{/* Articles */}

				<div className={styles.card}>
					<div className={styles.articles}>
						<div className={styles.cardHeader}>
							<h3 className={styles.cardTitle}>
								The latest news from PlayStation blog
							</h3>
						</div>
						<span>
							{loadArticles ? (
								<BounceLoader
									color={"#00439c"}
									loading={loadArticles}
									cssOverride={override}
									size={70}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							) : (
								data.articles.map((article) => (
									<Article key={article.id} article={article} />
								))
							)}
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Content;
