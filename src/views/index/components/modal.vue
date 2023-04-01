<template>
    <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="Dialog">
        <template #header>
            <div>疑难杂症</div>
        </template>
        <n-collapse accordion>
            <n-collapse-item
                title="账户密码错误？"
                name="1">
                <span>如遇账号密码正确但还是提示错误，请尝试手动登录APP后再试</span>
            </n-collapse-item>
            <n-collapse-item
                title="APP账户被退出？"
                name="2">
                <span>因本程序是直接通过官方的接口登录你的账号提交新的步数，所以每次使用都会导致APP上的账号被退出</span>
            </n-collapse-item>
            <n-collapse-item
                title="提交成功步数不同步？"
                name="3">
                <p>1.检查APP内第三方接入内绑定的微信、支付宝等平台是不是你的账号</p>
                <p>2.同账号当天连续提交太多次</p>
                <p>3.如果微信步数一直是0步，可能是被举报导致不同步，7天后即可自动恢复</p>
            </n-collapse-item>
            <n-collapse-item
                title="如何重新绑定微信？"
                name="4">
                <p>1.微信内取消关注“华米科技” 、 “Amazfit跃我”公众号</p>
                <p>2.扫描APP内的微信绑定二维码进行绑定</p>
            </n-collapse-item>
        </n-collapse>
        <template #action>
            <n-button
                type="primary"
                @click="showModal = false">
                我知道了
            </n-button>
        </template>
    </n-modal>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const showModal = ref<boolean>(false)

    /**
     * 打开弹框
     */
    function handleOpenModal() {
        showModal.value = true
    }

    defineExpose({ handleOpenModal })
</script>

<style lang="scss" scoped>
    .n-collapse-item.n-collapse-item--left-arrow-placement {
        margin: 2px;
    }
</style>
