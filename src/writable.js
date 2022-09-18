import {writable} from 'svelte/store'
import {data} from './store'

const average = 1 / data.length;

export const taskAverage = writable(average);
export const progress = writable(0);