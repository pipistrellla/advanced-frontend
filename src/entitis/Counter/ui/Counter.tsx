import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

interface CounterProps {

}

const Counter: FC<CounterProps> = () => {

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation('counter');
    const decrement = () => {

        dispatch(counterActions.decrement());

    };

    const increment = () => {

        dispatch(counterActions.increment());

    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('увеличить')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('уменьшить')}
            </Button>
        </div>
    );

};

export default Counter;
