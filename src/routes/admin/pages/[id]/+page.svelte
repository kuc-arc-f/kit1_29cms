<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutAdmin from '$lib/components/LayoutAdmin.svelte';
import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", items: any[] = [];
let id = Number(data.id);
//
console.log("[id=", data.id);

/**
* start proc
* @param
*
* @return
*/ 
const startProc = async function () {
    try {
        const postItem = {
            siteId: Number(data.id),
        }		
        const json = await HttpCommon.server_post(postItem, "/category/get_list");
        items = json.data;
console.log(items);  
    } catch (e) {
        console.error(e);
    }	
}
console.log("#start: /test");
startProc();
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<LayoutAdmin>
    <div class="container mb-4">
        <div class="row">
        <div class="col-md-6">
            <h1>Pages</h1>
        </div>
        <div class="col-md-6 text-end">
            <a href={`/admin/category/create/${id}`} class="btn btn-primary">Create</a>
        </div>
        </div>
        <hr />
        {#each items as item}
        <div>
            <h3>{item.name}</h3>
            <span class="mx-2">ID : {item.id}</span>
            <a href={`/admin/category/edit/${item.id}`}  class="btn btn-sm btn-outline-primary mx-2"
            >Edit
            </a>					
            <hr class="my-1" />
        </div>
        {/each}    
    </div>
</LayoutAdmin>


<!--
<hr />
<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
-->
