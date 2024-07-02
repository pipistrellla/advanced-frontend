import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void

}

export const RatingCard = memo((props: RatingCardProps) => {

    const {
        className,
        feedbackTitle,
        hasFeedback = false,
        title,
        onAccept,
        onCancel,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {

        setStarsCount(selectedStarsCount);
        if (hasFeedback)
            setIsModalOpen(true);
        else
            onAccept?.(selectedStarsCount);

    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {

        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);

    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {

        setIsModalOpen(false);
        onCancel?.(starsCount);

    }, [onCancel, starsCount]);

    const isMobile = useDevice();

    const modalContent = (
        <>
            <Text
                title={feedbackTitle}
            />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack
                align="center"
                gap="8"
            >
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            {isMobile
                ? (
                    <Drawer
                        isOpen={isModalOpen}
                        lazy
                        onClose={cancelHandler}
                    >
                        <VStack
                            gap="32"
                        >
                            {modalContent}
                            <Button
                                fullWidth
                                onClick={acceptHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                )
                : (
                    <Modal
                        isOpen={isModalOpen}
                        lazy
                    >
                        <VStack gap="32" max>
                            {modalContent}
                            <HStack
                                max
                                gap="16"
                                justify="end"
                            >

                                <Button
                                    onClick={cancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Закрыть')}
                                </Button>
                                <Button
                                    onClick={acceptHandler}
                                >
                                    {t('Отправить')}
                                </Button>

                            </HStack>
                        </VStack>
                    </Modal>
                )}

        </Card>
    );

});
