export const ssr = false;

import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import LibAuth from '$lib/LibAuth';
import LibConfig from '$lib/LibConfig';
//import LibDbSession from '$lib/LibDbSession';
//import { PUBLIC_API_URL } from '$env/static/public'
//import HttpCommon from '$lib/HttpCommon';

//type
type TPostItem = {
  id: number,
  title: string,
  content: string,
  createdAt: string,
  categoryName: string, 
}
//
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let items = [];
    return {
      items: [],
    };
}
