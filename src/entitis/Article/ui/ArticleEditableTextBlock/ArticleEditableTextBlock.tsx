import { FC, memo, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Input } from '@/shared/ui/redesigned/Input';
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
        const [paragraphs, setParagraphs] = useState<string[]>(
            block.paragraphs,
        );

        const [paragraphValue, setParagraphValue] = useState<string>('');

        const onChangeTitleHandler = (value: string) => {
            setTitle(value);
        };

        const onFocusParagraphHandler = () => {
            console.log(setParagraphValue);
        };

        const onChangeParagraphHandler = (value: string) => {
            setParagraphValue(value);
        };
        // todo разобраться с параграфам
        return (
            <div
                className={classNames(cls.articleEditableTextBlock, {}, [
                    className,
                ])}
            >
                {title && (
                    <Input
                        value={title}
                        className={cls.title}
                        onChange={onChangeTitleHandler}
                    />
                )}
                {paragraphs.map((paragraph) => (
                    <TextArea
                        rows={16}
                        value={paragraph}
                        key={paragraph}
                        className={cls.paragraph}
                        onChange={onChangeParagraphHandler}
                        onFocus={onFocusParagraphHandler}
                    />
                ))}
            </div>
        );
    },
);
