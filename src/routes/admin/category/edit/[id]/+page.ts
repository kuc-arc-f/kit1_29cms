export const ssr = false;
import { error } from '@sveltejs/kit';
import HttpCommon from '$lib/HttpCommon';
//
/** @type {import('./$types').PageLoad} */
export async function load({ params}) {
  try{
    console.log("id=", params.id);
    return {
        id: params.id,
    };  
  } catch (e) {
    console.error(e);
    throw new Error('Error , ');
  }
//    throw error(404, 'Not found');
}