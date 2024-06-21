import React from "react"

import { Appbar, Flex, Footer, Heading, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const About = () => {
	return (
		<>
			<Seo title="About" />
			<Appbar />
			<main className={styles.About}>
				<Flex className={styles.Container}>
					<Heading.h5 casing="uppercase">About</Heading.h5>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
