import Crud from './Crud';
import LibConfig from '$lib/LibConfig';
import HttpCommon from '$lib/HttpCommon';
import LibAuth from '$lib/LibAuth';
//
const CrudCreate = {
    /**
     *
     * @param
     *
     * @return
     */ 
    create : async function(siteId: number) : Promise<any>
    {
        try{
            let ret = false;
            let values = Crud.getInputValues();  
            values.siteId = siteId;
            values.categoryId = 0;
            values.userId = LibAuth.getUserId();
//console.log(values);
            const json = await HttpCommon.server_post(values, '/posts/create');
            console.log(json);
            if (json.ret ===  LibConfig.OK_CODE) {
                ret = true;
            } 
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , create');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */ 
    update : async function() : Promise<any>
    {
        try{
            let ret = false;
            const elm: any = document.querySelector('#item_id');
            const id = elm?.value;  
            let values = Crud.getInputValues();  
            values.id = Number(id);
        console.log(values);
            const json = await HttpCommon.server_post(values, '/todos/update');
            console.log(json);
            if (json.ret ===  LibConfig.OK_CODE) {
            ret = true;
            } 
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , update');
        }
    },

}

export default CrudCreate;
