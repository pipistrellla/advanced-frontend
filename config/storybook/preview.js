import { addDecorator } from '@storybook/react';

import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecoratorForLoki } from '../../src/shared/config/storybook/StoreDecoratorForLoki/StoreDecoratorForLoki';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            {
                name: 'light',
                class: ['app_redesigned', Theme.LIGHT],
                color: '#ffffff',
            },
            {
                name: 'dark',
                class: ['app_redesigned', Theme.DARK],
                color: '#000000',
            },
            {
                name: 'green',
                class: ['app_redesigned', Theme.GREEN],
                color: '#0e9e32',
            },
            {
                name: 'Deprecated light',
                class: ['app', Theme.LIGHT],
                color: '#ffffff',
            },
            {
                name: 'Deprecated dark',
                class: ['app', Theme.DARK],
                color: '#000000',
            },
            {
                name: 'Deprecated green',
                class: ['app', Theme.GREEN],
                color: '#0e9e32',
            },
        ],
    },
};

addDecorator(StoreDecoratorForLoki);
addDecorator(SuspenseDecorator);
addDecorator(FeatureFlagsDecorator({ isAppRedesigned: true }));
addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
