import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import { RatingCardProps } from '../RatingCard';

export const RatingCardRedesigned = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback = false,
        title,
        rate = 0,
        comment,
        onAccept,
        onCancel,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);

            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

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
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card
            border="round"
            padding="24"
            data-testid="RatingCard"
            max
            className={classNames('', {}, [className])}
        >
            <VStack align="center" gap="8" max>
                <Text
                    title={starsCount ? (comment ?? t('Ваш отзыв')) : title}
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandler}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                onClick={cancelHandler}
                                variant="outline"
                                data-testid="RatingCard.Close"
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
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
