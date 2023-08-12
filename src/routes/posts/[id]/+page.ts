export const csr = false;

import { error } from '@sveltejs/kit';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';

//
/** @type {import('./$types').PageLoad} */
export async function load({ params}) {
  try{
    console.log("id=", params.id);
    let postItem: any = {
      "id": params.id
    }; 
    const json = await HttpCommon.server_post(postItem, "/posts/get");
//console.log(json.data);

    return {
        id: params.id,
        item: json.data,
    };  
  } catch (e) {
    console.error(e);
    throw new Error('Error , ');
  }
//    throw error(404, 'Not found');
}
/*
*/