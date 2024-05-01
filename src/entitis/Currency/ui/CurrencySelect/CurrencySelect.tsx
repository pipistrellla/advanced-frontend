import { t } from 'i18next';
import React, { FC, memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
    className?: string
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.JPY, content: Currency.JPY },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect: FC<CurrencySelectProps> = memo((props:CurrencySelectProps) => {

    const { t } = useTranslation('profile');
    const {
        onChange,
        value,
        readonly,
        className,
    } = props;

    const onChangeHandler = useCallback((value: string) => {

        onChange?.(value as Currency);

    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Ваша валюта')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    );

});

export default CurrencySelect;
