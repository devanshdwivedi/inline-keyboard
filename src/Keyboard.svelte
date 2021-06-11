<script>
    import Key from './Key.svelte';

    export let autoFocusCallback;
    export let isCapsEnabled;
    export let addCallback;
    export let toggleCapsCallback;
    export let backspaceCallback;
    export let enterCallback;
</script>

<div class="keyboard-container-parent">
    <div class="keyboard-row">
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"1"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"2"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"3"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"4"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"5"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"6"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"7"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"8"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"9"}/>
        <Key autoFocusCallback={autoFocusCallback} clickCallback={addCallback} key={"0"}/>
        <Key autoFocusCallback={autoFocusCallback} keyType={'medium'} label={'Bkspc'} clickCallback={backspaceCallback} />
    </div>
    <div class="keyboard-row">
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"q"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"w"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"e"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"r"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"t"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"y"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"u"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"i"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"o"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"p"}/>
    </div>
    <div class="keyboard-row">
        <Key keyType={'medium'} clickCallback={toggleCapsCallback} label={"Caps"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"a"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"s"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"d"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"f"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"g"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"h"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"j"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"k"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"l"}/>
        <Key autoFocusCallback={autoFocusCallback} keyType={'medium'} clickCallback={enterCallback} label={"Enter"}/>
    </div>
    <div class="keyboard-row">
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"z"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"x"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"c"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"v"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"b"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"n"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"m"}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={","}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"."}/>
        <Key autoFocusCallback={autoFocusCallback} isCaps={isCapsEnabled} clickCallback={addCallback} key={"?"}/>
    </div>
    <div class="keyboard-row">
        <Key autoFocusCallback={autoFocusCallback} keyType={'space'} isCaps={isCapsEnabled} clickCallback={addCallback} label={"Space"} key={" "}/>
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