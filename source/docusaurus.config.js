module.exports = {
	title: "Discord Bot Guide",
	tagline: "Helping You Build Discord Bots",
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
	customFields: {
		description: "A Discord bot Giude. Helping you become a Discord developer.",
	},
	themeConfig: {
		hideableSidebar: true,
		// Sets the collor settings for the site
		colorMode: {
			// "light" | "dark"
			defaultMode: "dark",
			// Allows the user to configer the site dark and light mode
			disableSwitch: false,
			// Should we use the prefers-color-scheme media-query,
			// using user system preferences, instead of the hardcoded defaultMode
			respectPrefersColorScheme: true,
			// Dark/light switch icon options
			switchConfig: {
				// Icon for the switch while in dark mode
				darkIcon: "🌙",

				// CSS to apply to dark icon,
				// React inline style object
				// see https://reactjs.org/docs/dom-elements.html#style
				darkIconStyle: {
					marginLeft: "2px",
				},

				// Unicode icons such as '\u2600' will work
				// Unicode with 5 chars require brackets: '\u{1F602}'
				lightIcon: "\u{1F602}",

				lightIconStyle: {
					marginLeft: "1px",
				},
			},
			respectPrefersColorScheme: true,
		},
		liveCodeBlock: {
			/**
			 * The position of the live playground, above or under the editor
			 * Possible values: "top" | "bottom"
			 */
			playgroundPosition: "bottom",
		},
		// Shows on user load - kind of like an ad for our github :D
		announcementBar: {
			id: "supportus",
			content:
				'⭐️ If you like Discord Bot Guide, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/DeepWebDevelopers/discord-bot-guide">GitHub</a>! ⭐️',
		},
		//! Will be adding soon when docs complete
		// algolia: {
		// 	apiKey: "",
		// 	indexName: "docs-search-api",
		// 	contextualSearch: true,
		// },
		// Allows us to add markdown highlighting for more languages.
		prism: {
			additionalLanguages: ["powershell", "java", "ruby", "go", "groovy"],
		},
		// ! Site Nav Bar
		navbar: {
			hideOnScroll: true,
			title: "Discord Bot Guide",
			logo: {
				alt: "Site Logo",
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
				//? need to add later
				{ label: "Community", position: "left", to: "/comingsoon" },
				{ to: "comingsoon", label: "About Us", position: "right" },

				//? need to add later
				{
					to: "team",
					label: "Team",
					position: "right",
					activeBaseRegex: `team`,
				},
				{
					href: "https://github.com/DeepWebDevelopers/discord-bot-guide",
					label: "GitHub",
					position: "right",
				},
				// Supports the language change function.
				{
					type: "localeDropdown",
					position: "left",
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
				debug: true, // force debug plugin usage
				docs: {
					path: "docs",
					sidebarPath: require.resolve("./sidebars.js"),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source",
				},
				remarkPlugins: [
					[require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
				],
				blog: {
					showReadingTime: true,
					postsPerPage: 3,
					blogSidebarCount: "ALL",
					blogSidebarTitle: "All our posts",

					// Please change this to your repo.
					editUrl:
						"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source",
					postsPerPage: 3,
					feedOptions: {
						type: "all",
						copyright: `Copyright © ${new Date().getFullYear()} DeepWebDevelopers, Inc.`,
					},
				},
				pages: {
					remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	// Translation feature - work in progress
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"], // - adding later (https://v2.docusaurus.io/docs/next/i18n/introduction)
		localeConfigs: {
			en: {
				label: "English",
			},
			fr: {
				label: "Français",
			},
		},
	},
};
