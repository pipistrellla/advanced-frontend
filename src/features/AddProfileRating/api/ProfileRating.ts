import { Rating } from '@/entitis/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetUserRatingArg {
    userId: string;
    ProfileId: string;
}

interface RateUserArg {
    userId: string;
    ProfileId: string;
    rate: number;
    feedback?: string;
}

const ProfileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetUserRatingArg>({
            query: ({ ProfileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    ProfileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateUserArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = ProfileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = ProfileRatingApi.useRateProfileMutation;
