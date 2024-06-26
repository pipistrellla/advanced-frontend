import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { getArticleDetailsData } from '@/entitis/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {

    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const onClickBackToList = useCallback(() => {

        navigate(RoutePath.articles);

    }, [navigate]);

    const onClickEditArticle = useCallback(() => {

        navigate(`${RoutePath.article_details}${article?.id}/edit`);

    }, [article?.id, navigate]);

    return (
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
        >
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onClickBackToList}
            >
                {t('Вернуться назад')}
            </Button>
            { canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onClickEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );

});
