import { FC, memo, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/Stack';
import { TextArea } from '@/shared/ui/TextArea';

import cls from './ArticleEditableTextBlock.module.scss';
import { ArticleTextBlock } from '../../../Article/model/types/article';

interface ArticleEditableTextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleEditableTextBlock: FC<ArticleEditableTextBlockProps> = memo(
    (props: ArticleEditableTextBlockProps) => {
        const { className, block } = props;

        const [title, setTitle] = useState<string | undefined>(block.title);
        const [paragraphs, setParagraphs] = useState<string>(
            block.paragraphs.join('\n'),
        );

        const onChangeTitleHandler = (value: string) => {
            setTitle(value);
        };

        const onChangeParagraphHandler = (value: string) => {
            setParagraphs(value);
        };

        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.articleEditableTextBlock, {}, [
                    className,
                ])}
            >
                <Input
                    value={title}
                    className={cls.title}
                    onChange={onChangeTitleHandler}
                />

                <TextArea
                    rows={16}
                    value={paragraphs}
                    className={cls.paragraph}
                    onChange={onChangeParagraphHandler}
                />
            </VStack>
        );
    },
);
