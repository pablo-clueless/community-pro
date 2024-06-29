import axios from "axios"

type User = {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
}

const GetOrgMembers = async (org: string, page?: number) => {
	return axios
		.get<User[]>(`https://api.github.com/orgs/${org}/members?page=${page}`)
		.then((res) => res.data)
}

export { GetOrgMembers }
