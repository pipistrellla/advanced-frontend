import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
    className?:string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {

        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={() => toggle()}
        >
            {t('Язык')}
        </Button>
    );

};
