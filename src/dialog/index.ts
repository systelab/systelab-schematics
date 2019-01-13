import { apply, chain, filter, MergeStrategy, mergeWith, move, noop, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { normalize, strings } from '@angular-devkit/core';
import { setupOptions } from "./setup";
import { addDeclarationToNgModule } from '../add_to_module';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function dialog(options: any): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		setupOptions(tree, options);

		const movePath = (options.flat) ?
			normalize(options.path) :
			normalize(options.path + '/' + strings.dasherize(options.name));

		const templateSource = apply(url('./files'), [
			options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
			template({
				...strings,
				...options,
			}),
			move(movePath),
		]);

		const componentPath = `/${options.path}/`
			+ (options.flat ? '' : strings.dasherize(options.name) + '/')
			+ strings.dasherize(options.name)
			+ '-dialog';

		const rule = chain([
			addDeclarationToNgModule(options, 'Dialog', componentPath),
			mergeWith(templateSource, MergeStrategy.Default)]);

		_context.logger.info('Run the dialog with:');
		_context.logger.info('');
		_context.logger.info('const parameters: ' + strings.classify(options.name) + 'DialogParameters = ' + strings.classify(options.name) + 'Dialog.getParameters();');
		_context.logger.info('parameters.width = 400;');
		_context.logger.info('this.dialogService.showDialog(' + strings.classify(options.name) + 'Dialog, parameters)');
		_context.logger.info('	.subscribe(res => {');
		_context.logger.info('		this.doSomething();');
		_context.logger.info('	});');
		_context.logger.info('');

		return rule(tree, _context);
	};
}