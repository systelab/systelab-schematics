import { apply, chain, filter, MergeStrategy, mergeWith, move, noop, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { normalize, strings } from '@angular-devkit/core';
import { setupOptions, showHelp } from "../setup";
import { addDeclarationToNgModule } from '../add_to_module';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function listbox(options: any): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		showHelp(_context);
		options.export = true;
		setupOptions(tree, options);

		const movePath = (options.flat) ?
			normalize(options.path) :
			normalize(options.path + '/' + strings.dasherize(options.name) + '/listbox');

		const apiName = strings.classify(options.name) + 'Api';
		if (!options.api) {
			options.api = apiName;
		}

		const modelName = strings.classify(options.name) + 'Data';
		if (!options.model) {
			options.model = modelName;
		}

		const templateSource = apply(url('./files'), [
			options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
			template({
				...strings,
				...options,
			}),
			move(movePath),
		]);

		const componentPath = `/${options.path}/`
			+ (options.flat ? '' : strings.dasherize(options.name) + '/listbox/')
			+ strings.dasherize(options.name)
			+ '-listbox.component';

		const rule = chain([
			addDeclarationToNgModule(options, 'ListBox', componentPath),
			mergeWith(templateSource, MergeStrategy.Default)]);

		return rule(tree, _context);
	};
}