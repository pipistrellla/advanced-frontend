import type { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailReducer } from '@/entitis/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { LoginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: LoginReducer,
    profile: profileReducer,
    articleDetails: articleDetailReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
