import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { Icon } from 'shared/ui/Icon';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

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
