<script>
import HeaderAdmin from './HeaderAdmin.svelte';

//import { page } from '$app/stores'
//const pathname = $page.data.pathname;
//console.log("pathname=", pathname);
</script>

<!-- MarkUp -->
<div>
	<HeaderAdmin />
	<hr />
	<div>
		<slot />
	</div>
	<div>
		<hr />
		Footer
	</div>
</div>

<!--
	<h3>[ Admin Layout ]</h3>
-->
