export function getQueryParams(params: optionalRecord<string, string>) {

    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {

        if (value !== undefined)
            searchParams.set(name, value);

    });

    return `?${searchParams.toString()}`;

}

/**
 * Функция добавления параметров строки в запрос URL
 * @param params
 */

export function addQueryParams(params: optionalRecord<string, string>) {

    // так можно сделать сохранение в строке запроса при отправке ссылки
    window.history.pushState(null, '', getQueryParams(params));

}
