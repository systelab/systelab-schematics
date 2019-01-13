import { ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractApiComboBox } from 'systelab-components/widgets/combobox/abstract-api-combobox.component';

@Component({
	selector: '<%= dasherize(classify(name)) %>-combobox',
	templateUrl: '../../../../../node_modules/systelab-components/html/abstract-combobox.component.html'
})

export class <%= classify(name) %>ComboBox extends AbstractApiComboBox<<%= model %>> {


	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public api: <%= api %>) {
		super(myRenderer, chref);
	}

	public getInstance() {
		return new <%= model %>();
	}

	public getDescriptionField(): string {
		return 'fieldDescription';
	}

	public getCodeField(): string {
		return 'fieldCode';
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
