import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

import { Text } from '../../../shared/ui/deprecated/Text';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, short }: LangSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggle = () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.CLEAR}
                        onClick={() => toggle()}
                    >
                        <Text text={t(short ? 'Яз' : 'Язык')} />
                    </ButtonDeprecated>
                }
                on={
                    <Button
                        className={classNames('', {}, [className])}
                        onClick={() => toggle()}
                        variant="clear"
                    >
                        {t(short ? 'Яз' : 'Язык')}
                    </Button>
                }
            />
        );
    },
);
