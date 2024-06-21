import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import styles from "./appbar.module.scss"
import { Flex } from "../flex"

const Logo = "/assets/logo.webp"
const Links = [
	{ herf: "/about", name: "about" },
	{ herf: "/resources", name: "resources" },
	{ herf: "/sponsors", name: "sponsors" },
]

export const Appbar = () => {
	const [scrolled, setScrolled] = React.useState(false)

	const handleScroll = () => setScrolled(window.scrollY > 500)

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav className={classNames([styles.Appbar, styles[`Appbar--${scrolled}`]])}>
			<Flex className={styles.AppbarContent}>
				<Link href="/">
					<Image src={Logo} alt="communitypro" width={40} height={40} />
				</Link>
				<Flex className={styles.AppbarLinks}>
					{Links.map((link, index) => (
						<Link key={index} href={link.herf}>
							{link.name}
						</Link>
					))}
				</Flex>
			</Flex>
		</nav>
	)
}
