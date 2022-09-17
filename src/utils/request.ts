import service from "./service"

export default {
    get(url: string, config = {}) {
        return new Promise((resolve, reject) => {
            service
                .get(
                    url,
                    config || {}
                )
                .then(({ data }: any) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    post(url: string, options: any = {}) {
        let { data } = options;
        let { config } = options;
        return new Promise((resolve, reject) => {
            service
                .post(
                    url,
                    data,
                    config || {}
                )
                .then(({ data }: any) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
}