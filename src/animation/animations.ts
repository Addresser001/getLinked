import gsap, { Power2 } from 'gsap';

const preloadTl: gsap.core.Timeline = gsap.timeline();

export const preLoaderAnim = () => {
	preloadTl
		.to('body', {
			duration: 0,
			css: { overflowY: 'hidden' },
			ease: 'power3.inOut',
		})
		.to('.hero_text_reveal', {
			duration: 0,
			display: 'none',
			ease: 'Power3.easeOut',
		})
		.to('.texts-container', {
			duration: 0,
			opacity: 1,
			ease: 'Power3.easeOut',
		})
		.from('.texts-container span', {
			duration: 1.5,
			delay: 1,
			y: 70,
			skewY: 10,
			stagger: 0.4,
			ease: 'Power3.easeOut',
		})
		.to('.texts-container span', {
			duration: 1,
			y: 70,
			skewY: -20,
			stagger: 0.2,
			ease: 'Power3.easeOut',
		})
		.to('.preloader', {
			duration: 1.5,
			height: '0vh',
			ease: 'Power3.easeOut',
			delay: -0.5,
		})
		.to('.hero_text_reveal', {
			duration: 0,
			display: 'block',
			ease: 'Power3.easeOut',
			delay: -0.5,
		})
		.to('.top_text', {
			duration: 0.7,
			opacity: 1,
			top: 0,
			ease: 'Power3.easeOut',
			delay: -0.5,
			onComplete: headerTransitionIn,
		})
		.to('.preloader', {
			duration: 0,
			css: { display: 'none' },
			delay: 0,
		})
		.to('body', {
			duration: 0,
			css: { overflowY: 'scroll' },
			ease: 'power3.inOut',
		});
};

export const headerTransitionIn = () => {
	gsap.to('.app_header_wrapper', {
		duration: 2,
		display: 'block',
		opacity: 1,
		top: 56,
		ease: 'Power3.easeOut',
	});
};

export const imageReveal = (tl: gsap.core.Timeline) => {
	tl.to('.reveal', { duration: 1.4, width: '0%', ease: Power2.easeInOut }).from('img', { duration: 1.4, scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
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
		)
		.from(
			'.socails a',
			{
				duration: 0.5,
				y: 80,
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
		css: { overflowY: preloadTl.endTime() !== 0 ? 'hidden' : 'scroll' },
		// css: { overflowY: 'scroll' },
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
