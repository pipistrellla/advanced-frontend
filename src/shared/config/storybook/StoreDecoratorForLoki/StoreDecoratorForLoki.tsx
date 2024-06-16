import type { Story } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecoratorForLoki = (StoryComponent: Story) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
