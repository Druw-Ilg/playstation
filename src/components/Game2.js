"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";

// game released

const Game2 = ({ game }) => {
	return (
		<div className={styles.gameDetails}>
			<Image
				className={styles.gameImg}
				src={game.url}
				width={200}
				height={200}
				alt={game.name}
			/>
			<div className={styles.gameDesc}>
				<p className={styles.gameName}>{game.name}</p>
			</div>
		</div>
	);
};

export default Game2;
