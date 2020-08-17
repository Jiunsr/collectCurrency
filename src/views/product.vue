<template>
    <div class="product">
        <div class="productPrice">
            <div class="buyText">
                <div class="text1">按需购买，更加弹性可控</div>
                <div class="text2">根据需要购买地址数量，以及地址监听时长</div>
            </div>
            <div class="product">
                <div class="productCenter">
                    <div class="productImg1">
                        <img src="./../assets/img/cpxz_11.png" alt="">
                    </div>
                    <div class="productText1">核心</div>
                    <div class="productText2">$<span style="font-size: 40px; font-weight: bold;">0</span>.00/月</div>
                    <div class="line0"></div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">以太坊主网和测试网</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">100,000个请求/天</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">3个项目</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">社区支持论坛</div>
                        </div>
                    </div>
                </div>
                <div class="productCenter">
                    <div class="productImg1">
                        <img src="./../assets/img/cpxz_13.png" alt="">
                    </div>
                    <div class="productText1">开发人员</div>
                    <div class="productText2">$<span style="font-size: 40px; font-weight: bold;">50</span>.00/月</div>
                    <div class="line0"></div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">所有核心层优势，再加上</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">200，000个请求/天</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">10个项目</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">直接客户支持</div>
                        </div>
                    </div>
                </div>
                <div class="productCenter">
                    <div class="productImg1">
                        <img src="./../assets/img/cpxz_15.png" alt="">
                    </div>
                    <div class="productText1">团队</div>
                    <div class="productText2">$<span style="font-size: 40px; font-weight: bold;">255</span>.00/月</div>
                    <div class="line0"></div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">所有开发人员优势，再加上</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">1，000，000个请求/天</div>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <div class="productText3">24小时支持响应时间</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <v-btn slot="append" color="#4f6ef7" :large="true" style="padding:12px 40px; font-size: 18px; font-weight: bold !important;">立即对接</v-btn>
            </div>
            <div class="buttonText1">没有您需要的功能？联系我们定制计划。</div>
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
.product{
    .productPrice{
        .buyText{
            text-align: center;
            .text1{
                font-size: 32px;
                padding: 70px 0 30px 0;
            }
            .text2{
                font-size: 18;
                letter-spacing: 7px;
                padding-bottom: 40px;
            }
        }
        .product{
            display: flex;
            justify-content: center;
            align-items: center;
            .productCenter{
                width: 320px;
                height: 483px;
                box-shadow: 0 4px 10px #e5e5e5;
                margin-bottom: 60px;
                margin-right: 60px;
                .productImg1{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px 0 15px 0;
                    img{
                        width: 80px;
                        height: 80px;
                    }
                }
                .productText1{
                    padding-bottom: 20px;
                    font-size: 20px;
                    text-align: center;
                }
                .productText2{
                    padding-bottom: 20px;
                    font-size: 16px;
                    letter-spacing: 2px;
                    text-align: center;
                }
                .line0{
                    border-bottom: 1px solid #d7d7d7;
                    width: 80%;
                    margin: auto;
                    margin-bottom: 20px;
                }
                .productSelect{
                    .productImg2{
                        padding:0 35px 20px;
                        display: flex;
                        // justify-content: center;
                        align-items: center;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                        .productText3{
                            font-size: 16px;
                            padding-left: 20px;
                        }
                    }
                }
            }
        }
        .button{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .buttonText1{
            color: #4f6ef7;
            font-size: 18px;
            padding: 20px 0 63px 0;
            text-align: center;
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
