<template>
    <div class="download">
        <div class="wallet">
            <div class="walletImg">
                <img src="./../assets/img/qianbao_03.jpg" alt="">
            </div>
            <div class="walletText">
                <p class="credible">收币宝<span style="color: black; font-size: 30px;">钱包</span></p>
                <p class="text">去中心化、安全、可信钱包</p>
                <div class="downloadCenter">
                    <div class="downloadOverall">
                        <div class="downloadImg">
                            <p class="version">WIndows版</p>
                            <img src="./../assets/img/xiazai_03.png" alt="">
                        </div>
                    </div>
                    <div class="downloadOverall" style="background-color: #fff;">
                        <div class="downloadImg">
                            <p class="version" style="color: black;">Mac版</p>
                        </div>
                    </div>
                    <div class="downloadOverall" style="background-color: #fff;">
                        <div class="downloadImg">
                            <p class="version" style="color: black;">Linux版</p>
                        </div>
                    </div>
                    <div class="downloadOverall" style="background-color: #fff;">
                        <div class="downloadImg">
                            <p class="version" style="color: black;">iOS版</p>
                        </div>
                    </div>
                    <div class="downloadOverall" style="background-color: #fff;">
                        <div class="downloadImg">
                            <p class="version" style="color: black;">Android版</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottomCenter">
                <div class="bottomImg">
                    <img src="./../assets/img/shouyeioc_03.jpg" alt="">
                </div>
                <div class="bottomImg">
                    <img src="./../assets/img/shouyeioc_05.jpg" alt="">
                </div>
                <div class="bottomImg">
                    <img src="./../assets/img/shouyeioc_07.jpg" alt="">
                </div>
            </div>
            <div class="siteName">
                <p>© 2020 shoubibao.com</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data: function () {
		return {}
	},
	methods: { },
	metaInfo () {
		return { }
	}
}
</script>

<style lang="stylus" scoped>
.download{
    .wallet{
        height: 900px;
        background-color: #fff;
        display: flex;

        .walletImg{
            padding: 92px 87px 156px 147px;
            img{
                width: 900px;
                height: 675px;
            }
        }
        .walletText{
            padding-top: 230px;
            .text{
                font-size: 20px;
                letter-spacing: 5px;
                padding-bottom: 65px;
            }
            .credible{
                font-size: 50px;
                font-weight: bold;
                color: #4f6ef7;
                letter-spacing: 5px;
            }
            .downloadCenter{
                display: flex;
                flex-wrap: wrap;
                flex-basis: auto;
                width: 67%;
                .downloadOverall{
                    width: 202px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 30px 30px 0;
                    box-shadow: 0 4px 10px #e4e4e4;
                    background-color: #fff;
                    border-radius: 10px;
                    background-color: #4f6ef7;
                    .downloadImg{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .version{
                            font-size: 20px;
                            font-weight: bold;
                            color: #fff;
                            padding-right: 10px;
                        }
                        img{
                            width: 23px;
                            height: 26px;
                        }
                    }
                }
            }
        }
    }
}
.bottom{
    background-color: #000829;
    .bottomCenter{
        display: flex;
        justify-content: center;
        align-items: center;
        .bottomImg{
            padding: 15px 5px 5px;
            display flex
            img{
                width: 27px;
                height: 27px;
            }
        }
    }
    .siteName{
        text-align: center;
        font-size: 12px;
        color: #fff;
        padding-bottom 3px
    }
}
</style>
