import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames('', {}, [className])}
        >
            <Text text={t('Доступ запрещен')} />
        </Page>
    );
});
