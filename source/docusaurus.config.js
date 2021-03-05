module.exports = {
	title: "Discord Bot Guide",
	tagline: "Helping you build discord bots",
	url: "https://deepwebdevelopers.github.io/", // domain
	baseUrl: "/discord-bot-guide/", // The base url for the website after github
	// GIT_USER: "ThatGuyJamal", // The user who has access to deploy the site
	// DEPLOYMENT_BRANCH: "gh-pages", // The branch the website is hosted on.
	// CURRENT_BRANCH: "alpha",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "throw",
	favicon: "img/favicon.ico",
	organizationName: "DeepWebDevelopers", // Usually your GitHub org/user name.
	projectName: "discord-bot-guide", // Usually your repo name.
	themeConfig: {
		hideableSidebar: true,
		// sidebarCollapsible: false, unhide for false
		navbar: {
			title: "Discord Bot Guide",
			logo: {
				alt: "My Site Logo",
				src: "img/favicon.png",
			},
			items: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{ to: "blog", label: "Blog", position: "left" },
				{ to: "about", label: "About Us", position: "left" },
				{
					to: "team",
					label: "Team",
					position: "right",
					activeBaseRegex: `team`,
				},
				// Will add later
				// { to: "community", label: "Community", position: "left" },
				{
					href: "https://github.com/DeepWebDevelopers/discord-bot-guide",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Frequently Asked",
							to: "docs/",
						},
						{
							label: "Support Us",
							to: "/docs/home/doc2",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discord.com/invite/NbqBQbaejS",
						},
						{
							label: "Twitter",
							href: ".",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/DeepWebDevelopers",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} DeepWebDevelopers, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/docs",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/blog",
					feedOptions: {
						type: "all",
						copyright: `Copyright © ${new Date().getFullYear()} DeepWebDevelopers, Inc.`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
