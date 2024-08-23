import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { TextAlign, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
    memo((props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={cls.image} alt={block.title} />
                {block.title && (
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                title={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                        on={
                            <TextRedesigned
                                title={block.title}
                                align="center"
                            />
                        }
                    />
                )}
            </div>
        );
    });
