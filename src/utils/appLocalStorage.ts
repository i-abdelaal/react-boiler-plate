export const appLocalStorage = {
    set:(key: string, value: any) => localStorage.setItem(key, value),
    get: (key:string) => localStorage.getItem(key)
};