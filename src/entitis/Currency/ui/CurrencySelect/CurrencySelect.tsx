import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
    className?: string
}

const CurrencySelect: FC<CurrencySelectProps> = memo((props:CurrencySelectProps) => {

    const { t } = useTranslation('profile');
    const {
        onChange,
        value,
        readonly,
        className,
    } = props;

    const options = useMemo(
        () => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })),
        [],
    );

    const onChangeHandler = useCallback((value: string) => {

        onChange?.(value as Currency);

    }, [onChange]);

    return (

        <ListBox
            readonly={readonly}
            className={className}
            defaultValue={t('Укажите валюту')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            label={t('Ваша валюта')}
            direction="top right"
        />

    // <Select
    //     className={classNames('', {}, [className])}
    //     label={t('Ваша валюта')}
    //     options={options}
    //     value={value}
    //     onChange={onChangeHandler}
    //     readonly={readonly}
    // />

    );

});

export default CurrencySelect;
