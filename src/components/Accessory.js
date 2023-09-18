"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";

// Accessory

const Accessory = ({ accessory }) => {
	return (
		<div className={styles.accessoryDetails}>
			<Image
				src={accessory.url}
				width={200}
				height={200}
				alt={accessory.name}
			/>
			<div className={styles.accessoryDesc}>
				<h4 className={styles.accessoryName}>{accessory.name}</h4>
				<p>Lorem ipsum dolor sit amet, consectetur...</p>
				<div className={styles.accessoryDesc2}>
					<div className={styles.accessoryDesc3}>
						<div className={styles.accessoryRating}>
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
						<p className={styles.accessoryPrice}>{accessory.price}</p>
					</div>

					<button>Get it</button>
				</div>
			</div>
		</div>
	);
};

export default Accessory;
