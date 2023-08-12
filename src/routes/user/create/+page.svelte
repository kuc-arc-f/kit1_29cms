<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import { PUBLIC_API_KEY } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
/** @type {import('./$types').PageData} */
export let data;
console.log(data);

/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
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
		const name = document.querySelector<HTMLInputElement>('#name');
		const password = document.querySelector<HTMLInputElement>('#password');
		const email = document.querySelector<HTMLInputElement>('#email');		
		const item = {
			name: name?.value,
			email: email?.value,
			password: password?.value,
			path: "/users/create",
			"api_key": PUBLIC_API_KEY
		}
//console.log(item);
		const body = JSON.stringify(item);		
		const res = await fetch("/api/user/create", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},      
			body: body
		});
		const json = await res.json()
console.log(json);
		if(json.ret === 'OK') {
			goto(`/login`);
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/crud`} class="btn">[ Back ]
	</a>		
	<h1>User Create</h1>
	<hr />
	<div class="col-sm-6">
		<label>Name:</label>
        <input type="text" name="name" id="name" class="form-control"
           />
		<label>Email:
		</label>
		<input type="text" class="form-control" name="email" id="email" />
		<br />
		<label>Password:
		</label>
		<input type="password" class="form-control" name="password" id="password" />		   		
	</div>
	<button on:click={addPost} class="btn btn-primary my-2">Add</button>
	<hr />
</div>
