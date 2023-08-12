<svelte:head>
<title>Crud</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutAdmin from '$lib/components/LayoutAdmin.svelte';
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
import { page } from '$app/stores'

/** @type {import('./$types').PageData} */
export let data: any, userId = 0;
userId = LibAuth.getUserId();
console.log("userId=", userId);

</script>

<!-- MarkUp -->
<LayoutAdmin>
    <div class="container my-2">
    userId: {userId}
    <hr />
    <h3>admin</h3>
    </div>

</LayoutAdmin>


<!-- 
-->
