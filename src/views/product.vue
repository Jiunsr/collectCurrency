<template>
    <div class="product">
        <div class="productPrice">
            <div class="buyText">
                <p class="text1">按需购买，更加弹性可控</p>
                <p class="text2">根据需要购买地址数量，以及地址监听时长</p>
            </div>
            <div class="product">
                <div class="productCenter">
                    <div class="productImg1">
                        <img src="./../assets/img/cpxz_11.png" alt="">
                    </div>
                    <p class="productText1">核心</p>
                    <p class="productText2">$<span style="font-size: 40px; font-weight: bold;">0</span>.00/月</p>
                    <div class="line0"></div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">以太坊主网和测试网</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">100,000个请求/天</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">3个项目</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">社区支持论坛</p>
                        </div>
                    </div>
                </div>
                <div class="productCenter">
                    <div class="productImg1">
                        <img src="./../assets/img/cpxz_13.png" alt="">
                    </div>
                    <p class="productText1">开发人员</p>
                    <p class="productText2">$<span style="font-size: 40px; font-weight: bold;">50</span>.00/月</p>
                    <div class="line0"></div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">所有核心层优势，再加上</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">200，000个请求/天</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">10个项目</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">直接客户支持</p>
                        </div>
                    </div>
                </div>
                <div class="productCenter">
                    <div class="productImg1">
                        <img src="./../assets/img/cpxz_15.png" alt="">
                    </div>
                    <p class="productText1">团队</p>
                    <p class="productText2">$<span style="font-size: 40px; font-weight: bold;">255</span>.00/月</p>
                    <div class="line0"></div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">所有开发人员优势，再加上</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">1，000，000个请求/天</p>
                        </div>
                    </div>
                    <div class="productSelect">
                        <div class="productImg2">
                            <img src="./../assets/img/cpxz_21.png" alt="">
                            <p class="productText3">24小时支持响应时间</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <div class="buttonForm">
                    <p class="buttonText">立即对接</p>
                </div>
            </div>
            <p class="buttonText1">没有您需要的功能？联系我们定制计划。</p>
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
                font-size: 36px;
                padding: 90px 0 30px 0;
            }
            .text2{
                font-size: 18;
                letter-spacing: 7px;
                padding-bottom: 50px;
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
                        width: 90px;
                        height: 90px;
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
            
            .buttonForm{
                width: 180px;
                height: 50px;
                background-color: #4f6ef7;
                box-shadow: 0 4px 10px #cecece;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
                .buttonText{
                    font-size: 20px;
                    font-weight: bold;
                    color: #fff;
                }
            }
        }
        .buttonText1{
            color: #4f6ef7;
            font-size: 18px;
            padding-bottom: 63px;
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
