<template>
    <div class="api-page">
        <div class="api-page-card">
            <!-- 顶部 -->
            <div class="api-page-title">
                <span>使用说明</span>
            </div>
            <div class="api-page-info">
                <p>1. 从应用商店下载小米运动,打开软件通过手机号注册登录</p>
                <br />
                <p>2. 登录之后，点击我的->第三方接入->绑定需要同步的第三方平台</p>
                <br />
                <p>3. 回到提交网页版，登陆，提交步数即可同步至你绑定的所有平台</p>
                <br />
                <p>4. 定时提交模式每天只执行一次，且步数为起始步数</p>
                <br />
                <p>5. 叠加模式通过算法自动计算每半小时需要增加的步数，直至用户设定的最大步数为止</p>
                <br />
                <p>6. 因系统计划任务每间隔30分钟执行一次，故步数可能存在30分钟左右的延迟</p>
                <br />
            </div>
            <div class="api-page-footer">
                <span>Copyright © 2023 云言运动助手</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
    .api-page {
        background-image: url(https://yyink.cn/tool/api/bing.php);
        background-size: 100% 100%;
        background-repeat: repeat;
        background-attachment: fixed;
        top: 0;
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        // z-index: -2;

        &-title {
            text-align: center;
            font-size: 20px;
            height: 42px;
            line-height: 42px;
            padding-left: 10px;
            border-bottom: 1px solid #ebebeb;
        }
        &-card {
            margin: 10px auto;
            max-width: 700px;
            background-color: #fff;
            border-radius: 3px;
        }
        &-info {
            padding: 5px 15px;
            p {
                font-size: 14px;
                height: 18px;
            }
        }
        &-footer {
            height: 42px;
            line-height: 42px;
            border-top: 1px solid #ebebeb;
            font-size: 14px;
            text-align: center;
        }
    }
    @media (max-width: 768px) {
        .api-page {
            padding: 0 10px 10px 10px;
        }
    }
</style>
