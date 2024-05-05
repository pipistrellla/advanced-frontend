import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            123
        </div>
    );

};
