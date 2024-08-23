import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../../Article/model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
    memo((props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                        on={
                            <TextRedesigned
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                text={paragraph}
                                key={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        on={
                            <TextRedesigned
                                text={paragraph}
                                key={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    });
