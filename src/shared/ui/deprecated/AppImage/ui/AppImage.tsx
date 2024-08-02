import React, {
    FC,
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}
/**
 * компонент устарел
 * @deprecated
 */

export const AppImage: FC<AppImageProps> = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        errorFallback,
        src,
        alt = 'img',
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [hasError, setHasError] = useState<boolean>(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img className={className} src={src} alt={alt} {...otherProps} />;
});
