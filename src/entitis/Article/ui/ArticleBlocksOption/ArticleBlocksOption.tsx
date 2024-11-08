import { ReactNode } from 'react';

import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const ArticleBlocksOption: ReactNode[] = [
    <ArticleCodeBlockComponent
        block={{
            code: 'вставить блок с кодом',
            id: '1',
            type: ArticleBlockType.CODE,
        }}
    />,
    <ArticleTextBlockComponent
        block={{
            paragraphs: ['вставить блок с параграфами'],
            title: 'вставить блок с названиями',
            id: '1',
            type: ArticleBlockType.TEXT,
        }}
    />,
    <ArticleImageBlockComponent
        block={{
            title: 'вставить блок с изображениями',
            src: '',
            id: '1',
            type: ArticleBlockType.IMAGE,
        }}
    />,
];
