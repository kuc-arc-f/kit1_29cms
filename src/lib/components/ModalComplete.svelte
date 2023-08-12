<script lang="ts">
/* モーダル表示後、次のアクションを実行する */
import { onMount } from 'svelte';
import { PUBLIC_SYSTEM_NAME } from '$env/static/public'
const sysName = PUBLIC_SYSTEM_NAME;
//
export let message, okFunction;
console.log("message=", message);

//
onMount(async () => {
});
//
const complete = function () {
    okFunction();
}
</script>

<!-- MarkUp -->
<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
            <h2 class="modal__title" id="modal-1-title">{sysName}
            </h2>
            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
            <p class="fs-5">{message}
            </p>
        </main>
        <footer class="modal__footer">
            <button class="modal__btn modal__btn-primary" on:click={complete}>Continue</button>
        </footer>
        </div>
    </div>
</div>

<style>
</style>
