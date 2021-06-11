<script>
    export let key = null;
    export let isCaps = false;
    export let clickCallback;
    export let autoFocusCallback = null;
    export let label = "";
    export let keyType = "defult";

    let handleClick = function() {
        clickCallback(key);
        if(autoFocusCallback){
            autoFocusCallback();
        }
    }
</script>

<div class="key-container-parent {keyType}" on:click={handleClick}>
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
        border-radius: 4px;
        display: inline-flex;
        outline: none;
        align-items: center;
        vertical-align: top;
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
    div.medium {
        width: 10%;
        max-width: 150px;
    }
</style>