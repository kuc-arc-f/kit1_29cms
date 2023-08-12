export const ssr = false;

import { error } from '@sveltejs/kit';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';
//type
type IPostItem = {
  id: number,
  title : string,
  content : string,
  category : string,
  createdAt: string,
}
//
/** @type {import('./$types').PageLoad} */
export async function load({ params}) {
  try{
    console.log("id=", params.id);
    return {
        id: params.id,
        item: {},
    };  
  } catch (e) {
    console.error(e);
    throw new Error('Error , ');
  }
//    throw error(404, 'Not found');
}
/*
*/