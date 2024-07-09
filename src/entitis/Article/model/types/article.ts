import { User } from '@/entitis/User';

import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface ArticleBaseBlock{
    id: string;
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBaseBlock{
    type: ArticleBlockType.CODE
    code: string
}
export interface ArticleImageBlock extends ArticleBaseBlock{
    type: ArticleBlockType.IMAGE
    src: string;
    title: string
}
export interface ArticleTextBlock extends ArticleBaseBlock{
    type: ArticleBlockType.TEXT
    paragraphs: string[];
    title?: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt:string
    type: ArticleType[],
    blocks: ArticleBlock[]
    user: User
}
