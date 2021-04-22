import { ToggleThemeComponent } from '../toggle-theme/toggle-theme';

export default class HeaderComponent {
	constructor() {
		new ToggleThemeComponent();
	}

	static init() {
		const header = new HeaderComponent();
		return header;
	}
}
