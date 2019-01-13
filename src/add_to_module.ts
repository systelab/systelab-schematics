import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { addDeclarationToModule, addEntryComponentToModule, addExportToModule, } from '@schematics/angular/utility/ast-utils';
import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { InsertChange } from '@schematics/angular/utility/change';
import { ts } from './version-agnostic-typescript';

function readIntoSourceFile(host: Tree, modulePath: string) {
	const text = host.read(modulePath);
	if (text === null) {
		throw new SchematicsException(`File ${modulePath} does not exist.`);
	}

	return ts.createSourceFile(modulePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);
}

export function addDeclarationToNgModule(options: any, suffix: string, componentPath: string): Rule {
	return (host: Tree) => {
		if (options.skipImport || !options.module) {
			return host;
		}

		const modulePath = options.module;
		let source = readIntoSourceFile(host, modulePath);

		const relativePath = buildRelativePath(modulePath, componentPath);
		const classifiedName = strings.classify(`${options.name}${suffix}`);

		const declarationChanges = addDeclarationToModule(
			source,
			modulePath,
			classifiedName,
			relativePath);

		const declarationRecorder = host.beginUpdate(modulePath);
		for (const change of declarationChanges) {
			if (change instanceof InsertChange) {
				declarationRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(declarationRecorder);

		if (options.export) {
			// Need to refresh the AST because we overwrote the file in the host.
			source = readIntoSourceFile(host, modulePath);

			const exportRecorder = host.beginUpdate(modulePath);
			const exportChanges = addExportToModule(
				source,
				modulePath,
				strings.classify(`${options.name}${suffix}`),
				relativePath);

			for (const change of exportChanges) {
				if (change instanceof InsertChange) {
					exportRecorder.insertLeft(change.pos, change.toAdd);
				}
			}
			host.commitUpdate(exportRecorder);
		}

		if (options.entryComponent) {
			// Need to refresh the AST because we overwrote the file in the host.
			source = readIntoSourceFile(host, modulePath);

			const entryComponentRecorder = host.beginUpdate(modulePath);
			const entryComponentChanges = addEntryComponentToModule(
				source,
				modulePath,
				strings.classify(`${options.name}${suffix}`),
				relativePath);

			for (const change of entryComponentChanges) {
				if (change instanceof InsertChange) {
					entryComponentRecorder.insertLeft(change.pos, change.toAdd);
				}
			}
			host.commitUpdate(entryComponentRecorder);
		}

		return host;
	};
}