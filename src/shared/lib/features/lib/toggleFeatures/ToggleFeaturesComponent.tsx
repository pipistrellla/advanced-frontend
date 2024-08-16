import { ReactElement, FC } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlags } from '../setGetFeatures/setGetFeatures';

interface ToggleFeaturesComponentProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeaturesComponent: FC<ToggleFeaturesComponentProps> = (
    props,
) => {
    const { feature, off, on } = props;

    if (getFeatureFlags(feature)) {
        return on;
    }

    return off;
};
