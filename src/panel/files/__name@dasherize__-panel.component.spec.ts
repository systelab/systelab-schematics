import { <%= classify(name) %>Panel } from './<%= dasherize(name) %>-panel';

describe('<%= classify(name) %>', () => {
	it('should create an instance', () => {
		expect(new <%= classify(name) %>Panel()).toBeTruthy();
	});
});