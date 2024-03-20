import webpack from 'webpack'
export function buildLoaders(): webpack.RuleSetRule[]  {
    
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

    const CSSLoader = {

        test: /\.s[ac]ss$/i,
        // лоадеры работают сверху вниз
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
        
    }

    return [
        typescriptLoader ,
        CSSLoader,
    ]
}