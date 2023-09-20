export const IO = (item: any, options: any) => {
	return new Promise((resolve) => {
		const observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					resolve(null);
				}
			});
		}, options);
		observer.observe(item);
	});
};
