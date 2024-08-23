import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, User } from '@/entitis/User';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = memo(
    (props) => {
        const { className, author, createdAt, views, onEdit } = props;
        const { t } = useTranslation('article');
        const userData = useSelector(getUserAuthData);

        return (
            <VStack gap="32" className={classNames('', {}, [className])}>
                <HStack gap="8">
                    <Avatar src={author.avatar} size={32} />
                    <Text bold text={author.username} />
                    <Text text={createdAt} />
                </HStack>
                {userData?.id === author.id ? (
                    <Button onClick={onEdit}>{t('Редактировать')}</Button>
                ) : null}
                <Text text={t('просмотров', { count: views })} />
            </VStack>
        );
    },
);
