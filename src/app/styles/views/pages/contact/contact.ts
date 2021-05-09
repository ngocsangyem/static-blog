export class ContactPageComponent {
	constructor() {
		console.log('contact page component');
	}
	static init() {
		const Contact = new ContactPageComponent();
		return Contact;
	}
}
(function() {
	ContactPageComponent.init()
})();