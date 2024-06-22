import { Moon, Sun } from "@phosphor-icons/react"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { useGlobalStore } from "@/store/z-store/global"
import { Button } from "@/components/ui/button"
import styles from "./appbar.module.scss"
import { Flex } from "../flex"

const Logo = "/assets/logo.webp"
const Links = [
	{ herf: "/about", name: "about" },
	{ herf: "/projects", name: "projects" },
	{ herf: "/testimonials", name: "testimonials" },
	{ herf: "/blog", name: "blog" },
]

export const Appbar = () => {
	const [scrolled, setScrolled] = React.useState(false)
	const { mode, setMode } = useGlobalStore()

	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light")
		} else {
			setMode("dark")
		}
	}

	const handleScroll = () => setScrolled(window.scrollY > 100)

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
				<Flex className={styles.AppbarButtons}>
					<Button>Donate</Button>
					<Button size="icon" variant="ghost" onClick={toggleMode}>
						{mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
					</Button>
				</Flex>
			</Flex>
		</nav>
	)
}
