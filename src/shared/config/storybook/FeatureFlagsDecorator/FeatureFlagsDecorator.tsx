import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const FeatureFlagsDecorator =
    (feature: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlags(feature);

        return <StoryComponent />;
    };
