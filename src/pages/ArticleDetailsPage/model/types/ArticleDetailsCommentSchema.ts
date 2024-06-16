import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entitis/Comment';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
    isLoading?:boolean
    error?: string
}
