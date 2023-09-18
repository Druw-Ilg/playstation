"use client";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
	IoLogoPlaystation,
	IoLogoYoutube,
	IoIosMail,
	IoLogoFacebook,
} from "react-icons/io";
import { RiPhoneFill, RiInstagramFill, RiMapPin2Fill } from "react-icons/ri";
import { PiTwitterLogoFill } from "react-icons/pi";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<div className={styles.footerLeftDiv}>
					<span className={styles.innerLeftDiv1}>
						<span>
							<IoLogoPlaystation /> <h3>PlayStation</h3>
						</span>
						<p>Play Has No Limits.</p>
					</span>

					<span className={styles.innerLeftDiv2}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation.
						</p>

						<h5 className={styles.footerTitle}>Get in touch with us.</h5>

						<span className={styles.innerSpan}>
							<RiMapPin2Fill />
							<p>Lorem ipsum dolor sit amet</p>
						</span>

						<span className={styles.innerSpan}>
							<RiPhoneFill />
							<p>0000-0000-0000</p>
						</span>
						<span className={styles.innerSpan}>
							<IoIosMail />
							<p>suport@loremipsum.com</p>
						</span>

						<span className={styles.socialIcons}>
							<IoLogoFacebook />
							<RiInstagramFill />
							<PiTwitterLogoFill />
							<IoLogoYoutube />
						</span>
					</span>
				</div>
				<div className={styles.footerNav}>
					<ul>
						<li className={styles.navHeader}>About</li>
						<li>About SIE</li>
						<li>Careers</li>
						<li>PlayStation Studios</li>
						<li>Corporate</li>
					</ul>
					<ul>
						<li className={styles.navHeader}>Product</li>
						<li>PS5</li>
						<li>PS4</li>
						<li>PS Plus</li>
						<li>Accessories</li>
						<li>Games</li>
					</ul>
					<ul>
						<li className={styles.navHeader}>Values</li>
						<li>Environment</li>
						<li>Accessibility</li>
						<li>Online safety</li>
						<li>Diverity, equity</li>
					</ul>
					<ul>
						<li className={styles.navHeader}>Support</li>
						<li>Support hub</li>
						<li>PlayStation safety</li>
						<li>PSN status</li>
						<li>PlayStation Repairs</li>
						<li>Password reset</li>
						<li>Manuels</li>
					</ul>
					<ul>
						<li className={styles.navHeader}>Resources</li>
						<li>PSN terms of service</li>
						<li>PS Store cancel policy</li>
						<li>Age ratings</li>
						<li>Health warnings</li>
						<li>Developers</li>
						<li>Glossary</li>
					</ul>
				</div>
			</div>
			<p>
				Developed by <Link href="https://andruwilagou.com">Andruw Ilagou</Link>.
				Inspired by{" "}
				<Link href="https://dribbble.com/fuad333">Fuad Al Hasan </Link>
			</p>
		</footer>
	);
};

export default Footer;
