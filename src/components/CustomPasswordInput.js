import React from "react";
import styled from "styled-components";
import { colors } from "../themes";
import eyeIcon from "../images/eyeIcon.svg";

const MainDiv = styled.div`
	display: flex;
	height: 2.6rem;
	border: 2px solid ${colors.borderGray};
	width: 100%;
	border-radius: 4px;
	margin: 0.625rem 0;
`;
const Input = styled.input`
	flex: 1;
	height: inherit;
	border: none;
	background: transparent;
	color: ${colors.white};
	padding: 0.75rem;
	&::placeholder {
		font-size: 1rem;
	}
	&:focus,
	:focus-visible {
		border: none;
		outline: none;
	}
`;
const Icon = styled.div`
	min-width: 2.6rem;
	min-height: 2.6rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	img {
		width: 1.25rem;
		height: 1.25rem;
	}
`;
function CustomPasswordInput({ placeholder }) {
	return (
		<MainDiv>
			<Input type="password" placeholder={placeholder} />
			<Icon>
				<img src={eyeIcon} alt="eye-visible-toggle-button" />
			</Icon>
		</MainDiv>
	);
}

export default CustomPasswordInput;
