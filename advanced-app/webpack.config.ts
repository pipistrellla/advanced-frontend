import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';
import path from "path";


export default (env: BuildEnv) => {
    // вынесли отдельно пути для удобного изменения их
    const paths: BuildPath = {

        entry: path.resolve(__dirname , 'src' , 'index.tsx'),
        build: path.resolve(__dirname , 'build'),
        html: path.resolve(__dirname, 'public' , 'index.html') ,
    }
    // другие переменные
    const PORT  = env.port || 3000
    const mode = env.mode || 'development'
    // для автоматизации isDev
    const isDev = mode === 'development'
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT,
    
    })
    return config
}