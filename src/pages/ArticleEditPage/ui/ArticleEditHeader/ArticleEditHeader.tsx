import { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { getArticleDetailsData } from '@/entitis/Article';
import NoImage from '@/shared/assets/icons/NoImage.svg';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

interface ArticleEditHeaderProps {
    className?: string;
}
// todo сделать header редактируемым
export const ArticleEditHeader: FC<ArticleEditHeaderProps> = memo((props) => {
    const { className } = props;
    const article = useSelector(getArticleDetailsData);

    return (
        <Card>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <VStack max align="center">
                <AppImage
                    fallback={
                        <Skeleton width="100%" height={420} border="16px" />
                    }
                    errorFallback={
                        <Icon Svg={NoImage} width="100%" height={420} />
                    }
                    src={article?.img}
                />
            </VStack>
        </Card>
    );
});
