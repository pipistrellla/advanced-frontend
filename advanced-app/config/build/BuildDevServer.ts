import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({port}: BuildOptions):DevServerConfiguration {

    return {
        port: port,
        open:true,
        historyApiFallback: true,
        // для изменения данных на странице после внесения изменений 
        // без ее перезагрузки
        hot:true,
    }
}