import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Design = () => {
	return (
		<>
			<Seo title="The Design Team" />
			<Appbar />
			<main className={styles.Design}>Design</main>
			<Footer />
		</>
	)
}
