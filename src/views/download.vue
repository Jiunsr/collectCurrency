<template>
    <div class="download">
        <div class="wallet">
            <div class="walletImg">
                <img src="./../assets/img/qianbao_03.jpg" alt="">
            </div>
            <div class="walletText">
                <div class="credible">收币宝<span style="color: black; font-size: 30px;">钱包</span></div>
                <div class="text">去中心化、安全、可信钱包</div>                   
                    <v-container class="downloadCenter">
                        <v-row>
                            <v-col md="4">
                                <div class="downloadOverall">
                                    <v-btn class="ma-2" color="#4f6ef7" dark  :large="true" style="width: 200px; font-size: 18px; font-weight: bold !important; height: 60px; margin-bottom:20px; text-transform: none;">windows版
                                        <v-icon size="20" dark right>{{mdiDownload}}</v-icon>
                                    </v-btn>

                                    <v-btn class="ma-2" color="#4f6ef7" dark  :large="true" style="width: 200px; font-size: 18px; font-weight: bold !important; height: 60px; margin-left: 30px; margin-bottom:20px; text-transform: none;">Mac版</v-btn>
                                    <v-btn class="ma-2" color="#4f6ef7" dark  :large="true" style="width: 200px; font-size: 18px; font-weight: bold !important; height: 60px; margin-bottom:20px; text-transform: none;">Linux版</v-btn>
                                    <v-btn class="ma-2" color="#4f6ef7" dark  :large="true" style="width: 200px; font-size: 18px; font-weight: bold !important; height: 60px; margin-left: 30px; margin-bottom:20px; text-transform: none;">iOS版</v-btn>
                                    <v-btn class="ma-2" color="#4f6ef7" dark  :large="true" style="width: 200px; font-size: 18px; font-weight: bold !important; height: 60px; text-transform: none;">Android版</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>                  
                        
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
import { mdiDownload } from '@mdi/js';
export default {
	data: function () {
		return {
            mdiDownload,
        }
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
        height 900px
        background-color #fff
        display flex

        .walletImg{
            padding 92px 87px 156px 147px
            img{
                width 900px
                height 675px
            }
        }
        .walletText{
            padding-top 230px
            .text{
                font-size 20px
                letter-spacing 5px
                padding 20px 0 65px
            }
            .credible{
                font-size 50px
                font-weight bold
                color #4f6ef7
                letter-spacing 5px
            }
            .downloadCenter{
                .downloadOverall{
                    width 435px;
                    margin-right 0;
                    img{
                        width 23px
                        height 26px
                    }
                }                
            }
        }
    }
}
.bottom{
    background-color #000829
    .bottomCenter{
        display flex
        justify-content center
        align-items center
        .bottomImg{
            padding 15px 5px 5px
            display flex
            img{
                width 27px
                height 27px
            }
        }
    }
    .siteName{
        text-align center
        font-size 12px
        color #fff
        padding-bottom 3px
    }
}
</style>
