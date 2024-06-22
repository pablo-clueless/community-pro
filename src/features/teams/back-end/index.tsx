import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export const Backend = () => {
	return (
		<>
			<Seo title="The Backend Team" />
			<Appbar />
			<main className={styles.Backend}>Backend</main>
			<Footer />
		</>
	)
}
