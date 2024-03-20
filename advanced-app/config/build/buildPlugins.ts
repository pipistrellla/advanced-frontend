import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

// передаем options поэтому вытягиваем только paths
export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        // откуда берется HTML
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}