import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	CustomButton,
	CustomInput,
	FlexDiv,
	Label,
	StyledP,
	CloseButton,
} from "../components/index";
import { colors, fonts } from "../themes";
import closeIcon from "../images/closeIcon.svg";

const Container = styled.div`
	width: 28.9rem;
	background-color: ${colors.secondary};
	padding: 2.5rem 1.5rem;
	position: relative;
	background: linear-gradient(#27292d 0 0) padding-box,
		linear-gradient(to bottom right, #969696, #343434) border-box;
	border-radius: 8px;
	border: 2px solid transparent;
`;

function LoginForm({ handleModalToggle, modalVisible, handleClose }) {
	const navigate = useNavigate();
	const handleLogin = () => {
		if (modalVisible) {
			handleClose();
		} else {
			navigate("/home");
		}
	};
	return (
		<Container>
			{modalVisible && (
				<CloseButton onClick={handleClose}>
					<img src={closeIcon} alt="close-button" />
				</CloseButton>
			)}
			<StyledP
				color={colors.darkGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
				textAlign="center"
			>
				WELCOME BACK
			</StyledP>
			<StyledP
				color={colors.white}
				fontSize={fonts.size.xRegular()}
				fontWeight={fonts.weights.fontWeight(600)}
				margin="0.5rem 0 2.8rem 0"
				textAlign="center"
			>
				Log into your account
			</StyledP>

			<Label
				color={colors.lightGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
			>
				Email or Username
			</Label>
			<CustomInput type="text" placeholder="Enter your email or username" />
			<FlexDiv justifyContent="space-between">
				<Label
					color={colors.lightGray}
					fontWeight={fonts.weights.fontWeight(500)}
					fontSize={fonts.size.small()}
					margin="0.4rem 0 0 0"
					display="inline"
				>
					Password
				</Label>
				<Label
					color={colors.lightGray}
					fontWeight={fonts.weights.fontWeight(500)}
					fontSize={fonts.size.xSmall()}
					display="inline"
					margin="0.4rem 0 0 0"
				>
					Forgot password?
				</Label>
			</FlexDiv>
			{/* TODO CHANGE PASSWORD INPUT WITH ICON*/}
			<CustomInput type="password" placeholder="Enter your password" />
			<CustomButton
				color={colors.white}
				backgroundColor={colors.ctaBlue}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.regular()}
				onClick={handleLogin}
			>
				Login now
			</CustomButton>
			<StyledP
				color={colors.darkGray}
				fontWeight={fonts.weights.fontWeight(400)}
				fontSize={fonts.size.small()}
				display="inline"
			>
				Not registered yet?
			</StyledP>
			<StyledP
				color={colors.lightGray}
				fontWeight={fonts.weights.fontWeight(500)}
				fontSize={fonts.size.small()}
				display="inline"
				margin="0 0 0 0.2rem"
				onClick={() => handleModalToggle()}
			>
				Register →
			</StyledP>
		</Container>
	);
}

export default LoginForm;
