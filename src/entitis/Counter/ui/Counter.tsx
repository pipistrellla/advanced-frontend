import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

interface CounterProps {

}

const Counter: FC<CounterProps> = () => {

    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation('counter');
    const { multiply, decrement, increment } = useCounterActions();

    const handleDecrement = () => {

        decrement();

    };

    const handleIncrement = () => {

        increment();

    };

    const handleMultiply = () => {

        multiply(10);

    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={handleIncrement}
            >
                {t('увеличить')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDecrement}
            >
                {t('уменьшить')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleMultiply}
            >
                {t('умножить на 10')}
            </Button>
        </div>
    );

};

export default Counter;
