import { convert } from "./convert";

export function translate(input: string): string;
export function translate(input: string[]): string[];
export function translate(input: Record<string, any>): Record<string, any>;
export function translate(
  input: string | string[] | Record<string, any>
): string | string[] | Record<string, any> {
  if (typeof input === "string") return convert(input);
  if (Array.isArray(input)) return input.map((each) => convert(each));

  if (input) {
    const keys = Object.keys(input);
    if (keys) {
      const newInput: Record<string, any> = {};

      let n: number = keys.length;
      let key: string;
      while (n--) {
        key = keys[n];
        newInput[convert(key)] = input[key];
      }

      return newInput;
    }
  }
}
