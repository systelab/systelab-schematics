import { <%= classify(name) %>Grid } from './<%= dasherize(name) %>-grid';

describe('<%= classify(name) %>', () => {
	it('should create an instance', () => {
		expect(new <%= classify(name) %>Grid()).toBeTruthy();
	});
});