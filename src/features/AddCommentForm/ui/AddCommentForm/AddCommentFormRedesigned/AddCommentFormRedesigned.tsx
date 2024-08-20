import React, { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import Input from '@/shared/ui/redesigned/Input/ui/Input';
import { HStack } from '@/shared/ui/Stack';

import {
    getAddCommentFormText,
    getAddCommentFormError,
} from '../../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../../../model/slice/addCommentFormSlice';
import { addCommentFormReducer } from '../../../testing';
import { AddCommentFormProps } from '../AddCommentForm';
import cls from '../AddCommentForm.module.scss';

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentFormRedesigned: FC<AddCommentFormProps> = memo((props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onClickSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card padding="24" max border="round">
                <HStack
                    data-testid="AddCommentForm"
                    justify="between"
                    max
                    className={classNames(cls.addCommentFormRedesigned, {}, [
                        className,
                    ])}
                    gap="16"
                >
                    <Input
                        data-testid="AddCommentForm.Input"
                        className={cls.input}
                        placeholder={t('Введите текст комментария')}
                        value={text}
                        onChange={onCommentTextChange}
                    />
                    <Button
                        data-testid="AddCommentForm.Button"
                        variant="outline"
                        onClick={onClickSendHandler}
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </Card>
        </DynamicModuleLoader>
    );
});

export default AddCommentFormRedesigned;
