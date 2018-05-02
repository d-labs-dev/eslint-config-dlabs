
module.exports = {

	extends : [
		'standard'
	],

	rules: {
		'quotes': [2, 'single', 'avoid-escape'],
		'semi': [2, 'always'],
		'max-len': [2, 120, 2],
		'indent': [2, 'tab'],
		'padded-blocks': [0],
		'space-before-function-paren': ['error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		}],
		'linebreak-style': [2, 'unix'],
		'no-tabs': [0]
	}

};
