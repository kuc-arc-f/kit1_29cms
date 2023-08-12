<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutAdmin from '$lib/components/LayoutAdmin.svelte';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import ModalComplete from '$lib/components/ModalComplete.svelte';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
import CrudCreate from '../../CrudCreate';

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
		const result = 	await CrudCreate.create(Number(id));
		if(result) {
	//		alert("OK");
			messageModal = "Success, save";
			MicroModal.show('modal-1');		
		}
	} catch (e) {
      console.error(e);
    }
}
//
const okFunction = function () {
//    alert("okFunction");
    window.location.href = `/admin/posts/${id}`;
}
</script>

<!-- MarkUp -->
<LayoutAdmin>
	<div class="container my-2">
		<a href={`/admin/posts/${id}`} class="btn">[ Back ]
		</a>		
		<h1>Create</h1>
		<p>siteId : {id}</p>
		<hr class="my-1" />
		<div class="col-sm-6">
			<label for="title">Title</label>
			<input type="text" id="title" name="title"
			class="form-control" required>		
		</div>
		<hr class="my-1" />
		<div class="col-md-12 form-group">
			<label for="content">Content :</label>
			<textarea id="content" name="content" required class="form-control"
			rows="10" placeholder="markdown input, please"></textarea>
		</div>	
		<hr class="my-1" />
		<button on:click={addPost} class="btn btn-primary my-2">Save</button>
		<!-- modal -->
		<ModalComplete bind:message={messageModal} okFunction={okFunction} />
	</div>
</LayoutAdmin>



