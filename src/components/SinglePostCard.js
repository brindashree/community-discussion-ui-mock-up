import React from "react";
import styled from "styled-components";
import {
	Card,
	EmotionIcon,
	FlexDiv,
	Message,
	StyledP,
	ImageContainer,
} from "../components";
import optionIconImg from "../images/optionsIcon.svg";
import commentIcon from "../images/commentIcon.svg";
import { colors, fonts } from "../themes";

const Flex = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;
const OptionIcon = styled.button`
	width: 1.5rem;
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.cardGray};
	border: none;
	outline: none;
	cursor: pointer;
`;
function SinglePostCard({ post }) {
	return (
		<Card>
			<Flex>
				<ImageContainer width="2.75rem" height="2.75rem">
					<img src={post?.profileImage} alt={post?.name} />
				</ImageContainer>
				<FlexDiv justifyContent="space-between" flex={1}>
					<div>
						<StyledP
							fontWeight={fonts.weights.fontWeight(500)}
							fontSize={fonts.size.regular()}
							color={colors.lightGray}
							margin="0 0 0.25rem 0"
						>
							{post?.name}
						</StyledP>
						<StyledP
							fontWeight={fonts.weights.fontWeight(500)}
							fontSize={fonts.size.small()}
							color={colors.text}
						>
							{post?.updated}
						</StyledP>
					</div>
					<OptionIcon>
						<img src={optionIconImg} alt="edit" />
					</OptionIcon>
				</FlexDiv>
			</Flex>
			<Message>
				<EmotionIcon>
					<img src={post?.emotion} alt="emotion-icon" />
				</EmotionIcon>
				<StyledP
					fontWeight={fonts.weights.fontWeight(400)}
					fontSize={fonts.size.regular()}
					color={colors.text}
				>
					{post?.message}
				</StyledP>
			</Message>
			<Flex>
				<ImageContainer width="1.25rem" height="1.25rem">
					<img src={commentIcon} alt="comment-icon" />
				</ImageContainer>
				<StyledP
					fontWeight={fonts.weights.fontWeight(500)}
					fontSize={fonts.size.small()}
					color={colors.text}
				>
					{post?.numberOfComments} comments
				</StyledP>
			</Flex>
		</Card>
	);
}

export default SinglePostCard;
