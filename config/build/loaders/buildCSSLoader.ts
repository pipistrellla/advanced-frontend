import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCSSLoader(isDev:boolean) {

    return {

        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        // лоадеры работают сверху вниз
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader"

            // подключаем загразучик из плагина
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                // для настройки лодера нужно сначало указать, что это лодер, а
                // затем проводить настройку
                loader: 'css-loader',
                options: {
                    // разрешаем modeule.css и проводим настройку
                    modules: {
                        // тут происходит проверка на путь файла (true если есть .module.)
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // тут происходит наименование классов в сборке в
                        // первом случае: путь + название класса + хэш  | хэш
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    },

                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],

    };

}
