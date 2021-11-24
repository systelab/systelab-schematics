import { Component } from '@angular/core';


@Component({
	selector: '<%= dasherize(classify(name)) %>-panel',
	templateUrl: '<%= dasherize(classify(name)) %>-panel.component.html',
	styleUrls: ['<%= dasherize(classify(name)) %>-panel.component.scss']
})
export class <%= classify(name) %>Panel {

	public input1: string;
	public active = true;

	constructor() {
	}
}
