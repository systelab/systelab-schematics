import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractApiListBox } from 'systelab-components/widgets/listbox/abstract-api-listbox.component';

@Component({
	selector: '<%= dasherize(classify(name)) %>-combobox',
	templateUrl: '../../../../../node_modules/systelab-components/html/abstract-listbox.component.html',
})

export class <%= classify(name) %>ListBox extends AbstractApiListBox<<%= model %>> {


	constructor(public api: <%= api %>) {
		super();
	}

	public getInstance() {
		return new <%= model %>();
	}

	public getDescriptionField(): string {
		return 'fieldDescription';
	}

	public getIdField(): string {
		return 'fieldID';
	}

	public getData(page: number, itemsPerPage: number): Observable<Array<<%= model %>>> {
		return this.api.get<%= classify(name) %>List(page, itemsPerPage);
	}

	public getTotalItems(): number {
		return this.api.totalItems;
	}
}
