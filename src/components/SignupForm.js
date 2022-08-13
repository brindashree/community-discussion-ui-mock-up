import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	CustomButton,
	CustomInput,
	Label,
	StyledP,
	CloseButton,
} from "../components/index";
import { colors, fonts } from "../themes";
import closeIcon from "../images/closeIcon.svg";

const Container = styled.div`
	width: 28.9rem;
	background-color: ${colors.secondary};
	background: linear-gradient(#27292d 0 0) padding-box,
		linear-gradient(to bottom right, #969696, #343434) border-box;
	border-radius: 8px;
	border: 2px solid transparent;
	padding: 2.5rem 1.5rem;
	position: relative;
`;

function SignUpForm({ handleModalToggle, modalVisible, handleClose }) {
	const navigate = useNavigate();
	const handleContinue = () => {
		if (modalVisible) {
			handleClose();
		} else {
			navigate("/home");
		}
	};

	return (
		<Container>
			<CloseButton onClick={handleClose}>
				<img src={closeIcon} alt="close-button" />
			</CloseButton>
			<StyledP
				color={colors.darkGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
				textAlign="center"
			>
				SIGN UP
			</StyledP>
			<StyledP
				color={colors.white}
				fontSize={fonts.size.xRegular()}
				fontWeight={fonts.weights.fontWeight(600)}
				margin="0.5rem 0 2.8rem 0"
				textAlign="center"
			>
				Create an account to continue
			</StyledP>

			<Label
				color={colors.lightGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
			>
				Email
			</Label>
			<CustomInput type="text" placeholder="Enter your email" />
			<Label
				color={colors.lightGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
			>
				Username
			</Label>
			<CustomInput type="text" placeholder="Choose a preferred username" />

			<Label
				color={colors.lightGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
				margin="0.4rem 0 0 0"
				display="inline"
			>
				Password
			</Label>
			{/* TODO CHANGE PASSWORD INPUT WITH ICON*/}
			<CustomInput type="password" placeholder="Enter your password" />
			<CustomButton
				color={colors.white}
				backgroundColor={colors.ctaBlue}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.regular()}
				onClick={handleContinue}
			>
				Continue
			</CustomButton>
			<StyledP
				color={colors.darkGray}
				fontWeight={fonts.weights.fontWeight(400)}
				fontSize={fonts.size.small()}
				display="inline"
			>
				Already have an account?
			</StyledP>
			<StyledP
				color={colors.lightGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
				display="inline"
				margin="0 0 0 0.2rem"
				onClick={() => handleModalToggle()}
			>
				Login →
			</StyledP>
		</Container>
	);
}

export default SignUpForm;
