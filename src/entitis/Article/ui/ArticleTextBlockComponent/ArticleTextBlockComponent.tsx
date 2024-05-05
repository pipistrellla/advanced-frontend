import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            123
        </div>
    );

};
