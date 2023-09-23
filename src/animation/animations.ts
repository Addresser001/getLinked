import gsap from 'gsap';
import Splitting from 'splitting';

let textreveal = {
	repeatRefresh: true,
	yPercent: 0,
	opacity: 1,
	rotateX: 0,
	stagger: 0.03,
	duration: 0.8,
	ease: 'easeOut',
};
let elementReveal = {
	opacity: 1,
	top: 0,
	ease: 'easein',
	duration: 0.7,
};

export const heroanimation = () => {
	const heroTl: gsap.core.Timeline = gsap.timeline();
	const heroanim1 = splittingWordsAndGsapSet('heroanim1');
	const heroanim11 = document.querySelector('#heroanim11');
	const heroanim2 = splittingWordsAndGsapSet('heroanim2');
	const heroanim3 = splittingWordsAndGsapSet('heroanim3');
	const heroanim4 = document.querySelector('#heroanim4');
	const heroanim5 = document.querySelector('#heroanim5');
	const heroanim6 = document.querySelector('#heroanim6');
	heroTl
		.to(heroanim1, {
			delay: 1,
			...textreveal,
		})
		.to(heroanim11, {
			opacity: 1,
			width: '255',
			ease: 'easein',
			duration: 0.9,
		})
		.to(heroanim2, textreveal)
		.to(heroanim3, textreveal)
		.to(heroanim5, elementReveal)
		.to(heroanim6, elementReveal)
		.to(heroanim4, elementReveal);
};

const splittingWordsAndGsapSet = (id: string) => {
	const element = document.querySelector(`#${id}`);

	Splitting({
		target: element!,
		by: 'lines',
	});
	gsap.set(element!.querySelectorAll('.word'), {
		yPercent: 105,
		opacity: 0,
		rotateX: 50,
		transformStyle: 'preserve-3d',
	});
	return element!.querySelectorAll('.word');
};

export const openMenu = () => {
	const tl = gsap.timeline();
	tl.to('body', {
		duration: 0.1,
		css: { overflowY: 'hidden' },
		ease: 'power3.out',
	})
		.to('.hamburger-menu', {
			duration: 0.1,
			css: { display: 'block' },
		})
		.to(
			['.nav-secondary', '.nav-primary'],
			{
				duration: 1.5,
				height: '100%',
				transformOrigin: 'right top',
				stagger: {
					amount: 0.1,
				},
				ease: 'power3.inOut',
			},
			'-=.5'
		)
		.from(
			'.nav-link',
			{
				duration: 0.5,
				x: -80,
				opacity: 0,
				stagger: {
					amount: 0.5,
				},
				ease: 'Power3.in',
			},
			'-=.3'
		);
};

export const closeMenu = () => {
	const tl = gsap.timeline();
	tl.to('body', {
		duration: 0.05,
		css: { overflowY: 'scroll' },
		ease: 'power3.inOut',
	})
		.to(['.nav-primary', '.nav-secondary'], {
			duration: 0.8,
			height: '0',
			transformOrigin: 'right top',
			stagger: {
				amount: 0.1,
			},
			ease: 'power3.inOut',
		})

		.to('.hamburger-menu', {
			duration: 0.05,
			css: { display: 'none' },
		});
};
