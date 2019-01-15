import { ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractApiComboBox } from 'systelab-components/widgets/combobox/abstract-api-combobox.component';
import { map } from 'rxjs/internal/operators';

@Component({
	selector: '<%= dasherize(classify(name)) %>-combobox',
	templateUrl: '../../../../../node_modules/systelab-components/html/abstract-combobox.component.html'
})

export class <%= classify(name) %>ComboBox extends AbstractApiComboBox<<%= model %>> {

	<% if(paginated) { %>
	public totalItems = 0;
	<% } %>

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
		<% if(paginated) { %>
		return this.api.get<%= classify(name) %>List(page, itemsPerPage)
			.pipe(
				map(value => {
					this.totalItems = value.totalElements;
					return value.content;
				})
			);
		<% } else { %>
		return this.api.get<%= classify(name) %>List(page, itemsPerPage);
		<% } %>
	}

	public getTotalItems(): number {
	<% if(paginated) { %>
		return this.totalItems;
		<% } else { %>
		return this.api.totalItems;
		<% } %>
	}
}
