import { css } from "styled-components";

const regular = () => css`
	font-size: 1rem;
`;

const xRegular = () => css`
	font-size: 1.125rem;
`;
const small = () => css`
	font-size: 0.875rem;
`;
const xSmall = () => css`
	font-size: 0.75rem;
`;
const big = () => css`
	font-size: 1.25rem;
`;
const large = () => css`
	font-size: 1.5rem;
`;
const extraLarge = () => css`
	font-size: 2rem;
`;

// weights
const light = () => css`
	font-weight: light;
`;
const bold = () => css`
	font-weight: bold;
`;

const normal = () => css`
	font-weight: normal;
`;
const fontWeight = (num) => css`
	font-weight: ${num};
`;
const fonts = {
	size: {
		regular,
		small,
		big,
		large,
		extraLarge,
		xRegular,
		xSmall,
	},
	weights: {
		light,
		bold,
		normal,
		fontWeight,
	},
};
export default fonts;
