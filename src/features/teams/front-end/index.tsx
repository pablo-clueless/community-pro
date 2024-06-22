import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Frontend = () => {
	return (
		<>
			<Seo title="The Frontend Team" />
			<Appbar />
			<main className={styles.Frontend}>Frontend</main>
			<Footer />
		</>
	)
}
