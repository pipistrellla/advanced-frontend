import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPath } from './config/build/types/config';
import path from "path";

const paths: BuildPath = {

    entry: path.resolve(__dirname , 'src' , 'index.ts'),
    build: path.resolve(__dirname , 'build'),
    html: path.resolve(__dirname, 'public' , 'index.html') ,
}

const mode = 'development'
// для автоматизации isDev
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: isDev

})

export default config