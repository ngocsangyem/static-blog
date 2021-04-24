export class ToggleThemeComponent {
	themeSwitch = <HTMLInputElement>document.querySelector('#toggleThemeInput');
	toggleTheme = <HTMLElement>document.querySelector('.toggle-theme');

	constructor() {
		this.handleThemeSwitch();
	}

	initTheme() {
		const darkThemeSelected =
			localStorage.getItem('themeSwitch') !== null &&
			localStorage.getItem('themeSwitch') === 'dark';
		// update checkbox
		this.themeSwitch.checked = darkThemeSelected;
		// update body data-theme attribute
		if (darkThemeSelected) {
			document.body.setAttribute('data-theme', 'dark');
			this.toggleTheme.setAttribute('aria-label', 'Enable light mode');
		} else {
			document.body.removeAttribute('data-theme');
			this.toggleTheme.setAttribute('aria-label', 'Enable dark mode');
		}
	}

	resetTheme() {
		if (this.themeSwitch.checked) {
			// dark theme has been selected
			document.body.setAttribute('data-theme', 'dark');
			localStorage.setItem('themeSwitch', 'dark');
			this.toggleTheme.setAttribute('aria-label', 'Enable light mode');
		} else {
			document.body.removeAttribute('data-theme');
			localStorage.removeItem('themeSwitch');
			this.toggleTheme.setAttribute('aria-label', 'Enable dark mode');
		}
	}

	handleThemeSwitch() {
		this.initTheme(); // if user has already selected a specific theme -> apply it
		this.themeSwitch.addEventListener('change', () => {
			this.resetTheme();
		});
	}
}
