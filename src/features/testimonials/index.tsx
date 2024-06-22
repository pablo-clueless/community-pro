import React from "react"

import { Appbar, Flex, Footer, Heading, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Testimonials = () => {
	return (
		<>
			<Seo title="Testimonials" />
			<Appbar />
			<main className={styles.Testimonials}>
				<Flex className={styles.Container}>
					<Heading.h5 casing="uppercase">Testimonials</Heading.h5>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
