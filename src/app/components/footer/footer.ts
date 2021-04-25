import { NewsletterComponent } from '../newsletter/newsletter';

export default class FooterComponent {
	constructor() {
		NewsletterComponent.init();
	}

	static init() {
		const footer = new FooterComponent();
		return footer;
	}
}
