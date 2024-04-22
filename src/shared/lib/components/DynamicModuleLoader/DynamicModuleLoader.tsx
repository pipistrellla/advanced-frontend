import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
// если в типе указать кол-ов элементов с типами то будет считаться, что массив из
// н элементов с к типами
type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children:React.ReactNode,
    reducers: ReducersList,
    removeAFterUnmount?: boolean
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    const {
        children,
        reducers,
        removeAFterUnmount,
    } = props;
    useEffect(
        () => {

            Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry) => {

                store.ReducerManager.add(name, reducer);
                // выведется при монтировании
                dispatch({ type: `@INIT  ${name} reducer ` });

            });

            return () => {

                if (removeAFterUnmount) {

                    Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry) => {

                        // выведется при размонтировании
                        store.ReducerManager.remove(name);
                        dispatch({ type: `@destroy  ${name} reducer` });

                    });

                }

            };

        },
        // eslint-disable-next-line
    []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );

};

export default DynamicModuleLoader;
