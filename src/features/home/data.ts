import { StaticImageData } from "next/image"

const image = "/assets/community-2.webp"

type NoteProps = {
	description: string
	image: string | StaticImageData
	label: string
	title: string
}

export const Notes: NoteProps[] = [
	{
		label: "Learn",
		title: "Build Open Source Projects",
		description:
			"CommunityPro goes beyond theory and textbook examples. We combine forces to create real-world open-source projects. This hands-on approach solidifies your development skills by applying them to practical problems.  While building these projects, you'll also contribute valuable code to the developer ecosystem, making a lasting impact.",
		image: image,
	},
	{
		label: "Teach",
		title: "Share Your Knowledge, Grow Together",
		description:
			"In CommunityPro, learning is a two-way street. Share your expertise with fellow developers, helping them overcome challenges and expand their skillsets.  This act of teaching not only benefits others but also reinforces your own understanding of the concepts.  At the same time, gain valuable insights from the experiences and knowledge of other developers in the community. We all rise together as we share and learn from each other.",
		image: image,
	},
	{
		label: "Impact",
		title: "Build the Future, One Line of Code at a Time",
		description:
			"Contribute to the open-source community by collaborating on projects used by countless developers around the world.  These projects form the building blocks of the future web and technologies we use every day.  At CommunityPro, you'll have the opportunity to make a real difference with your skills.  The open-source projects you help build can be used by developers for years to come.",
		image: image,
	},
	{
		label: "Support",
		title: "Network and Grow Your Skills",
		description:
			"CommunityPro isn't just about code. Connect with like-minded developers from all backgrounds and experience levels. Share ideas, discuss challenges, and learn from each other's approaches. This supportive network can provide valuable guidance and mentorship as you progress in your developer journey. The connections you build at CommunityPro can open doors to new opportunities and collaborations, propelling your career forward.",
		image: image,
	},
]
