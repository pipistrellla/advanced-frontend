import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/consts';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView
    onCLickView: (view: ArticleView) => void
}

const viewsType = [
    {
        view: ArticleView.SMALL,
        icon: ListIcon,
    },
    {
        view: ArticleView.BIG,
        icon: TiledIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props:ArticleViewSelectorProps) => {

    const {
        className,
        onCLickView,
        view,
    } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {

        onCLickView?.(newView);

    };

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewsType.map((viewsType) => (

                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewsType.view)}
                    key={viewsType.view}
                >
                    <Icon
                        className={
                            classNames(
                                '',
                                { [cls.notSelected]: viewsType.view !== view },
                                [],
                            )
                        }
                        Svg={viewsType.icon}
                    />
                </Button>

            ))}
        </div>
    );

});
