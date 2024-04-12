import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    // порядок loaderов важен, поэтому легче выносить их в переменные, чтобы было нагляднее видно
    // если используем не ts нужно подключать еще bebel-loader
    const typescriptLoader = {
        // находим файлы по расширениям через регулярное выражение
        test: /\.tsx?$/,
        // укзываем loader для файлов
        use: 'ts-loader',
        // указываем какую папку не проверям
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const CSSLoader = buildCSSLoader(isDev);
    // svgLoader преобразовывает svg в реакт компонент
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // расширение woff2 и woff под шрифты
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        CSSLoader,
    ];

}
