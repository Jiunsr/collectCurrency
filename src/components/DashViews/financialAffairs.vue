<template>
  <v-container
    fill-height
    fluid
    grid-list-xl 
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg5
      >  
        <v-card class="mx-auto" height="288" max-width="96%" :elevation="4" mar>
          <div class="fiscalHappening">
            <div class="fiscalCenter">
              <div class="bg"></div>
              <div class="fiscalText">财务情况</div>
            </div>
            <div class="line"></div>
            <div class="balanceBox">
              <div class="balance">
                <div class="money">￥10000.00</div>
                <div class="available">可用余额：</div>
                <v-btn small color="#4f6ef7" height="30" width="30%" style="font-size:14px;">充值</v-btn>
              </div>
              <div class="line2"></div>
              <div class="balance">
                <div class="money">1000</div>
                <div class="available">可用地址数：</div>
                <v-btn small color="#4f6ef7" height="30" width="30%" style="font-size:14px;">购买</v-btn>
              </div>
            </div>
          </div>
        </v-card>
      </v-flex>

      <v-flex
        md12
        sm12
        lg5
      >  
        <v-card class="mx-auto" height="288" max-width="100%" :elevation="4">
          <div class="fiscalHappening">
            <div class="fiscalCenter">
              <div class="bg"></div>
              <div class="fiscalText">设置</div>
            </div>
            <div class="line"></div>
            <div class="setUp">
              <div class="setUpText">自动余额支付地址创建：</div>

            </div>
          </div>
        </v-card>
      </v-flex>

      <v-flex
        md12
        sm12
        lg2
      >
        <v-card
          class="mx-auto"
          height="288"
          max-width="95%"
          :elevation="4"
        >
          <div class="fiscalHappening">
            <div class="fiscalCenter">
              <div class="bg"></div>
              <div class="fiscalText">订单管理</div>
            </div>
            <div class="line"></div>
            <div class="pushButton">
              <v-btn large color="#4f6ef7" height="144" style="margin auto;">进入订单管理</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
      <div class="record">
        <div class="recordCenter">
          <div class="recordBg"></div>
          <div class="recordText">消费记录</div>
          <div class="recordDetailed">
            <div class="detailedRecord">详细记录>></div>
            </div>
          <div class="Text">
            <div class="hour">最近20小时</div>
            <div class="day">最近7天</div>
            <div class="day1">最近30天</div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 768x)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right'
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
<style lang="stylus">
  .fiscalHappening{
    .fiscalCenter{
      display flex
      align-items center
      padding 10px 0 10px 20px
      
      .bg{
        width 18px
        height 18px
        border 4px solid red
        border-radius 50%
        background-color #4f6ef7
      }
      .fiscalText{
        font-size: 16px;
        padding-left 5px
      }
    }
      .line{
        border-bottom 1px solid #efefef
        width 91%
        margin 0 auto
      }
    .balanceBox{
      display flex
      .balance{
        width 325px
        text-align center
        .money{
          font-size 36px
          color #4f6ef7
          padding-top  55px 
          font-weight bold
        }
        .available{
          font-size 16px
          padding-bottom 25px
          color #212529
          font-weight bold
        }
      }
      .line2{
        border-right 1px solid #efefef
        height 50px
        margin auto
      }
    }
    .setUp{
        display flex
        justify-content center
        align-items center
        height 232px
      .setUpText{
        font-size 16px
        font-weight bold
      }
    }
    .pushButton{
      height 232px
      padding 40px 55px
    }
  }
  .record{
    height 500px
    border-radius 10px
    box-shadow 0 10px 15px 10px #dcdcdc
    margin 20px 25px
    .recordCenter{
      display flex
      align-items center
      padding 20px 0 10px 20px
      .recordBg{
        width 18px
        height 18px
        border 4px solid red
        border-radius 50%
        background-color #4f6ef7
      }
      .recordText{
        font-size: 16px;
        padding 0 15px 0 6px
        font-weight bold
      }
      .recordDetailed{
        .detailedRecord{
        border 1px solid #4f6ef7
        color #4f6ef7
        font-size 14px
        font-weight bold
        border-radius 5px
        padding 2px 13px
        }
      }
      .Text{
        display flex
        justify-content center
        align-items center
        font-size 14px
        .hour{
          padding-left  1070px
          padding-right 40px
        }
        .day{
          padding-right 40px
        }
        .day1{
          padding-right 40px
        }
      }

    }
      .line{
        border-bottom 1px solid #efefef
        width 97%
        margin 0 auto
      }
  }
</style>
