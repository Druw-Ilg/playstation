"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Article = ({ article }) => {
	return (
		<div className={styles.articleDetails}>
			<Image src={article.url} width={200} height={200} alt={article.name} />
			<div className={styles.articleDesc}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

				<span className={styles.articleOverlay}>
					<h5>Lorem ipsum dolor sit amet consectetur adipiscing elit</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<span className={styles.arrowRight}>
						<AiOutlineArrowRight />
					</span>
				</span>
			</div>
		</div>
	);
};

export default Article;
