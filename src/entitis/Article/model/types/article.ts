import { User } from 'entitis/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'created'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

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

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

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

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}
