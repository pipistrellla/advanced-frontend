import { FC, memo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import cls from './ArticleEditableImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleEditableImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleEditableImageBlockComponent: FC<ArticleEditableImageBlockComponentProps> =
    memo((props: ArticleEditableImageBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();
        const [title, setTitle] = useState<string>(block.title);
        const [src, setSrc] = useState<string>(block.src);

        return (
            <VStack
                align="center"
                max
                gap="4"
                className={classNames('', {}, [className])}
            >
                <Input
                    placeholder={t('наименования картинки')}
                    value={title}
                    onChange={setTitle}
                />
                <Input
                    placeholder={t('ссылка на картинку')}
                    value={src}
                    onChange={setSrc}
                />
                <img src={src} className={cls.img} alt={title} />
                {block.title && <TextRedesigned title={title} align="center" />}
            </VStack>
        );
    });
