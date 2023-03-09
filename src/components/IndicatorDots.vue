<template>
    <div class="indicators">
        <div class="indicator-dot active"></div>
        <div class="indicator-dot"></div>
        <div class="indicator-dot"></div>
        <div class="indicator-dot"></div>
    </div>
</template>

<script setup>

</script>

<style>
    .indicators{
        position:fixed;
        left: 5%;
        top: 50%;
        transform:translate(-5%, -50%);
        height: 50vh;
        width: 40px;
        display:flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items: center;
        z-index: 999;
    }
    .indicator-dot{
        width: 12px;
        height:12px;
        border: 1.25px solid var(--border-color);
        border-radius:50%;
    }
    .indicator-dot:hover{
        background: var(--black-gradient-light);
        border:none;
        transition: .4s;
    }

    .active{
        background: var(--black-gradient);
    }


</style>