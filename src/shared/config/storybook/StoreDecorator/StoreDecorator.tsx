import { ReducersMapObject } from '@reduxjs/toolkit';
import type { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailReducer } from 'entitis/Article/model/slice/articleDetailSlice';
import { profileReducer } from 'entitis/Profile';
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: LoginReducer,
    profile: profileReducer,
    articleDetails: articleDetailReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
