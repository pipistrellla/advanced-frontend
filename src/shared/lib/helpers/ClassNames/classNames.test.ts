import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';

describe('classNames', () => {

    test('with only first param', () => {

        expect(classNames('someClass')).toBe('someClass');

    });
    test('with additional class', () => {

        const expected:string = 'someClass class1 class2';

        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);

    });
    test('with mods', () => {

        const expected:string = 'someClass class1 class2 hovered scrollable';

        expect(classNames(
            'someClass',
            {
                hovered: true, draggable: false, selected: false, scrollable: true,
            },
            ['class1', 'class2'],
        )).toBe(expected);

    });

    test('with mods all true', () => {

        const expected:string = 'someClass class1 class2 hovered draggable scrollable';

        expect(classNames(
            'someClass',
            {
                hovered: true, draggable: true, scrollable: true,
            },
            ['class1', 'class2'],
        )).toBe(expected);

    });

    test('with mods all false', () => {

        const expected:string = 'someClass class1 class2';

        expect(classNames(
            'someClass',
            {
                hovered: false, draggable: false, selected: false,
            },
            ['class1', 'class2'],
        )).toBe(expected);

    });

    test('with mods one undefined', () => {

        const expected:string = 'someClass class1 class2 hovered';

        expect(classNames(
            'someClass',
            {
                hovered: true, draggable: undefined,
            },
            ['class1', 'class2'],
        )).toBe(expected);

    });

});
