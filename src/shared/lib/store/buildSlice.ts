import { useMemo } from 'react';

import { createSlice } from '@reduxjs/toolkit';
import { bindActionCreators, SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useDispatch } from 'react-redux';

export function buildSlice<
        State,
        CaseReducers extends SliceCaseReducers<State>,
        Name extends string = string
    >(options: CreateSliceOptions<State, CaseReducers, Name>) {

    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {

        const dispatch = useDispatch();
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);

    };

    return {
        ...slice,
        useActions,
    };

}
