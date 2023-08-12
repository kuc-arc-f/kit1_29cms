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
    let postItem: any = {
      "id": params.id
    }; 
    const json = await HttpCommon.server_post(postItem, "/todos/get");
console.log(json);
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