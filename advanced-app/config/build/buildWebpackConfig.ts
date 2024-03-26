import path from 'path';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './BuildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { mode, paths, isDev } = options;
    // isDev используем для автоматичекого подключени того или иного свойства
    return {
        // указываем мод : development или production
        mode,
        // стартовая точка приложения
        // для смены имени фалйа после сборки entry делаем
        // обьектом и название файла указываем как св-во
        // так можно делать если в приложении несколько entry pointов
        // entry: {
        //     RANDOM: path.resolve(__dirname , 'src' , 'index.js'),
        // },
        entry: paths.entry,
        // настройки куда делается сборка и как

        output: {
            // в [] указывается название
            // по дефолту main (меняется в entry)
            // при указании в [name] браузер кэширует и всегда отдает старый файл
            // если указать contenthash то будет добавляться хэш, который решает проблему с хэшированием
            filename: '[name].[contenthash].js',
            path: paths.build,
            // чистит папку build
            clean: true,
        },
        // передаем options так как в buildlugins вытягиваем только
        plugins: buildPlugins(options),
        module: {
            // конфигурируем loader
            rules: buildLoaders(options),
        },
        // при импорте файлов с таким расширением его не нужно указывать
        resolve: buildResolvers(options),
        // для указания где произошла ошибка при сборки в 1 файл
        devtool: isDev ? 'inline-source-map' : undefined,
        // для деврвера
        devServer: isDev ? buildDevServer(options) : undefined,

    };

}
