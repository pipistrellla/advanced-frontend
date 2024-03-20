import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

// передаем options поэтому вытягиваем только paths
export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        // откуда берется HTML
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        // оюраюотка файлов для css
        new MiniCssExtractPlugin({
            // куда сохранятся будет + настройка его имени
            filename: 'css/[name].[contenthash:8].css',
            // для ассинхронного
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),

    ]
}