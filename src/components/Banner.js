"use client";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = ({ images }) => {
	return (
		<div className={styles.banner}>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				stopOnHover={false}
				showStatus={false}
				showArrows={false}
				showThumbs={false}
			>
				{images.map((img) => (
					<div key={img.id} className={styles.bannerImg}>
						<Image
							src={img.url}
							fill={true}
							style={{ objectFit: "fill" }}
							alt={img.name}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Banner;
