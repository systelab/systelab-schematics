import { apply, filter, MergeStrategy, mergeWith, move, noop, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { normalize, strings } from '@angular-devkit/core';
import { setupOptions } from "./setup";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function combobox(options: any): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		setupOptions(tree, options);

		const movePath = (options.flat) ?
			normalize(options.path) :
			normalize(options.path + '/' + strings.dasherize(options.name)+'/combobox');

		const templateSource = apply(url('./files'), [
			options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
			template({
				...strings,
				...options,
			}),
			move(movePath),
		]);

		const rule = mergeWith(templateSource, MergeStrategy.Default);

		return rule(tree, _context);
	};
}