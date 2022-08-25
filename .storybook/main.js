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
	},
	features: {
		emotionAlias: false,
	},
	framework: '@storybook/react',
};
