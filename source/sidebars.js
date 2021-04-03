module.exports = {
	docs: {
		// ! Home section of the docs
		Home: ["home/doc1", "home/doc2", "home/doc3", "home/faq"],

		// ! Javascript Docs
		Javascript: [
			//! s1
			"js/s1/doc-byb-js",
			"js/s1/doc-dj-node",
			{
				//? section 1 of js files
				Preperations: [
					"js/s1/installings/doc-bot",
					"js/s1/installings/doc-bot-add",
					"js/s1/installings/doc-linter",
				],
			},
			//? Section 2 of js files
			{
				"Creating Your Bot": [
					"js/s2/installings/doc-bot-up",
					"js/s2/installings/doc-bot-more-cmd",
					"js/s2/installings/doc-cmd-args",
				],
			},
			//  ? JS Command handler files
			{
				"Command Handler": ["js/cmd/doc-cmd-handler"],
			},
			// ? JS Event handler files
			{
				"Event Handler": ["js/event/doc-event-handler"],
			},
		],
		// ! Python docs
		Python: [
			//? Section 1 of py files
			"py/s1/doc-prerequisites-python",
			{
				// Preperations: [""], - Will added when more py pages are added.
			},
		],

		// ! Java docs
		Java: [
			//? Java docs
			"java/doc-prerequisites-java",
			{
				"Build Your First Bot": [
					"java/build_your_first_bot/doc-buildingfirstbot-java",
					"java/build_your_first_bot/doc-settingupide-java",
					"java/build_your_first_bot/doc-developingthebot-java",
					"java/build_your_first_bot/doc-buildingjarfile-java",
				],
			},
		],

		// ! Typescript docs
		TypeScript: [
			//? TypeScript docs
			"ts/doc-byb-ts",
			{
				"Setup and Installation": [
					"ts/setup_and_installation/doc-buildingfirstbot-ts",
					"ts/setup_and_installation/doc-buildingfirstbot-ts-2",
				],
			},
		],
	},
};
