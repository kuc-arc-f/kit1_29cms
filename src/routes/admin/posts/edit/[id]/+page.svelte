<svelte:head>
	<title>Edit</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import CrudEdit from '../../CrudEdit';
import HttpCommon from '$lib/HttpCommon';
import ModalComplete from '$lib/components/ModalComplete.svelte';

/** @type {import('./$types').PageData} */
export let data: any;
let messageModal = "", id= 0, item = {title: "", content: ""}, site:any = {};
console.log(data);
id= Number(data.id);
console.log("id=", id);

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
		item = await CrudEdit.get(id);
console.log(item);
	} catch (e) {
      console.error(e);
    }	
}
startProc();
/**
 * savePost
 * @param
 *
 * @return
 */ 
const savePost = async function () {
	try {
		const resulte = await CrudEdit.update(id);
		if(!resulte){
			throw new Error('Error , update');
		} else {
			messageModal = "Success, save";
			MicroModal.show('modal-1');			
		}
	} catch (error) {
		console.error(error);
	} 
}
/**
 * deleteItem
 * @param
 *
 * @return
 */ 
 async function deleteItem(){
	try {
		const resulte = await CrudEdit.delete(id);
//console.log(resulte);
        if(!resulte) {
            throw new Error("Error, delete");
        } else {
			messageModal = "Success, delete";
			MicroModal.show('modal-1');	
        }
	} catch (error) {
	    console.error(error);
	}
}
//
const okFunction = function () {
//    window.location.href = '/todo';
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/admin/posts/${id}`} class="btn">[ Back ]
	</a>		
	<h1>Edit</h1>
	ID: {data.id}
	<hr />
	<div class="col-sm-6">
		<label>Name:</label>
        <input type="text" name="title" id="title" class="form-control"
		 value= {item.title}  />		
	</div>
	<hr class="my-1" />
	<div class="col-md-12 form-group">
		<label for="content">Content :</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="markdown input, please">{item.content}</textarea>
	</div>	
	<hr class="my-1" />
	<button on:click={savePost} class="btn btn-primary my-0">Save</button>
    <hr class="my-1" />
    <button on:click={deleteItem} class="btn btn-danger my-0">Delete</button>	
	<hr />
	<ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>
<!--
-->