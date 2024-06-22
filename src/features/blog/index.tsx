import React from "react"

import { Appbar, Flex, Footer, Heading, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Blog = () => {
	return (
		<>
			<Seo title="Blog" />
			<Appbar />
			<main className={styles.Blog}>
				<Flex className={styles.Container}>
					<Heading.h5 casing="uppercase">Blog</Heading.h5>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
