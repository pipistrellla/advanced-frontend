import { memo } from 'react';

import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { RatingCardDeprecated } from './RatingCardDeprecated/RatingCardDeprecated';
import { RatingCardRedesigned } from './RatingCardRedesigned/RatingCardRedesigned';

export interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
    comment?: string;
}

export const RatingCard = memo((props: RatingCardProps) => (
    <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<RatingCardDeprecated {...props} />}
        on={<RatingCardRedesigned {...props} />}
    />
));
