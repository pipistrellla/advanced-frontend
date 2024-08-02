import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/deprecated/Button';

interface BugButtonProps {}

const BugButton: FC<BugButtonProps> = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);
    const { t } = useTranslation('PageError');
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={() => throwError()}>{t('бросить ошибку')}</Button>;
};

export default BugButton;
