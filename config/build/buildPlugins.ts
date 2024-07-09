import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
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
        // обработка файлов для css
        new MiniCssExtractPlugin({
            // куда сохранятся будет + настройка его имени
            filename: 'css/[name].[contenthash:8].css',
            // для асинхронного
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        // перенос из одной папки в другую при билде
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.build },

            ],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),

    ];
    if (isDev) {

        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));

    }
    return plugins;

}
