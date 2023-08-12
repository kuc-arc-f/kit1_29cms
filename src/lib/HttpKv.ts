import LibConfig from './LibConfig';
import { PUBLIC_KV_URL } from '$env/static/public'
import { PUBLIC_KV_KEY } from '$env/static/public'
//
const HttpKv = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  post: async function(item: any, path: string): Promise<any>
  {
    try {
      const url = PUBLIC_KV_URL;
      const apiKey = PUBLIC_KV_KEY;
//console.log("#getList.apiKey=" + apiKey);
      item.api_key = apiKey;
      const body: any = JSON.stringify(item);		
      const res = await fetch(url + path, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
console.log(json);   
      if (res.status !== 200) {
        console.error("error, status <> 200");
        throw new Error(await res.text());
      }
      if (json.ret !==  LibConfig.OK_CODE) {
        console.error("Error, json.ret <> OK");
        return {};
      } 
      return json;
    } catch (e) {
      console.error(e);
      throw new Error('Error , post');
    }
  }, 
  /**
  * 
  * @param
  *
  * @return
  */ 
  server_post: async function(item: any, path: string): Promise<any>
  {
    try {
      const apiKey = PUBLIC_KV_KEY;
      item.api_key = apiKey;
      item.path = path;
//console.log(item);
      const body: any = JSON.stringify(item);	
//console.log(body);
      const res = await fetch("/api/api_kv", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
//console.log(json);   
      if (res.status !== 200) {
        throw new Error(await res.text());
      }
      if (json.ret !==  LibConfig.OK_CODE) {
        console.error("Error, json.ret <> OK");   
      } 
      return json;
    } catch (e) {
      console.error(e);
      throw new Error('Error , post');
    }
  },  
}
export default HttpKv;
