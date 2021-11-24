import { Component } from '@angular/core';
import { AbstractApiGrid, DialogService } from 'systelab-components';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: '<%= dasherize(classify(name)) %>-grid',
	templateUrl: '../../../../../../node_modules/systelab-components/html/abstract-grid.component.html'
})
export class <%= classify(name) %>Grid extends AbstractApiGrid<<%= model %>> {

	<% if(paginated) { %>
	public totalItems = 0;
	<% } %>

	constructor(protected api: <%= api %>,
							protected preferencesService: PreferencesService,
	            protected i18nService: I18nService,
	            protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	protected getColumnDefs(): Array<any> {
		const columnDefs: Array<any> = [
			{colId: 'col1', headerName: this.i18nService.instant('COMMON_COLUMN_1'), field: 'field1', width: 150},
			{colId: 'col2', headerName: this.i18nService.instant('COMMON_COLUMN_2'), field: 'field2', width: 150}
		];

		return columnDefs;
	}

	public getTotalItems() {
		<% if(paginated) { %>
		return this.totalItems;
		<% } else { %>
		return this.api.totalItems;
		<% } %>
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<<%= model %>>> {
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
}
