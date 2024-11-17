import { FC, memo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Article } from '@/entitis/Article';
import NoImage from '@/shared/assets/icons/NoImage.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import cls from './ArticleEditHeader.module.scss';

interface ArticleEditHeaderProps {
    className?: string;
    article: Article;
}
export const ArticleEditHeader: FC<ArticleEditHeaderProps> = memo((props) => {
    const { className, article } = props;

    const { t } = useTranslation('article');
    const [title, setTitle] = useState(article?.title);
    const [subtitle, setSubtitle] = useState(article?.subtitle);
    const [img, setImg] = useState(article?.img);

    return (
        <Card className={classNames(cls.header, {}, [className])}>
            <VStack max gap="4">
                <Input
                    title={t('Название статьи')}
                    value={title}
                    onChange={setTitle}
                    size="l"
                />
                <Input
                    title={t('Краткое описание')}
                    value={subtitle}
                    onChange={setSubtitle}
                />
                <VStack max align="center" gap="8">
                    <Input
                        title={t('ссылка на картинку')}
                        value={img}
                        onChange={setImg}
                    />
                    <AppImage
                        className={cls.img}
                        fallback={
                            <Skeleton width="100%" height={420} border="16px" />
                        }
                        errorFallback={
                            <Icon Svg={NoImage} width="100%" height={420} />
                        }
                        src={img}
                    />
                </VStack>
            </VStack>
        </Card>
    );
});
