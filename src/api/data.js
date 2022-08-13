import helloIcon from "../images/helloIcon.svg";
import sadIcon from "../images/sadIcon.svg";
import profileImage1 from "../images/profileImage1.svg";
import profileImage2 from "../images/profileImage2.svg";

export const posts = [
	{
		profileImage: profileImage1,
		emotion: helloIcon,
		message:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		name: "Theresa Webb",
		updated: "5mins ago",
		numberOfComments: 24,
	},
	{
		profileImage: profileImage2,
		emotion: sadIcon,
		message:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		name: "Marvin McKinney",
		updated: "8mins ago • Edited",
		numberOfComments: 24,
	},
];
