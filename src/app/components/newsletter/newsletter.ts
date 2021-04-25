import { clickOutside } from '@/helpers/clickOutside';
import { hasClass } from '@/helpers/DOM/hasClass';

export class NewsletterComponent {
	newsletterForm = <HTMLFormElement>document.querySelector('.js-newsletter-form');
	newsletterBtn = <HTMLButtonElement>document.querySelector('.js-newsletter-form__btn');
	newsletterInput = <HTMLInputElement>document.querySelector('.js-newsletter-form__input');
	newsletterAlert = <HTMLElement>document.querySelector('.js-newsletter-form__alert');
	newsLetterAlertMessage = {
		isRequired: 'Please enter your email.',
		isNotEmail: 'Please enter a valid email.',
		isSuccess: ' Success! Check your inbox for a confirmation email.',
	}

	constructor() {
		this.submitNewsletter();
		this.handleInput();
		this.handleClickOutside();
	}

	submitNewsletter() {
		this.newsletterBtn.addEventListener('click', () => {
			const emailValue = this.newsletterInput.value;
			if (!emailValue) {
				this.setErrorMessage(this.newsLetterAlertMessage.isRequired);
				return;
			}
			if (!this.isEmail(emailValue)) {
				this.setErrorMessage(this.newsLetterAlertMessage.isNotEmail);
				return;
			}
			this.newsletterBtn.classList.add('is-subscribed');
			this.newsletterBtn.classList.add('is-loading');
			
			setTimeout(() => {
				this.newsletterBtn.classList.remove('is-loading');
				this.newsletterBtn.classList.add('is-success');
				this.setSuccessMessage(this.newsLetterAlertMessage.isSuccess);
			}, 3000);
			
		});
	}

	handleInput() {
		this.newsletterInput.addEventListener('input', () => {
			if (hasClass(this.newsletterForm, 'is-success') || hasClass(this.newsletterForm, 'is-error')) {
				this.removeAlertMessage();
				this.disableButtonState();
				this.disableButtonState();
			}
		})
	}

	handleClickOutside() {
		clickOutside(this.newsletterForm, () => {
			if (hasClass(this.newsletterForm, 'is-success') || hasClass(this.newsletterForm, 'is-error')) {
				this.removeAlertMessage();
			}
		})
	}

	setErrorMessage(message: string) {
		this.newsletterForm.classList.add('is-error');
		this.newsletterForm.classList.remove('is-success');
		this.newsletterAlert.classList.add('is-show');
		this.newsletterAlert.textContent = message;
	}

	setSuccessMessage(message: string = '') {
		this.newsletterForm.classList.remove('is-error');
		this.newsletterForm.classList.add('is-success');
		this.newsletterAlert.classList.add('is-show');
		this.newsletterAlert.textContent = message;
	}

	removeAlertMessage() {
		this.newsletterForm.classList.remove('is-error');
		this.newsletterForm.classList.remove('is-success');
		this.newsletterAlert.classList.remove('is-show');
		this.newsletterAlert.textContent = '';
	}

	disableButtonState() {
		this.newsletterBtn.classList.remove('is-subscribed');
		this.newsletterBtn.classList.remove('is-loading');
		this.newsletterBtn.classList.remove('is-success');
	}

	isEmail(email: string) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	static init() {
		const newsletter = new NewsletterComponent();
		return newsletter;
	}
}
