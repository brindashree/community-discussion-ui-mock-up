import React from "react";
import styled from "styled-components";
import {
	Card,
	CustomButton,
	EmotionIcon,
	Message,
	StyledP,
} from "../components";
import SinglePostCard from "../components/SinglePostCard";
import messageIcon from "../images/messageIcon.svg";
import { colors, fonts } from "../themes";
import { posts } from "../api/data";

const Container = styled.div`
	min-height: 100vh;
	background-color: ${colors.primary};
	display: flex;
	justify-content: center;
	color: white;
`;
const Content = styled.div`
	width: 43.75rem;
	padding: 4.313rem 0;
`;
const PostButton = styled(CustomButton)`
	display: block;
	margin-left: auto;
	margin-right: 0;
`;
const PostsSection = styled.section`
	gap: 1rem;
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`;
function Home() {
	return (
		<Container>
			<Content>
				<StyledP
					fontWeight={fonts.weights.fontWeight(500)}
					fontSize={fonts.size.extraLarge()}
					color={colors.lightGray}
				>
					Hello Jane
				</StyledP>
				<StyledP
					fontWeight={fonts.weights.fontWeight(400)}
					fontSize={fonts.size.regular()}
					color={colors.text}
					maxWidth="36rem"
					margin="0.75rem 0 1.5rem 0"
				>
					How are you doing today? Would you like to share something with the
					community 🤗
				</StyledP>
				<Card>
					<StyledP
						fontWeight={fonts.weights.fontWeight(500)}
						fontSize={fonts.size.xRegular()}
						color={colors.lightGray}
					>
						Create post
					</StyledP>
					<Message>
						<EmotionIcon>
							<img src={messageIcon} alt="emotion-icon" />
						</EmotionIcon>
						<StyledP
							fontWeight={fonts.weights.fontWeight(400)}
							fontSize={fonts.size.regular()}
							color={colors.text}
						>
							How are you feeling today?
						</StyledP>
					</Message>
					<PostButton
						color={colors.white}
						fontWeight={fonts.weights.fontWeight(500)}
						fontSize={fonts.size.regular()}
						backgroundColor={colors.ctaBlue}
						width="fit-content"
					>
						Post
					</PostButton>
				</Card>

				{posts?.length > 0 && (
					<PostsSection>
						{posts.map((post, i) => {
							return <SinglePostCard post={post} key={i} />;
						})}
					</PostsSection>
				)}
			</Content>
		</Container>
	);
}

export default Home;
