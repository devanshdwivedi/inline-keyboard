<script>
    export let key;
    export let isCaps;
    export let clickCallback;
    export let label;
    export let keyType = "defult";
</script>

<div class="key-container-parent {keyType}" on:click={() => clickCallback(key)}>
    {label ? label : isCaps ? key.toUpperCase(): key}
</div>

<style>
    div.key-container-parent {
        display: inline-block;
        cursor: pointer;
        padding: 3px;
        margin: 3px;
        background-color: rgba(255, 255, 255, 0.2);
        width: 50px;
        height: 45px;
        display: inline-flex;
        outline: none;
        align-items: center;
        vertical-align: top;
        border-radius: 4px;
        justify-content: center;
        color: white;
    }
    div.default {
        width: 6%;
        max-width: 90px;
    }
    div.space {
        width: 20%;
        max-width: 300px;
    }
</style>