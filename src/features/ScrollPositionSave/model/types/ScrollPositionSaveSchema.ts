// <Адрес старницы , позиция скрола>
export type ScrollSchema = Record<string, number>;

export interface ScrollPositionSaveSchema {
    scroll: ScrollSchema;
}
