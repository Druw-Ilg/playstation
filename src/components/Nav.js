import Link from "next/link";
import styles from "@/app/page.module.css";

const Nav = () => {
	return (
		<ul className={styles.nav}>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/">Hardware</Link>
			</li>
			<li>
				<Link href="/">Services</Link>
			</li>
			<li>
				<Link href="/">Shop</Link>
			</li>
			<li>
				<Link href="/">Support</Link>
			</li>
		</ul>
	);
};

export default Nav;
