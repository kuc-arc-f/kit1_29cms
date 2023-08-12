<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import ModalComplete from '$lib/components/ModalComplete.svelte';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
/** @type {import('./$types').PageData} */
export let data;
let messageModal = "", id = 0;
id = data.id;
console.log("siteId=", id);
console.log(data);

/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
        //modal
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });		
	} catch (e) {
      console.error(e);
    }	
}
if(typeof(window) !== "undefined"){
	startProc();
}
/**
 * addPost
 * @param
 *
 * @return
 */ 
const addPost = async function () {
	try{
//console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
		const title = document.querySelector<HTMLInputElement>('#title');
		const item = {
			name: title?.value,
			content : "",
			userId:  LibAuth.getUserId(),
			siteId: id,
		}
//console.log(item);
		const json = await HttpCommon.server_post(item, '/category/create');
console.log(json);
		if(json.ret === 'OK') {
			messageModal = "Success, save";
			MicroModal.show('modal-1');
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}
//
const okFunction = function () {
//    alert("okFunction");
    window.location.href = `/admin/category/${id}`;
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/todo`} class="btn">[ Back ]
	</a>		
	<h1>Create</h1>
	<p>siteId : {id}</p>
	<hr />
	<div class="col-sm-6">
		<label for="title">Title</label>
		<input type="text" id="title" name="title"
		class="form-control" required>		
	</div>
	<hr className="mt-2 mb-2" />
	<button on:click={addPost} class="btn btn-primary my-2">Add</button>
	<hr />
	<ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>
