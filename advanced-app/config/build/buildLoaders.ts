import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[]  {
    
    // порядок loaderов важен, поэтому легче выносить их в переменные, чтобы было нагляднее видно 
    // если используем не ts нужно подключать еще bebel-loader
    const typescriptLoader = {
        // находим файлы по расширениям через регулярное выражение
        test: /\.tsx?$/,
        // укзываем loader для файлов
        use: 'ts-loader',
        // указываем какую папку не проверям
        exclude: /node_modules/,
    }

    const babelLoader ={
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    ["i18next-extract", 
                        {
                            locales: ['ru' , 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ],
            }
        }
    }

    const CSSLoader = {

        test: /\.s[ac]ss$/i,
        // лоадеры работают сверху вниз
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader"
            
            //подключаем загразучик из плагина 
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                // для настройки лодера нужно сначало указать, что это лодер, а
                // затем проводить настройку
                loader: "css-loader",
                options: {
                    // разрешаем modeule.css и проводим настройку
                    modules: {
                        // тут происходит проверка на путь файла (true если есть .module.)
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // тут происходит наименование классов в сборке в 
                        // первом случае: путь + название класса + хэш  | хэш
                        localIdentName: isDev 
                        ? '[path][name]__[local]--[hash:base64:8]' 
                        :  '[hash:base64:8]'
                    },

                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
        
    }
    // svgLoader преобразовывает svg в реакт компонент
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    // расширение woff2 и woff под шрифты
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader, 
        typescriptLoader ,
        CSSLoader,
    ]
}