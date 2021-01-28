export interface ListItem {
    key: string,
    createdAt: number,
    title: string,
    details: string,
}

export type Dictionary<T> = {[key: string]: T};