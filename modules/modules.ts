export interface Validator{
    isValid(s: string): boolean
}

// or export { Validator as StringValidator };

/** exporting and importing types */
export type alphanumeric = string | number;
