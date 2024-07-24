import { Node, Project, SyntaxKind } from 'ts-morph';

const featureToRemoveName = process.argv[2];
const featureToRemoveState = process.argv[3];

if (!featureToRemoveName) {
    throw new Error('Укажите название фичи');
}

if (!featureToRemoveState) {
    throw new Error('Укажите состояние фичи (on/off)');
}
if (featureToRemoveState !== 'on' && featureToRemoveState !== 'off') {
    throw new Error('Некорректное состояние фичи  ( разрешены on и off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');

// TODO Раскоментить посмле теста
// project.addSourceFilesAtPaths('src/**/*ts');
// project.addSourceFilesAtPaths('src/**/*tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures: boolean = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) {
                return;
            }

            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('of');

            const featureNameProperty = objectOptions.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== featureToRemoveName) {
                return;
            }

            if (featureToRemoveState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            if (featureToRemoveState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
