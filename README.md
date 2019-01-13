# Systelab Angular Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to work with [systelab-components](https://github.com/systelab/systelab-components).

## Working with the repo

In order to clone the repository and test the library use the following commands:

```bash
git clone https://github.com/systelab/systelab-schematics.git
cd systelab-schematics
npm install
npm run build
```

In order to publish the library, an authorized npm user is required. Once set, update the version in the package.json, and run the npm publish script:

```npm
npm publish
```

## Using systelab-schematics

In order to use the schematics you must install the following development dependency:

```
npm i -D systelab-schematics
```

### Create Modal

In order to generate a new modal based on systelab-components, you must run the following angular cli command

```
ng g systelab-schematics:dialog --name="patient management"
```

The schematic will:

- Generate a patient-management folder
- The files: patient-management-dialog.ts, patient-management-dialog.spec.ts, patient-management-dialog.html and patient-management-dialog.scss

The name for the selector will be name dashed, and the name of the components will be the name upper camel case.

### Create Grid

In order to generate a new grid based on systelab-components, you must run the following angular cli command

```
ng g systelab-schematics:grid --name="patient details"
```

The schematic will:

- Generate a patient-details folder and a grid folder
- The files: patient-details-grid.ts and patient-details-grid-spec.ts

The name for the selector will be name dashed, and the name of the components will be the name upper camel case.

### Create ComboBox

In order to generate a new combobox based on systelab-components, you must run the following angular cli command

```
ng g systelab-schematics:combobox --name="patient details"
```

The schematic will:

- Generate a patient-details folder and a combobox folder
- The files: patient-details-combobox.ts and patient-details-combobox-spec.ts

The name for the selector will be name dashed, and the name of the components will be the name upper camel case.

### Example

FOr a full example run:

```
cd somelocation
ng new --style=scss --routing=false simpletest &&
cd simpletest &&
npm install -D systelab-schematics &&
npm install systelab-translate &&
npm install systelab-preferences &&
npm install systelab-components &&
npm install systelab-login &&
npm install systelab-charts &&
npm install -D systelab-schematics &&
cd src &&
mkdir common &&
cd common &&
mkdir components &&
cd components &&
ng g systelab-schematics:grid --name="some name" &&
ng g systelab-schematics:combobox --name="some name" &&
cd .. &&
cd .. &&
cd app &&
ng g systelab-schematics:dialog --name="some name"

```