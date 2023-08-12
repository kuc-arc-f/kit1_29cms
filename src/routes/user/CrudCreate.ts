import LibConfig from '../../lib/LibConfig';
import Crud from './Crud';
import HttpCommon from '../../lib/HttpCommon';
import LibCookie from '../../lib/LibCookie';
//
const CrudCreate = {

  /**
   * addItem:
   * @param key: any
   *
   * @return
   */
  addItem : async function() : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();
      const key = LibConfig.COOKIE_KEY_AUTH;
      const auth = LibCookie.get_cookie(key);
      if(!auth) {
        throw new Error('Error , addItem cookie nothing.');
      }
      values.userId = auth;
//console.log("auth=", auth);
//console.log(values);
      const json = await HttpCommon.server_post(values, '/todos/create');
console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      } 
      return ret;
    } catch (e) {
      console.error("Error, addItem");
      console.error(e);
      throw new Error('Error , addItem');
    }
  },  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      //btn
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click', async () => {
        const result = await this.addItem();
        console.log("result=", result);
        if(result === true) {
          window.location.href = '/todo';
        }
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
CrudCreate.startProc();

export default CrudCreate;
