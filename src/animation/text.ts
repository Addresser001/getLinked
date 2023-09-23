import Splitting from 'splitting';
import { IO } from './observe';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const split = () => {
	const p = document.querySelectorAll("[data-animation='paragraph']");
	const H = document.querySelectorAll("[data-animation='header']");
	const revel = document.querySelectorAll("[data-animation='reveal']");
	p.forEach((item) => {
		Splitting({
			target: item,
			by: 'lines',
		});
		gsap.set(item.querySelectorAll('.word'), {
			yPercent: 105,
			opacity: 0,
			rotateX: 50,
			transformStyle: 'preserve-3d',
		});
		IO(item, { threshold: 0.8 }).then(() => {
			const elem = item.querySelectorAll('.word');
			gsap.to(elem, {
				repeat: -1,
				repeatRefresh: true,
				yPercent: 0,
				opacity: 1,
				rotateX: 0,
				stagger: elem.length > 100 ? 0.02 : 0.03,
				duration: 0.5,
				ease: 'easeOut',
			});
		});
	});

	H.forEach((item) => {
		Splitting({
			target: item,
			by: 'chars',
		});
		gsap.set(item.querySelectorAll('.char'), {
			opacity: 0,
			yPercent: 100,
			transformStyle: 'preserve-3d',
		});
		IO(item, {
			threshold: 1,
		}).then(() => {
			const elem = item.querySelectorAll('.char');
			gsap.to(elem, {
				// delay: 4,
				opacity: 1,
				yPercent: 0,
				stagger: elem.length > 100 ? 0.01 : 0.02,
				duration: elem.length > 100 ? 0.5 : 0.6,
				ease: 'easeOut',
			});
		});
	});
	revel.forEach((item) => {
		gsap.set(item, {
			opacity: 0,
			y: 40,
		});
		IO(item, {
			threshold: 1,
		}).then(() => {
			gsap.to(item, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'easeOut',
			});
		});
	});
};
