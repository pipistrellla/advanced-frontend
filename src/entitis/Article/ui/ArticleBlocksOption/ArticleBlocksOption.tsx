import { ReactNode } from 'react';

import { ArticleBlockType } from '../../model/consts/consts';
// eslint-disable-next-line max-len
import { ArticleEditableCodeBlockComponent } from '../ArticleEditableCodeBlockComponent/ArticleEditableCodeBlockComponent';
// eslint-disable-next-line max-len
import { ArticleEditableImageBlockComponent } from '../ArticleEditableImageBlockComponent/ArticleEditableImageBlockComponent';
import { ArticleEditableTextBlock } from '../ArticleEditableTextBlock/ArticleEditableTextBlock';
// todo разобраться как красиво отображать при добавлении
export const ArticleBlocksOption: ReactNode[] = [
    <ArticleEditableCodeBlockComponent
        block={{
            code: 'вставить блок с кодом',
            id: '1',
            type: ArticleBlockType.CODE,
        }}
    />,
    <ArticleEditableTextBlock
        block={{
            paragraphs: ['вставить блок с параграфами'],
            title: 'вставить блок с названиями',
            id: '1',
            type: ArticleBlockType.TEXT,
        }}
    />,
    <ArticleEditableImageBlockComponent
        block={{
            title: 'вставить блок с изображениями',
            src: '',
            id: '1',
            type: ArticleBlockType.IMAGE,
        }}
    />,
];
