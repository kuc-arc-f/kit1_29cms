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
let messageModal = "";
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
		}
//console.log(item);
		const json = await HttpCommon.server_post(item, '/sites/create');
console.log(json);
		if(json.ret === 'OK') {
			messageModal = "Success, Save";
			MicroModal.show('modal-1');
//			goto(`/todo`);
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}
//
const okFunction = function () {
//    alert("okFunction");
    window.location.href = '/admin/site';
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/todo`} class="btn">[ Back ]
	</a>		
	<h1>Site Create</h1>
	<hr />
	<div class="col-sm-6">
		<label for="title">Name:</label>
		<input type="text" id="title" name="title"
		class="form-control" required>		
	</div>
	<hr className="mt-2 mb-2" />
	<button on:click={addPost} class="btn btn-primary my-2">Create</button>
	<hr />
	<ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>

<!--
	<hr className="mt-2 mb-2" />
	<div className="col-md-6 form-group">
		<label for="content">内容</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="markdown input, please"></textarea>
	</div>
-->
