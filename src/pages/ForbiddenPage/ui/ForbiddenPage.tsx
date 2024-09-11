import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
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
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={<TextDeprecated text={t('Доступ запрещен')} />}
                on={<TextRedesigned text={t('Доступ запрещен')} />}
            />
        </Page>
    );
});
