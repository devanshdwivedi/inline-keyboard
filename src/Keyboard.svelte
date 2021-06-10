<script>
    import Key from './Key.svelte';

    export let isCapsEnabled;
    export let addCallback;
    export let toggleCapsCallback;
</script>

<div class="keyboard-container-parent">
    <div class="keyboard-row">
        <Key clickCallback={addCallback} key={"1"}/>
        <Key clickCallback={addCallback} key={"2"}/>
        <Key clickCallback={addCallback} key={"3"}/>
        <Key clickCallback={addCallback} key={"4"}/>
        <Key clickCallback={addCallback} key={"5"}/>
        <Key clickCallback={addCallback} key={"6"}/>
        <Key clickCallback={addCallback} key={"7"}/>
        <Key clickCallback={addCallback} key={"8"}/>
        <Key clickCallback={addCallback} key={"9"}/>
        <Key clickCallback={addCallback} key={"0"}/>
    </div>
    <div class="keyboard-row">
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"q"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"w"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"e"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"r"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"t"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"y"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"u"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"i"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"o"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"p"}/>
    </div>
    <div class="keyboard-row">
        <Key clickCallback={toggleCapsCallback} key={"Caps"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"a"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"s"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"d"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"f"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"g"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"h"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"j"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"k"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"l"}/>
    </div>
    <div class="keyboard-row">
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"z"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"x"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"c"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"v"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"b"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"n"}/>
        <Key isCaps={isCapsEnabled} clickCallback={addCallback} key={"m"}/>
    </div>
    <div class="keyboard-row">
        <Key keyType={'space'} isCaps={isCapsEnabled} clickCallback={addCallback} label={"Space"} key={" "}/>
    </div>
</div>

<style>
    div.keyboard-container-parent{
        height: 100%;
        background-color: #004134;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    div.keyboard-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>