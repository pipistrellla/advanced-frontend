import { memo, useCallback, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entitis/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';

export const ArticlePageGreetings = memo(() => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { isArticlePageWasOpened } = useJsonSettings();

    const onClose = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const ModalText = (
        <Text
            title={t('Добро пожаловать на сайт!!!')}
            text={t(
                'Тут вы можете ознакомиться со всеми статьями и изучить интересующие вас!',
            )}
        />
    );

    const isMobile = useDevice();

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {ModalText}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {ModalText}
        </Modal>
    );
});
