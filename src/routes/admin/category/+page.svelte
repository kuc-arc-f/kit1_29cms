<svelte:head>
<title>Crud</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
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
//let itemId: number = 0;
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
        const json = await HttpCommon.server_post(postItem, "/todos/get_list");
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
<div class="container my-2">
    <div class="row">
      <div class="col-md-6">
        <h1>Todo</h1>
        <p>markdown display possible.</p>
      </div>
      <div class="col-md-6 text-end">
        <a href={`/todo/create`} class="btn btn-primary">Create</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-end">
        <button class="btn btn-sm btn-outline-primary"  on:click={clearSearch}
        >Clear</button>
        <span class="search_key_wrap">
          <input type="text" size="24" class="mx-2" name="searchKey" id="searchKey"
           placeholder="Title search">
        </span>
        <button class="btn btn-sm btn-outline-primary" on:click={search}>Search</button>      
      </div>
    </div>     
    <hr />
    {#each items as item}
    <div>
        <a href="#" on:click={showItem(item.id)} ><h3>{item.title}</h3>
        </a> 
        <span class="mx-2">ID : {item.id}</span>
        <a href="#" on:click={editItem(item.id)} class="btn btn-sm btn-outline-primary mx-2"
          >Edit
        </a>					
        <hr class="my-1" />
    </div>
    {/each}	
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />
    <hr />
    <ModalShow />
    <ModalEdit />
</div>

<!-- 
        <a href={`/todo/edit/${item.id}`} class="btn btn-sm btn-outline-primary mx-2">Edit
        </a>					

<a href="#" on:click={showItem(item.id)} ><h3>{item.title}</h3>
</a>     
-->
