export const listFormatter = new Intl.ListFormat('en-US', { style: 'short', type: 'conjunction' });
export const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });

export function isInViewport(element: HTMLElement) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

export function convertRemToPixels(rem: number) {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
