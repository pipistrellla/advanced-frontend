export enum ArticleBlockTypes {
    CODE = 'CODE',
    IMAGE = 'TEXT',
    TEXT = 'TEXT'
}

export interface ArticleBaseBlock{
    id: string;
    types: ArticleBlockTypes
}

export interface ArticleCodeBlock extends ArticleBaseBlock{
    types: ArticleBlockTypes.CODE
    code: string
}
export interface ArticleImageBlock extends ArticleBaseBlock{
    types: ArticleBlockTypes.IMAGE
    src: string;
    title: string
}
export interface ArticleTextBlock extends ArticleBaseBlock{
    types: ArticleBlockTypes.TEXT
    paragraphs: string;
    title?: string
}

export type ArticleBlock = ArticleBlockTypes | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
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
}
