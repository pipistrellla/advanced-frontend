import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
    className?:string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {

        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={() => toggle()}
        >
            {t(short ? 'Яз' : 'Язык')}
        </Button>
    );

});
