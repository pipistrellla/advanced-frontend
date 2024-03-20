import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
    // указываем мод : development или production
    mode: 'development',
    // стартовая точка приложения
    // для смены имени фалйа после сборки entry делаем 
    // обьектом и название файла указываем как св-во
    // так можно делать если в приложении несколько entry pointов 
    // entry: {
    //     RANDOM: path.resolve(__dirname , 'src' , 'index.js'),
    // },
    entry: path.resolve(__dirname , 'src' , 'index.ts'),
    // настройки куда делается сборка и как

    output: {
        // в [] указывается название
        // по дефолту main (меняется в entry)
        // при указании в [name] браузер кэширует и всегда отдает старый файл
        // если указать contenthash то будет добавляться хэш, который решает проблему с хэшированием
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname , 'build'),
        // чистит папку build
        clean: true
    }, 
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public' , 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        // конфигурируем loader
        rules: [
            {
                // находим файлы по расширениям через регулярное выражение
                test: /\.tsx?$/,
                // укзываем loader для файлов
                use: 'ts-loader',
                // указываем какую папку не проверям
                exclude: /node_modules/,
            },
        ],
    },
        // при импорте файлов с таким расширением его не нужно указывать
    resolve: {
            extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config