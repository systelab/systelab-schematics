import { <%= classify(name) %>Dialog } from './<%= dasherize(name) %>-dialog.component';

describe('<%= classify(name) %>', () => {
	it('should create an instance', () => {
		expect(new <%= classify(name) %>Dialog()).toBeTruthy();
	});
});
