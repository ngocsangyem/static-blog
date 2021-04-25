/*
 * @param {String} el
 * @param {Function} callback
 * @return null
 * @desc
 * Detect click out side the element
 */

const clickOutside = (el: HTMLElement, callback: Function) => {
	const handleClickOutside = (event: Event) => {
		const isClickedOutside = !el.contains((<HTMLElement>event.target));
		if (isClickedOutside) {
			callback();
			document.removeEventListener('click', handleClickOutside);
		}
	}
	document.addEventListener('click', handleClickOutside);
};

export { clickOutside };
