<template>
    <div class="help">
        帮助中心
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
