"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";

// game released

const Game = ({ game }) => {
	return (
		<div className={styles.gameDetails}>
			<Image src={game.url} width={200} height={200} alt={game.name} />
			<div className={styles.gameDesc}>
				<h4 className={styles.gameName}>{game.name}</h4>
				<div className={styles.gameDesc2}>
					<h6 className={styles.gameGenre}>{game.genre}</h6>
					<div className={styles.gameRating}>
						<span className={styles.rate}>
							<RiStarSLine />
						</span>
						<span className={styles.rate}>
							<RiStarSLine />
						</span>
						<span className={styles.rate}>
							<RiStarSLine />
						</span>
						<span className={styles.rate}>
							<RiStarSLine />
						</span>
						<span className={styles.rate}>
							<RiStarSLine />
						</span>
					</div>
					<p className={styles.gamePrice}>{game.price}</p>
				</div>
			</div>
		</div>
	);
};

export default Game;
