import {digits} from "./digits.ts";

export function makeCluster() {
    return digits.map(() => [])
}