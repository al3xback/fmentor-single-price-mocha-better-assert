import assert from 'better-assert';
import jsdom from 'jsdom';
import got from 'got';

const { JSDOM } = jsdom;

const url =
	'https://al3xback.github.io/fmentor-single-price-mocha-better-assert/';

const getData = () => {
	return got(url)
		.then((res) => {
			const { document } = new JSDOM(res.body).window;
			return document;
		})
		.catch((err) => {
			throw new Error(err);
		});
};

describe('DOM', () => {
	beforeEach(async () => {
		try {
			const document = await getData();
			global.document = document;

			const isAClassExist = (name) => {
				const element = document.querySelector(`.${name}`);
				return !!element;
			};
			global.isAClassExist = isAClassExist;
		} catch (err) {
			console.log(err);
		}
	});

	it("should have a 'card' class used inside the DOM", () => {
		const isClassExist = isAClassExist('card');
		assert(isClassExist);
	});

	it("should have a 'card__subtitle' class used inside the DOM", () => {
		const isClassExist = isAClassExist('card__subtitle');
		assert(isClassExist);
	});

	it("should have a 'card__group' class used inside the DOM", () => {
		const isClassExist = isAClassExist('card__group');
		assert(isClassExist);
	});

	it("should have a 'card__list' class used inside the DOM", () => {
		const isClassExist = isAClassExist('card__list');
		assert(isClassExist);
	});
});
