<template>
    <div class="info-page">
        <div class="info-page-card">
            <!-- 顶部 -->
            <div class="info-page-title">
                <span>云言运动助手</span>
            </div>
            <!-- 头像 -->
            <div class="avatar">
                <img
                    src="//q4.qlogo.cn/headimg_dl?dst_uin=1721782586&spec=100"
                    class="img"
                    alt="" />
                <h1>每日运动</h1>
            </div>
            <!-- 输入框 -->
            <div class="infos">
                <n-space vertical>
                    <n-input-group>
                        <n-input-group-label class="input-title">用户名</n-input-group-label>
                        <n-input
                            size="medium"
                            type="text"
                            v-model:value="formValue.user"
                            placeholder="Zepp Life账号(原小米运动)" />
                    </n-input-group>
                    <n-input-group>
                        <n-input-group-label class="input-title">密 码</n-input-group-label>
                        <n-input
                            type="password"
                            show-password-on="mousedown"
                            v-model:value="formValue.pwd"
                            placeholder="Zepp Life密码(原小米运动)" />
                    </n-input-group>
                    <n-input-group>
                        <n-input-group-label class="input-title">步 数</n-input-group-label>
                        <n-input
                            show-password-on="mousedown"
                            v-model:value="formValue.step"
                            placeholder="1~98800" />
                    </n-input-group>
                </n-space>
                <!-- 确定按钮 -->
                <n-button
                    type="primary"
                    :loading="loading"
                    class="btn"
                    @click="handleClick">
                    提交任务
                </n-button>
            </div>
            <!-- 常见问题 -->
            <div class="issue">
                <span>常见问题</span>
                <span>|</span>
                <span>API调用</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import type { FormInst } from 'naive-ui'
    import type { user } from '@/types/index'
    import { useMessage } from 'naive-ui'

    const formRef = ref<FormInst | null>(null)
    const loading = ref<boolean>(false)
    const message = useMessage()
    const formValue = ref<user>({
        user: '',
        pwd: '',
        step: '',
    })

    function handleClick() {
        loading.value = true
        // 判断信息是否完整
        if (!formValue.value.user || !formValue.value.pwd || !formValue.value.step) {
            message.error('信息输入不完整')
            loading.value = false
            return
        }
        //判断步数是否过大
        if (Number(formValue.value.step) > 98800) {
            message.error('步数最大不超过98800')
            loading.value = false
            return
        }
        //提交表单
    }
</script>

<style lang="scss" scoped>
    .info-page {
        padding-top: 10px;

        &-title {
            font-size: 20px;
            height: 42px;
            line-height: 42px;
            padding-left: 10px;
            border-bottom: 1px solid #ebebeb;
        }
        &-card {
            margin: 0 auto;
            max-width: 700px;
            background-color: #fff;
            border-radius: 3px;
        }
        .input-title {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 40px;
        }
        .infos {
            padding: 0 15px 15px 15px;
        }
        .btn {
            margin-top: 10px;
            width: 100%;
            height: 40px;
        }
        .avatar {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            .img {
                width: 80px;
                height: 80px;
                border: 1px solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 3px #aaa;
                padding: 3px;
                margin: 10px 3px 6px 10px;
            }
        }
        .n-input-group {
            margin-bottom: 10px;
        }
    }
    .issue {
        text-align: center;
        padding-bottom: 10px;
        span {
            padding: 0 5px;
        }
        span:hover {
            cursor: pointer;
        }
    }
</style>
