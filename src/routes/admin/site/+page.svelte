<svelte:head>
<title>Crud</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutAdmin from '$lib/components/LayoutAdmin.svelte';
import { goto } from '$app/navigation';
import { EditId, itemId } from './stores';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';
import PaginateBox from "./PaginateBox.svelte";
import ModalShow from "./ModalShow.svelte";
import ModalEdit from "./ModalEdit.svelte";
import TodoIndex from "./TodoIndex";

/** @type {import('./$types').PageData} */
export let data: any;
let itemPage = 1, items = [], itemsAll = [], perPage: number = 10;
//
items = data.items;
console.log(data);
/**
* start proc
* @param
*
* @return
*/ 
const startProc = async function () {
    try {
        itemId.update(n => 0);
        EditId.update(n => 0);
        const postItem = {
            userId: LibAuth.getUserId(),
        }		
console.log(postItem);  
        const json = await HttpCommon.server_post(postItem, "/sites/get_list");
console.log(json);  
        itemsAll = json.data;
        items = await TodoIndex.getPageList(itemsAll, itemPage, perPage);		
    } catch (e) {
        console.error(e);
    }	
}
console.log("#start: /test");
startProc();
//
const search = async function() {
    console.log("search");
    itemsAll = await TodoIndex.search();
    items = await TodoIndex.getPageList(itemsAll, itemPage, perPage);
console.log(items);
}
//
const clearSearch = async function() {
//    console.log("search");
  itemPage = 1;
  const seachKey = (<HTMLInputElement>document.querySelector("#searchKey"));
  seachKey.value = "";
  startProc();
}
/**
* parentUpdateList
* @param
*
* @return
*/ 
const parentUpdateList = async function(page: number) {
  console.log("parentUpdateList=", page);
  itemPage = page;
  items = await TodoIndex.getPageList(itemsAll, page, perPage);
  console.log(items);
}
/**
*
* @param
*
* @return
*/ 
const showItem = async function (id: number) {
console.log("id=",id);
  itemId.update(n => 0);
  itemId.update(n => id);
}
/**
*
* @param
*
* @return
*/
const editItem = async function (id: number) {
console.log("id=",id);
  EditId.update(n => 0);
  EditId.update(n => id);
}
</script>

<!-- MarkUp -->
<LayoutAdmin>
    <div class="container my-2">
        <div class="row">
            <div class="col-md-6">
                <h1>Site</h1>
            </div>
            <div class="col-md-6 text-end">
                <a href={`/admin/site/create`} class="btn btn-primary">Create</a>
            </div>
        </div>
        <hr />
        {#each items as item}
        <div>
            <a href={`/admin/posts/${item.id}`}  ><h3>{item.name}</h3>
            </a> 
            <span class="mx-2">ID : {item.id}</span>
            <a href={`/admin/category/${item.id}`} class="btn btn-sm btn-outline-primary mx-2">Category
            </a> 
            <hr class="my-1" />
        </div>
        {/each}	
        <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />
        <hr />
        <ModalShow />
        <ModalEdit />
    </div>
</LayoutAdmin>

<!-- 
<a href="#" on:click={editItem(item.id)} class="btn btn-sm btn-outline-primary mx-2"
>Edit
</a>					
-->
