import { Project } from 'ts-morph';

const project = new Project({});
// добавили все файлы с которыми будем работать
project.addSourceFilesAtPaths('src/**/*ts');
project.addSourceFilesAtPaths('src/**/*tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
    const layers = ['app', 'shared', 'entitis', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
};

files.forEach((sourceFile) => {
    const importDecorations = sourceFile.getImportDeclarations();

    importDecorations.forEach((importDecorations) => {
        const value = importDecorations.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDecorations.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
