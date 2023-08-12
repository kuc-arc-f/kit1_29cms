// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = false;

import { error } from '@sveltejs/kit';
import { PUBLIC_SITE_ID } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
//
/** @type {import('./$types').PageLoad} */
export async function load({ params}) {
  try{
      const postItem = {
        siteId: Number(PUBLIC_SITE_ID),
      }		
console.log(postItem); 
        const json = await HttpCommon.server_post(postItem, "/posts/get_list");
        const items = json.data;    
    return {
        id: 0,
        items: items,
    };  
  } catch (e) {
    console.error(e);
    throw new Error('Error , ');
  }
//    throw error(404, 'Not found');
}