import styles from "@/app/page.module.css";
import { IoLogoPlaystation, IoIosSearch } from "react-icons/io";
import Link from "next/link";

const Header = () => {
	return (
		<div className={styles.header}>
			<Link href="/" className={styles.logo}>
				<IoLogoPlaystation />
				<p>PlayStation</p>
			</Link>
			<div className={styles.searchBar}>
				<span className={styles.searchIcon}>
					<IoIosSearch />
				</span>

				<input type="text" placeholder="Search" />
			</div>

			<button>Sign in</button>
		</div>
	);
};

export default Header;
