<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutBasic from '$lib/components/LayoutBasic.svelte';
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
//console.log(data.item);
const createdAt = LibCommon.converDateString(data.item.createdAt);
//console.log(createdAt);
content = data.item.content;
content = marked.parse(content);
//console.log(content);

</script>

<!-- MarkUp -->
<LayoutBasic>
    <div class="container mb-4 post_show_wrap">
        <h1>{data.item.title}</h1>
        <p>{createdAt}, ID: {data.item.id}</p>
        <hr />
        <div class="post_item">{@html content}</div>
    </div>
</LayoutBasic>

<!-- CSS -->
<style>
</style>

<!--
<hr />
<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
-->
