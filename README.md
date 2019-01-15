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
npm install -D systelab-schematics
```

### Create Modal

In order to generate a new modal based on systelab-components, you must run the following angular cli command

```
ng g systelab-schematics:dialog "patient management" --module="/src/app/app.module.ts"
```

The schematic will:

- Generate a patient-management folder
- The files: patient-management-dialog.ts, patient-management-dialog.spec.ts, patient-management-dialog.html and patient-management-dialog.scss

The name for the selector will be name dashed, and the name of the components will be the name upper camel case.

Be aware that you can use the short command:

```
ng g systelab-schematics:dialog doctor --module="/src/app/app.module.ts"
```

If you specify a module, teh component will be added in the specified module.

### Create Grid, ListBox, ComboBox

In order to generate a new grid based on systelab-components, you must run the following angular cli command

```
ng g systelab-schematics:grid --name="patient details" --api="PatientDetailsService" --model="PatientDetail" --module="/src/common/components/components.module.ts"
```

The schematic will:

- Generate a patient-details folder and a grid folder
- The files: patient-details-grid.ts and patient-details-grid-spec.ts

The name for the selector will be name dashed, and the name of the components will be the name upper camel case.

If api is not set name upper camel case with the suffix 'Api' will be used.
If model is not set name upper camel case with the suffix 'Data' will be used.

Be aware that you can use the short command:

```
ng g systelab-schematics:grid doctor
```

Use similar commands fot listbox and combobox:

```
ng g systelab-schematics:listbox doctor
ng g systelab-schematics:combobox doctor
```

### Example

For a full example run:

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
cd src &&
mkdir common &&
cd common &&
ng generate module Components && 
cd components &&
ng g systelab-schematics:grid --name="some name" --module="/src/common/components/components.module.ts" &&
ng g systelab-schematics:combobox --name="some name" --module="/src/common/components/components.module.ts" &&
cd .. &&
cd .. &&
cd app &&
ng g systelab-schematics:dialog --name="some name" --module="/src/app/app.module.ts"

```
