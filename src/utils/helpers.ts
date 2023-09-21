import { Variants } from 'framer-motion';

export const scrollPageToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
	});
};

export const notificationVariant: Variants = {
	hidden: {
		bottom: '-40px',
		opacity: 0,
	},
	visible: {
		bottom: '-20px',
		opacity: 1,
		transition: { duration: 0.15 },
	},
	exit: {
		bottom: '-40px',
		opacity: 0,
		transition: {
			duration: 0.15,
			ease: 'easeInOut',
			transitionEnd: {
				display: 'none',
			},
		},
	},
};
export const notificationVariant2: Variants = {
	hidden: {
		bottom: '0px',
		opacity: 0,
	},
	visible: {
		top: '-30px',
		opacity: 1,
		transition: { duration: 0.15 },
	},
	exit: {
		bottom: '0px',
		opacity: 0,
		transition: {
			duration: 0.15,
			ease: 'easeInOut',
			transitionEnd: {
				display: 'none',
			},
		},
	},
};
