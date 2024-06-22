import Image from "next/image"
import React from "react"

import { Projects } from "./data"

const stacks = ["all", "html", "javascript", "typescript", "react", "vue"] as const
type TechStack = (typeof stacks)[number]
type ProjectProps = (typeof Projects)[0]

export const Project = () => {
	const [filtered, setFiltered] = React.useState<ProjectProps[]>([])
	const [current, setCurrent] = React.useState<TechStack>("all")

	const getFiltered = (stack: string) => {
		if (stack === "all") {
			setFiltered(Projects)
		} else {
			setFiltered(Projects.filter((project) => project.stack.includes(stack)))
		}
	}

	React.useEffect(() => {
		getFiltered(current)
	}, [current])

	return (
		<div className="flex w-full select-none flex-col gap-12 overflow-hidden">
			<div className="flex h-7 w-full items-center justify-between border-b border-gray-400">
				{stacks.map((stack, id) => (
					<button
						key={id}
						onClick={() => setCurrent(stack)}
						className={`relative flex w-fit min-w-[90px] items-center justify-center text-sm font-medium uppercase transition-all before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full ${stack === current ? "text-white before:bg-primary-100" : "text-gray-400"}`}>
						{stack}
					</button>
				))}
			</div>
			<div className="flex w-fit items-center gap-5 overflow-x-scroll">
				{filtered.map((project, id) => (
					<div key={id} className="relative aspect-[1/1.14] w-[400px] bg-white">
						<Image
							src={project.image}
							alt={project.title}
							fill
							sizes="(max-width:1024px)100%"
							className="object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
