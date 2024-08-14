import React, { FC } from 'react';

import { Country } from '@/entitis/Country';
import { Currency } from '@/entitis/Currency';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { ProfileCardDeprecated } from './ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from './ProfileCardRedesigned/ProfileCardRedesigned';
import { Profile } from '../../model/types/profile';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeLastname?: (value: string) => void;
    onChangeFirstname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => (
    <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<ProfileCardDeprecated {...props} />}
        on={<ProfileCardRedesigned {...props} />}
    />
);
