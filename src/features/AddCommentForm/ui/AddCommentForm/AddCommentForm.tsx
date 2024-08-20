import React, { FC, memo } from 'react';

import { ToggleFeaturesComponent } from '@/shared/lib/features';

import AddCommentFormDeprecated from './AddCommentFormDeprecated/AddCommentFormDeprecated';
import AddCommentFormRedesigned from './AddCommentFormRedesigned/AddCommentFormRedesigned';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => (
    <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<AddCommentFormDeprecated {...props} />}
        on={<AddCommentFormRedesigned {...props} />}
    />
));

export default AddCommentForm;
