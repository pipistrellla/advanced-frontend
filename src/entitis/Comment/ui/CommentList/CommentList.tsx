import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo(
    (props: CommentListProps) => {
        const { className, comments, isLoading } = props;

        const { t } = useTranslation('article');

        if (isLoading) {
            return (
                <VStack
                    gap="16"
                    max
                    className={classNames('', {}, [className])}
                >
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            );
        }

        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            comment={comment}
                            isLoading={isLoading}
                            key={comment.id}
                        />
                    ))
                ) : (
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                text={t('Комментарии отсутствуют')}
                            />
                        }
                        on={
                            <TextRedesigned
                                text={t('Комментарии отсутствуют')}
                            />
                        }
                    />
                )}
            </VStack>
        );
    },
);
