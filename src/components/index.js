import styled from "styled-components";
import { colors } from "../themes";

export const FlexDiv = styled.div`
	display: flex;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : "center"};
	align-items: center;
	${(props) => props.flex && `flex: ${props.flex}`};
`;

export const Label = styled.label`
	color: ${(props) => props.color};
	${(props) => props.fontSize};
	${(props) => props.fontWeight};
	display: ${(props) => (props.display ? props.display : "block")};
	margin: ${(props) => (props.margin ? props.margin : "0px")};
`;
export const StyledP = styled.p`
	text-align: ${(props) => props.textAlign};
	color: ${(props) => props.color};
	${(props) => props.fontSize};
	margin: ${(props) => props.margin};
	${(props) => props.fontWeight};
	display: ${(props) => (props.display ? props.display : "block")};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
`;
export const Card = styled.div`
	border: 2px solid ${colors.borderGray};
	border-radius: 8px;
	padding: 1.5rem 1.25rem;
	background-color: ${colors.cardGray};
`;
export const Message = styled.div`
	background-color: ${colors.primaryBlack};
	margin: 1rem 0;
	border-radius: 8px;
	padding: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
`;
export const EmotionIcon = styled.div`
	min-width: 3rem;
	min-height: 3rem;
	background-color: ${colors.cardGray};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 1.125rem;
		height: 1.125rem;
	}
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
	width: ${(props) => (props.width ? props.width : "100%")};
	margin: 0.75rem 0;
	border: none;
	border-radius: 4px;
	padding: 0.75rem 2.37rem;
	cursor: pointer;
`;
export const ImageContainer = styled.div`
	min-width: ${(props) => props.width};
	min-height: ${(props) => props.height};
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const CloseButton = styled.button`
	min-width: 2rem;
	min-height: 2rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	float: right;
	background-color: ${colors.primary};
	position: absolute;
	top: 1rem;
	right: 1rem;
	cursor: pointer;
	img {
		width: 1rem;
		height: 1rem;
	}
`;
