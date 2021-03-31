module.exports = {
	docs: {
		Home: ["home/doc1", "home/doc2", "home/doc3"],
		Javascript: [
			//! s1
			"js/s1/doc-byb-js",
			"js/s1/doc-dj-node",
			{
				//? s1
				Preperations: [
					"js/s1/installings/doc-bot",
					"js/s1/installings/doc-bot-add",
					"js/s1/installings/doc-linter",
				],
			},
			//? s2
			{
				"Creating Your Bot": [
					"js/s2/installings/doc-bot-up",
					"js/s2/installings/doc-bot-more-cmd",
					"js/s2/installings/doc-cmd-args",
				],
			},
		],
		Python: [
			//? s1
			"py/s1/doc-py-byb",
			{
				Preperations: ["py/s1/installings/doc-py-deps"],
			},
		],
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
		TypeScript: [
			//? TypeScript docs
			"ts/doc-byb-ts",
			{
				"Setup and Installation": [
					"ts/setup_and_installation/doc-buildingfirstbot-ts",
				],
			},
		],
	},
};
