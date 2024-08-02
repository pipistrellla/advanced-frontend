import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('admin');

    return (
        <Page
            data-testid="AdminPanelPage"
            className={classNames('', {}, [className])}
        >
            <Text text={t('Админ панель')} />
        </Page>
    );
});

export default AdminPanelPage;
