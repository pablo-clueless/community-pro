import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import React from "react"

import { Button } from "@/components/ui/button"
import styles from "./pagination.module.scss"

interface Props {
	current: number
	onPageChange: (page: number) => void
	pageSize: number
	total: number
}

export const Pagination = ({ current, onPageChange, pageSize, total }: Props) => {
	const totalPages = Math.ceil(total / pageSize)

	const onNextPage = () => {
		if (current > 1) {
			onPageChange(current + 1)
		}
	}

	const onPrevPage = () => {
		if (current < totalPages) {
			onPageChange(current - 1)
		}
	}

	return (
		<div className={styles.Pagination}>
			<Button size="sm" onClick={onPrevPage}>
				<ArrowLeft />
			</Button>
			<div className={styles.PaginationButtons}></div>
			<Button size="sm" onClick={onNextPage}>
				<ArrowRight />
			</Button>
		</div>
	)
}
