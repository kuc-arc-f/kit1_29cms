<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import HttpCommon from '$lib/HttpCommon';
//import LibAuth from '$lib/LibAuth';
import { PUBLIC_API_KEY } from '$env/static/public'

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);
/**
 *
 * @param
 *
 * @return
 */ 
 const initProc = async function () {
	try{
	const json = await HttpCommon.server_post({}, "/test/get_list");
console.log(json);
	} catch (e) {
      console.error(e);
      //alert("error, ");
    }
}
if(typeof(window) !== "undefined") {
	initProc();
}

/**
 * addPost
 * @param
 *
 * @return
 */ 
 const addPost = async function () {
	try{
		const name = document.querySelector<HTMLInputElement>('#name');
		let item = {
			"title": "test_create3",
			"body": "b1"
		}		
console.log(item);
		const json = await HttpCommon.server_post(item, '/test/create');
console.log(json);
//	if (json.ret ===  LibConfig.OK_CODE) {
//        ret = true;
//      } 		
//		goto(`/crud`);
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}

</script>

<!-- MarkUp -->
<div class="text-column">
	<h1>Test</h1>
	<hr />
	<button on:click={addPost} class="btn btn-primary my-2">Add
	</button>
</div>

<!--
-->