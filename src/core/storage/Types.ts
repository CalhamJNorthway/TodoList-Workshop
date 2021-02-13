
export interface ICookieManager {
    getAll(): any;
    getByKey<T>(key: CookieKeys): T;
    set<T>(key: CookieKeys, value: T): CookieResponse;
    remove(key: CookieKeys): CookieResponse;
}

export enum CookieResponse {
    SUCCESS = "success",
    FAILURE = "failure",
}

export enum CookieKeys {
    TASK_LIST = "taskList",
}