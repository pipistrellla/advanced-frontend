import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({ paths }:BuildOptions): webpack.ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        // говорим, что берем в приоретет абсолютные импорты
        preferAbsolute: true,
        // указываем путь до node_moduls
        modules: [paths.src, 'node_modules'],
        // указываем замену пути (то что ставиться в начале)
        alias: {
            '@': paths.src,
        },
        // для кажддого модуля главный файл - индекс
        // (грубо говоря куда мы все импорты записываем)
        mainFiles: ['index'],
    };

}
