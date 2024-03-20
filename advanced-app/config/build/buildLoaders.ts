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

    return [
        typescriptLoader ,
    ]
}