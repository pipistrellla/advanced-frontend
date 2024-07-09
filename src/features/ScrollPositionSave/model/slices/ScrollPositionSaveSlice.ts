import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScrollPositionSaveSchema } from '../types/ScrollPositionSaveSchema';

const initialState: ScrollPositionSaveSchema = {
    scroll: {},
};
export const ScrollPositionSaveSlice = createSlice({
    name: 'ScrollPositionSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {

            state.scroll[payload.path] = payload.position;

        },
    },
});
export const { actions: ScrollPositionSaveActions } = ScrollPositionSaveSlice;
export const { reducer: ScrollPositionSaveReducer } = ScrollPositionSaveSlice;
