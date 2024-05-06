import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
className?: string;
block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
    (props: ArticleImageBlockComponentProps) => {

        const {
            className,
            block,
        } = props;
        const { t } = useTranslation();

        return (
            <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
                <img src={block.src} className={cls.image} alt={block.title} />
                {block.title && (
                    <Text title={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );

    },
);
