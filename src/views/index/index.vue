<template>
    <div class="index-page">
        <n-message-provider>
            <info></info>
        </n-message-provider>
        <msg></msg>
    </div>
</template>

<script setup lang="ts">
    import info from './components/info.vue'
    import msg from './components/msg.vue'
</script>

<style lang="scss" scoped>
    .index-page {
        background-image: url(https://apis.jxcxin.cn/api/Bing);
        background-size: 100% 100%;
        background-repeat: repeat;
        background-attachment: fixed;
        // top: 0;
        // position: fixed;
        // left: 0;
        // width: 100%;
        // height: 100%;
        // z-index: -2;
    }

    @media (max-width: 768px) {
        .index-page {
            padding: 0 10px 10px 10px;
        }
    }
</style>
