import { RiFacebookCircleFill } from 'oh-vue-icons/icons';
<template>
    <div class="footer">
        <div class="flex items-center">
            <div class="m-4">
                <a href="javascript:void(0)" class="text-4xl">
                    <i class="ri-facebook-circle-fill"></i>
                </a>
            </div>
            <div class="m-4">
                <a href="javascript:void(0)" class="text-4xl">
                    <i class="ri-instagram-fill"></i>
                </a>
            </div>
            <div class="m-4">
                <a href="javascript:void(0)" class="text-4xl">
                    <i class="ri-twitter-fill"></i>
                </a>
            </div>
            <div class="m-4">
                <a href="javascript:void(0)" class="text-4xl">
                    <i class="ri-linkedin-box-fill"></i>
                </a>
            </div>
            <div class="m-4">
                <a href="javascript:void(0)" class="text-4xl">
                    <i class="ri-github-fill"></i>
                </a>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
.footer{
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display:grid;
    place-items:center;
    border-top: var(--border);
}
</style>