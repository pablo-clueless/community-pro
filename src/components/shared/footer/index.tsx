import Image from "next/image"
import React from "react"

import { Input } from "@/components/ui/input"
import styles from "./footer.module.scss"
import { FooterLinks } from "./data"
import { Flex } from "../flex"
import { Text } from "../text"
import Link from "next/link"

const Logo = "/assets/logo.webp"

export const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<Flex.Column className={styles.FooterContainer}>
				<Flex className={styles.FooterContent}>
					<Flex className={styles.FooterImage}>
						<Flex className={styles.Image}>
							<Image src={Logo} alt="communitypro" fill sizes="(max-width:1024px)100%" />
						</Flex>
					</Flex>
					<Flex className={styles.FooterLinks}>
						{FooterLinks.map(({ label, links }) => (
							<Flex.Column key={label} className={styles.Links}>
								<Text className={styles.LinkLabel}>{label}</Text>
								<Flex.Column gap={8}>
									{links.map(({ external, href, name }) => {
										if (external) {
											return (
												<a key={href} href={href} target="_blank" className={styles.LinkHref}>
													{name}
												</a>
											)
										} else {
											return (
												<Link key={href} href={href} className={styles.LinkHref}>
													{name}
												</Link>
											)
										}
									})}
								</Flex.Column>
							</Flex.Column>
						))}
					</Flex>
					<Flex.Column gap={12} className={styles.FooterNews}>
						<Text fontSize="20px">Stay updated with our newsletter</Text>
						<Input name="email" type="email" placeholder="someone@example.com" />
					</Flex.Column>
				</Flex>
			</Flex.Column>
			<Flex className={styles.FooterNote}>
				<Flex className={styles.FooterNoteContent}>
					<Text size="sm">&copy;{new Date().getFullYear()}. All rights reserved</Text>
					<Text size="sm" weight={600}>
						CommunityPro
					</Text>
				</Flex>
			</Flex>
		</footer>
	)
}
