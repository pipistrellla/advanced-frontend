import { t } from 'i18next';
import React, {
    FC, memo, useCallback, useMemo,
} from 'react';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
    className?: string
}

const CountrySelect: FC<CountrySelectProps> = memo((props) => {

    const { t } = useTranslation('profile');
    const {
        onChange,
        value,
        readonly,
        className,
    } = props;

    const options = useMemo(
        () => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })),
        [],
    );

    const onChangeHandler = useCallback((value: string) => {

        onChange?.(value as Country);

    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Ваша страна')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    );

});

export default CountrySelect;
