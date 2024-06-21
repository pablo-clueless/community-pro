import React from "react"

import { Appbar, Flex, Footer, Heading, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Sponsors = () => {
	return (
		<>
			<Seo title="Sponsors" />
			<Appbar />
			<main className={styles.Sponsors}>
				<Flex className={styles.Container}>
					<Heading.h5 casing="uppercase">Sponsors</Heading.h5>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
