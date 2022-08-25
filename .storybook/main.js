module.exports = {
	stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@snek-at/storybook-addon-chakra-ui',
	],
	core: {
		builder: 'webpack5',
		options: {
			lazyCompilation: true,
		},
	},
	features: {
		storyStoreV7: true,
		emotionAlias: false,
	},
	framework: '@storybook/react',
};
