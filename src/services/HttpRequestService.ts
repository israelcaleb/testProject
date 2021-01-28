import axios, { AxiosRequestConfig } from 'axios';

export abstract class HttpRequest {
    protected async get<T>(url: string, configuration?: any) {
        const options = await this._resolveHeaders(configuration);
        return axios.get<T>(url, options);
    }

    protected abstract  getHeaders(): Promise<any>;

    private async _resolveHeaders(conf: any): Promise<any> {

        const newHeaders = await this.getHeaders();

        if (!newHeaders) { return conf; } // no additional header was provided

        let newConf;

        if (conf) {

            // create a copy of original object
            newConf = Object.assign({}, conf);

            if (conf.headers) {
                // original object has headers, merge it
                newConf.headers = Object.assign({}, conf.headers, newHeaders);
            } else {
                newConf.headers = newHeaders;
            }
        } else {
            newConf = { headers: newHeaders };
        }

        return newConf;
    }

}