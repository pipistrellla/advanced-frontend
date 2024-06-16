import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

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
