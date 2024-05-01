import { t } from 'i18next';
import React, { FC, memo, useCallback } from 'react';
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

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Japanese, content: Country.Japanese },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine }];

const CountrySelect: FC<CountrySelectProps> = memo((props) => {

    const { t } = useTranslation('profile');
    const {
        onChange,
        value,
        readonly,
        className,
    } = props;

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
