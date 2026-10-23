export function createMatcher(...words: string[]): (input: string) => Boolean;
export function truish(input: string): boolean;
export function falsish(input: string): boolean;
export function indeterminant(input: string): boolean;
declare module "@johnhenry/truish" {
  export { truish, falsish, indeterminant, createMatcher } from "@johnhenry/truish";
  export default truish;
}
