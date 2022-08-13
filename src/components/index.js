import styled from "styled-components";
import { colors } from "../themes";

export const FlexDiv = styled.div`
	display: flex;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : "center"};
	align-items: center;
`;

export const Label = styled.p`
	color: ${(props) => props.color};
	${(props) => props.fontSize};
	${(props) => props.fontWeight};
	display: ${(props) => (props.display ? props.display : "block")};
	margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

export const CustomInput = styled.input`
	height: 2.6rem;
	background-color: ${colors.secondary};
	color: ${colors.white};
	padding: 0.75rem;
	border: 1.5px solid ${colors.borderGray};
	width: 100%;
	border-radius: 4px;
	margin: 0.625rem 0;
`;

export const CustomButton = styled.button`
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	${(props) => props.fontWeight};
	${(props) => props.fontSize};
	width: 100%;
	margin: 0.75rem 0;
	border: none;
	border-radius: 4px;
	padding: 0.75rem;
`;
