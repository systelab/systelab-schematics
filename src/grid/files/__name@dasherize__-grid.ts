import { Component, Input } from '@angular/core';
import { AbstractApiGrid } from 'systelab-components/widgets/grid/abstract-api-grid.component';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { DialogService } from 'systelab-components/widgets/modal';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { Observable } from 'rxjs';

@Component({
	selector: '<%= dasherize(classify(name)) %>-grid',
	templateUrl: '../../../../../../node_modules/systelab-components/html/abstract-grid.component.html'
})
export class <%= classify(name) %>Grid extends AbstractApiGrid<<%= classify(name) %>Data> {


	constructor(protected api: <%= classify(name) %>Api,
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
		return this.api.totalItems;
	}


	protected getData(page: number, itemsPerPage: number): Observable<Array<<%= classify(name) %>Data>> {
		return this.api.get<%= classify(name) %>List(page, itemsPerPage);
	}



}
