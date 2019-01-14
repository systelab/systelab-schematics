import { <%= classify(name) %>ListBox } from './<%= dasherize(name) %>-listbox';

describe('<%= classify(name) %>', () => {
	it('should create an instance', () => {
		expect(new <%= classify(name) %>ListBox()).toBeTruthy();
	});
});