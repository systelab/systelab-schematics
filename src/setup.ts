import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { SchematicContext, Tree } from '@angular-devkit/schematics';

export function setupOptions(host: Tree, options: any): Tree {
	const workspace = getWorkspace(host);
	if (!options.project) {
		options.project = Object.keys(workspace.projects)[0];
	}
	// const project = workspace.projects[options.project];

	if (options.path === undefined) {
		//	options.path = buildDefaultPath(project);
	}

	const parsedPath = parseName(options.path, options.name);
	options.name = parsedPath.name;
	options.path = parsedPath.path;
	return host;
}

export function showHelp(context: SchematicContext) {

	context.logger.info('  ____            _       _       _');
	context.logger.info(' / ___| _   _ ___| |_ ___| | __ _| |__');
	context.logger.info(' \\___ \\| | | / __| __/ _ \\ |/ _` |    \\');
	context.logger.info('  ___) | |_| \\__ \\ ||  __/ | (_| | |_) |');
	context.logger.info(' |____/ \\__, |___/\\__\\___|_|\\__,_|_.__/');
	context.logger.info('        |___/');

}