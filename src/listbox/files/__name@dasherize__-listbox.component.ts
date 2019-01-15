import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractApiListBox } from 'systelab-components/widgets/listbox/abstract-api-listbox.component';
import { map } from 'rxjs/internal/operators';

@Component({
	selector: '<%= dasherize(classify(name)) %>-combobox',
	templateUrl: '../../../../../node_modules/systelab-components/html/abstract-listbox.component.html',
})

export class <%= classify(name) %>ListBox extends AbstractApiListBox<<%= model %>> {

	<% if(paginated) { %>
	public totalItems = 0;
	<% } %>

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
