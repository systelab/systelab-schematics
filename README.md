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

- Generate a patient-details folder
- The files: patient-details-grid.ts and patient-details-grid-spec.ts

The name for the selector will be name dashed, and the name of the components will be the name upper camel case.
