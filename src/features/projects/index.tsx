import React from "react"

import { Appbar, Flex, Footer, Heading, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Projects = () => {
	return (
		<>
			<Seo title="Projects" />
			<Appbar />
			<main className={styles.Projects}>
				<Flex className={styles.Container}>
					<Heading.h5 casing="uppercase">Projects</Heading.h5>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
