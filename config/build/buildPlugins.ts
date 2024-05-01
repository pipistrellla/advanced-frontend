import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// передаем options поэтому вытягиваем только paths
export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {

    const {
        isDev,
        paths,
        apiUrl,
        project,
    } = options;

    const plugins = [
        // откуда берется HTML
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        // оюраюотка файлов для css
        new MiniCssExtractPlugin({
            // куда сохранятся будет + настройка его имени
            filename: 'css/[name].[contenthash:8].css',
            // для ассинхронного
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),

    ];
    if (isDev) {

        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));

    }
    return plugins;

}
