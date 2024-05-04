import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
className?: string;
}

const ArticlePage: FC<ArticlePageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articlePage, {}, [className])}>
            <Text text={t('ARTICLE PAGE')} />
        </div>
    );

};

export default memo(ArticlePage);
