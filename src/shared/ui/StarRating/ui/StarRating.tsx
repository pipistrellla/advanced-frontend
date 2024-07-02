import { FC, memo, useState } from 'react';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import StarIcon from '../../../assets/icons/star.svg';
import { Icon } from '../../Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void
    size?: number;
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props: StarRatingProps) => {

    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [currentStarCount, setCurrentStarCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {

        if (!isSelected)
            setCurrentStarCount(starsCount);

    };

    const onLeave = () => {

        if (!isSelected)
            setCurrentStarCount(0);

    };

    const onCLick = (starsCount: number) => () => {

        if (!isSelected) {

            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);

        }

    };

    const mods = {
        [cls.selected]: isSelected,
    };

    return (
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        mods,
                        [
                            currentStarCount >= starNumber ? cls.hovered : cls.normal,
                        ],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    isStroke
                    isInverted
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onCLick(starNumber)}
                />
            )) }
        </div>
    );

});
