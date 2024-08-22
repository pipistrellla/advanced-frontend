import { memo } from 'react';

import ScrollImg from '@/shared/assets/icons/circle-up.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={ScrollImg}
            width={32}
            height={32}
            clickable
            onClick={onClick}
            className={classNames('', {}, [className])}
        >
            123
        </Icon>
    );
});
