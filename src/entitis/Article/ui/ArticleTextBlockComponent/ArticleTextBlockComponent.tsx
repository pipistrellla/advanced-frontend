import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../../Article/model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(
    (props: ArticleTextBlockComponentProps) => {

        const {
            className,
            block,
        } = props;
        const { t } = useTranslation();

        return (
            <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
                {block.title
            && (
                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}
                {block.paragraphs.map((paragraph) => (
                    <Text text={paragraph} key={paragraph} className={cls.paragraph} />
                ))}

            </div>
        );

    },
);
