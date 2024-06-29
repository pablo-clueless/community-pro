import React from "react"

import { Appbar, Flex, Footer, Heading, Seo, Text } from "@/components/shared"
import styles from "./style.module.scss"

export const Testimonials = () => {
	return (
		<>
			<Seo title="Testimonials" />
			<Appbar />
			<main className={styles.Testimonials}>
				<Flex className={styles.Header}>
					<Flex.Column className={styles.HeaderContent}>
						<Heading.h2>Testimonials</Heading.h2>
						<Text.p>We are a team of creators and innovators.</Text.p>
					</Flex.Column>
					<Flex className={styles.HeaderContent}>
						<Flex className={styles.Hero}></Flex>
					</Flex>
				</Flex>
				<Flex className={styles.Container}>
					<Flex.Column gap={50} className={styles.Content}></Flex.Column>
				</Flex>
			</main>
			<Footer />
		</>
	)
}
