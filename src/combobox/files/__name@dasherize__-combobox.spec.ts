import { <%= classify(name) %>ComboBox } from './<%= dasherize(name) %>-combobox';

describe('<%= classify(name) %>', () => {
	it('should create an instance', () => {
		expect(new <%= classify(name) %>ComboBox()).toBeTruthy();
	});
});