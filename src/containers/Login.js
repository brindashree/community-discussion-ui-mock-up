import React from "react";
import styled from "styled-components";
import { FlexDiv } from "../components";
import LoginForm from "../components/LoginForm";
import logo from "../images/logo.svg";
import { colors } from "../themes";

const Container = styled.div`
	min-height: 100vh;
	background-color: ${colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ImageContainer = styled.div`
	width: 2.2rem;
	height: 2.2rem;
	margin-bottom: 3.3rem;
	img {
		width: 100%;
		height: 100%;
	}
`;

export default function Login() {
	return (
		<Container data-testid="container">
			<div>
				<FlexDiv>
					<ImageContainer>
						<img src={logo} alt="logo" />
					</ImageContainer>
				</FlexDiv>
				<LoginForm />
			</div>
		</Container>
	);
}
