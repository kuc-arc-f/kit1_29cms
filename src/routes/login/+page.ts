export const ssr = false;

import { error } from '@sveltejs/kit';
import LibDbSession from '$lib/LibDbSession';
import LibConfig from '$lib/LibConfig';
//export const prerender = false;

//
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {
    };  
//    throw error(404, 'Not found');
}
