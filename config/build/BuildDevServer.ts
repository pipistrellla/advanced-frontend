import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions):DevServerConfiguration {

    return {
        port,
        open: true,
        historyApiFallback: true,
        // для изменения данных на странице после внесения изменений
        // без ее перезагрузки
        hot: true,
    };

}
