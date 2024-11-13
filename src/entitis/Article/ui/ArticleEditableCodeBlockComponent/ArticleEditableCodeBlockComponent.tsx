import { FC, memo, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { VStack } from '@/shared/ui/Stack';
import { TextArea } from '@/shared/ui/TextArea';

import { ArticleCodeBlock } from '../../../Article/model/types/article';

interface ArticleEditableCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleEditableCodeBlockComponent: FC<ArticleEditableCodeBlockComponentProps> =
    memo((props: ArticleEditableCodeBlockComponentProps) => {
        const { className, block } = props;
        const [code, setCode] = useState<string>(block.code);

        const HandleOnChange = (value: string) => {
            setCode(value);
        };

        return (
            <VStack max className={classNames('', {}, [className])}>
                <TextArea onChange={HandleOnChange} value={code} rows={10} />
            </VStack>
        );
    });
