import { useQuery } from "@tanstack/react-query"
import classNames from "classnames"
import Image from "next/image"
import React from "react"

import { Appbar, Flex, Footer, Heading, Seo, Text } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { GetGithubUser } from "./query"
import styles from "./home.module.scss"
import { useCountUp } from "@/hooks"
import { Notes } from "./data"

export const Home = () => {
	const { data } = useQuery({
		queryFn: () => GetGithubUser("Communitypro"),
		queryKey: ["get-github-user"],
	})

	return (
		<>
			<Seo title="Join CommunityPro" />
			<Appbar />
			<main className={styles.Home}>
				<Flex.Column className={styles.HomeHeader}>
					<Flex.Column className={styles.HomeHeaderContent}>
						<Flex.Column className={styles.HomeHeading}>
							<Heading.h1 fontSize="52px">Join CommunityPro</Heading.h1>
							<Text>
								A community of developers learning by teaching and building open source projects
							</Text>
						</Flex.Column>
						<a href="https://bit.ly/join-communitypro" target="_blank">
							<Button className="w-[200px] text-lg" size="lg">
								Join
							</Button>
						</a>
					</Flex.Column>
					<Flex className={styles.Cards}>
						<Flex.Column alignItems="center">
							<Text fontSize="24px">Followers</Text>
							<Heading.h1>{useCountUp(data?.followers)}</Heading.h1>
						</Flex.Column>
						<Flex.Column alignItems="center">
							<Text fontSize="24px">Repos</Text>
							<Heading.h1>{useCountUp(data?.public_repos)}</Heading.h1>
						</Flex.Column>
					</Flex>
				</Flex.Column>
				<Flex.Column background="var(--primary-200)" className={styles.HomeContainer}>
					<Flex.Column gap={100} className={styles.HomeContent}>
						{Notes.map((note, index) => (
							<Flex key={index} className={styles.Note}>
								<Flex className={styles.NoteImage}>
									<Image src={note.image} alt={note.label} fill sizes="(max-width:1024px)100%" />
								</Flex>
								<Flex.Column gap={8} className={styles.NoteText}>
									<Text size="xs" casing="uppercase">
										{note.label}
									</Text>
									<Heading.h4 fontSize="36px">{note.title}</Heading.h4>
									<Text>{note.description}</Text>
								</Flex.Column>
							</Flex>
						))}
					</Flex.Column>
				</Flex.Column>
				<Flex.Column className={classNames([styles.HomeContainer, styles.HomeNotif])}>
					<Flex.Column alignItems="center" gap={60} className={styles.HomeContent}>
						<Heading.h4 fontSize="52px" weight={500}>
							Join us to be a part of a wonderful journey!
						</Heading.h4>
						<a href="https://bit.ly/join-communitypro" target="_blank">
							<Button size="lg" className="w-[250px] text-xl">
								Start your journey
							</Button>
						</a>
					</Flex.Column>
				</Flex.Column>
			</main>
			<Footer />
		</>
	)
}
