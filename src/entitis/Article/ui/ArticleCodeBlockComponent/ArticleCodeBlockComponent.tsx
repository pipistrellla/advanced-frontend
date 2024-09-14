import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code } from '@/shared/ui/redesigned/Code';

import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../../Article/model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
    memo((props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    on={<Code text={block.code} />}
                    off={<CodeDeprecated text={block.code} />}
                />
            </div>
        );
    });
