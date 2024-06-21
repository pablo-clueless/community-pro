import React from "react"

import { Appbar, Flex, Footer, Heading, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Resources = () => {
	return (
		<>
			<Seo title="Resources" />
			<Appbar />
			<main className={styles.Resources}>
				<Flex className={styles.Container}>
					<Heading.h5 casing="uppercase">Resources</Heading.h5>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
