import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <Text text={t('ARTICLE DETAILS PAGE')} />
        </div>
    );

};

export default memo(ArticleDetailsPage);
