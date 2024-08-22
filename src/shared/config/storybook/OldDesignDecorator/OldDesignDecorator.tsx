import { Story } from '@storybook/react';

// eslint-disable-next-line personal-use-fsd-plugin/layer-imports
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures/setGetFeatures';

export const OldDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: false });
    return (
        <div className="app">
            <StoryComponent />
        </div>
    );
};
