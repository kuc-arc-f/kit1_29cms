import LibPagenate from '$lib/LibPagenate';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';
//
const TodoIndex = {
  /**
   *
   * @param page: page number
   * @param perPage: 1 page count
   *
   * @return
   */      
  getPageList : async function(itemsAll: any, page: number, perPage: number) : Promise<any>
  {
    try{
      let items: any = [];
//console.log("page=", page);
//console.log("offset=", offset);
      const pinfo = LibPagenate.getPageStart(page, perPage);
console.log(pinfo);
      items = itemsAll.slice(pinfo.start, pinfo.end);
      return items;
    } catch (e) {
      console.error(e);
    }
  },
  /**
  *
  * @param
  *
  * @return
  */  
  search :async function (): Promise<any>
  {
    try{
      const seachKey = (<HTMLInputElement>document.querySelector("#searchKey")).value;
      const postItem = {
        userId: LibAuth.getUserId(),
        seachKey: seachKey,
      }
console.log(postItem); 
      const json = await HttpCommon.server_post(postItem, "/todos/search");
console.log(json);      
      let items: any[] = [];
      items = json.data;
console.log(items);
      return items;
    } catch (e) {
      console.error(e);
      throw new Error("Error, search");
    } 
  },     
}
export default TodoIndex;
