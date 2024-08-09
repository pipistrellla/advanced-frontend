import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleView } from '@/entitis/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from '../ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onCLickView: (view: ArticleView) => void;
}

const viewsType = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelectorDeprecated: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const { className, onCLickView, view } = props;
        const { t } = useTranslation();

        const onClick = (newView: ArticleView) => () => {
            onCLickView?.(newView);
        };

        return (
            <div
                className={classNames(cls.articleViewSelector, {}, [className])}
            >
                <HStack gap="8">
                    {viewsType.map((viewsType) => (
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewsType.view)}
                            key={viewsType.view}
                        >
                            <Icon
                                width={24}
                                height={24}
                                className={classNames(
                                    '',
                                    {
                                        [cls.notSelected]:
                                            viewsType.view !== view,
                                    },
                                    [],
                                )}
                                Svg={viewsType.icon}
                            />
                        </Button>
                    ))}
                </HStack>
            </div>
        );
    },
);
