import { Component, ViewChild } from '@angular/core';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from 'systelab-components/widgets/modal';


export class  <%= classify(name) %>DialogParameters extends SystelabModalContext {
    public width = 550;
    public height = 500;
}

@Component({
    selector: '<%= dasherize(classify(name)) %>-dialog',
    templateUrl: '<%= dasherize(classify(name)) %>-dialog.component.html',
})
export class <%= classify(name) %>Dialog implements ModalComponent< <%= classify(name) %>DialogParameters> {

    public parameters:  <%= classify(name) %>DialogParameters;

    constructor(public dialog: DialogRef< <%= classify(name) %>DialogParameters>, protected dialogService: DialogService) {
        this.parameters = dialog.context;
    }

    public static getParameters():  <%= classify(name) %>DialogParameters {
        return new  <%= classify(name) %>DialogParameters();
    }

    public close(): void {
        this.dialog.close();
    }

    public submit(): void {
	      this.dialog.close(true);
    }
}
