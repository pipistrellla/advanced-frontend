import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ArticleDetails } from 'entitis/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    if (!id) {

        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Text title={t('Cтатья не найдена')} theme={TextTheme.ERROR} />
            </div>
        );

    }
    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );

};

export default memo(ArticleDetailsPage);
