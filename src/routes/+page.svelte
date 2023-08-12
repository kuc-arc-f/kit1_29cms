<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script lang="ts">
import LayoutBasic from '$lib/components/LayoutBasic.svelte';
import HttpCommon from '$lib/HttpCommon';
import { PUBLIC_SITE_ID } from '$env/static/public'

/** @type {import('./$types').PageData} */
export let data: any, items: any[] = [];
//console.log("PUBLIC_SITE_ID=", PUBLIC_SITE_ID);
//console.log(data);
items = data.items;
//console.log(items);  
</script>

<!-- MarkUp -->
<LayoutBasic>
    <div class="container">
        <h1>SvelteKit app</h1>
        <hr />
        {#each items as item}
        <div>
            <a href={`/posts/${item.id}`}  class=""
            ><h3>{item.title}</h3>
            </a>		
            <span class="mx-2">ID : {item.id}</span>
            <hr class="my-1" />
        </div>
        {/each}
    </div>
</LayoutBasic>

<style>
</style>

<!--
            <a href={`/admin/posts/edit/${item.id}`}  class="btn btn-sm btn-outline-primary mx-2"
            >Edit
            </a>					
-->
