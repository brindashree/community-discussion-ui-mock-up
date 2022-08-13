import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Overlay = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(19, 19, 25, 0.5);
	backdrop-filter: blur(2px);
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Modal({ visible, handleModalClose }) {
	const [toggleModal, setModalToggle] = useState(true);

	return (
		<>
			{visible && (
				<Overlay>
					{toggleModal ? (
						<SignUpForm
							handleModalToggle={() => setModalToggle(false)}
							modalVisible={visible}
							handleClose={() => handleModalClose()}
						/>
					) : (
						<LoginForm
							handleModalToggle={() => setModalToggle(true)}
							modalVisible={visible}
							handleClose={() => handleModalClose()}
						/>
					)}
				</Overlay>
			)}
		</>
	);
}

export default Modal;
