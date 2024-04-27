<template>
  <div class="custom">
    <v-tabs v-model="tab" bg-color="red" class="tab" fixed-tabs>
      <v-tab value="one">Cho bạn</v-tab>
      <v-tab value="two">Đồ dùng nhà bếp</v-tab>
      <v-tab value="three">Vệ sinh chăm sóc nhà cửa</v-tab>
      <v-tab value="four">Đầm váy</v-tab>
      <v-tab value="five">Áo nữ</v-tab>
      <v-tab value="Six">Áo khoác nữ</v-tab>
    </v-tabs>
    <div style="box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.2)">
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-container>
            <div class="ma-2 pa-2">
              <v-row>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/03_29/SGdMJ3wI0KUDOTk4A7W1.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Rau sạch Sendo Farm</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/04_04/YbZ4KsWgshDZhoJ2VYJT.gif"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">BTS Mùa Nóng</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/03_29/BOOUOF7oeZkeuGNJJG9J.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Bình giữ nhiệt -49%</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/04_02/c5RL97yw11NscJhzqorC.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Thiết bị nhà bếp từ 39k</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/04_19/VWaYz8iv8UDfAFoFHHtP.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Bảo vệ sức khỏe</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/03_29/O5Fq8HjhvDBt5IATUaF3.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Vệ sinh từ 2k</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/04_10/4XWjLEc7ITaNfwk5XWoQ.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Chăm sóc cơ thể</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/04_22/dNBAieEDgX3N6tQn0KsQ.gif"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Quần áo trẻ em - 50%</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/03_29/LSyNCikW0Z40PSCJ0RLt.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Nạp thẻ & dịch vụ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/03_29/SvsMHKy1VeVQM4wJlXyI.png"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Mã giảm giá & Freeship</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-window-item>

        <v-window-item value="two">
          <v-container>
            <div class="ma-2 pa-2">
              <v-row>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/Re4gclzgDyGI8pYREgRl_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Giá kệ để gọn đồ</p>
                </v-col>

                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_20/yGS3q7R5mqz9mlFHhMXH_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Nồi,xoong</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/Sbhcy0tZHhYi7mjGHcp1_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Hộp lọ khay để thực phẩm</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/peDntw2ZaiC2NWgp9hmz_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Cân nhà bếp</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_20/j3ApPbcmUk1gMGqvwJxG_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Chảo</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/7NWdvfbuKQ0GV2Rp8gkk_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Dụng cụ chế biến rau củ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/szBs88cMFzG9TFyi6UuT_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Dao kéo thớt</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/U1E71aSTKvGeB8Sqcp6g_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Bếp ga</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_20/ohI3ZY1vMmrtjwvFUiLK_simg_3c46c2_120x120_maxb.jpg
"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Dụng cụ rửa chén</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_20/iFwA8MXgoaVHLusSeGrP_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Tạp dề, khăn nhà bếp</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-window-item>

        <v-window-item value="three">
          <v-container>
            <div class="ma-2 pa-2">
              <v-row>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/images/ecom/category/2005_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Khẩu trang găng tay y tế</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/images/ecom/category/2748_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Dung dịch nhỏ mắt,mũi</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/images/ecom/category/1998_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Máy đo đường huyết</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/images/ecom/category/1999_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Máy đo huyết áp></p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/images/ecom/category/2000_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Nhiệt kế</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/images/ecom/category/2001_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Que thử</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/images/ecom/category/2004_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Vớ y khoa</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/images/ecom/category/2731_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đai nẹp y tế</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/images/ecom/category/2741_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Bộ giác hơi</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/images/ecom/category/2746_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Chăm sóc chấn thương</p>
                </v-col>
              </v-row>
            </div>
          </v-container></v-window-item
        >
        <v-window-item value="four">
          <v-container>
            <div class="ma-2 pa-2">
              <v-row>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_13/GRHOzEAMqfyRCUmiI5g0_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm xòe</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_13/bQbbJj15TvYKO5PyAKw5_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm suông</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_13/X1FDFqq1nSiW335iV1fd_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm ôm</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_13/IhQGg6QunHTrWywSVXS9_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm dạ hội, đầm dự tiệc</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_13/wZTGs2U3st8p2XhXk7kz_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm maxi</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_13/JPHCmhF0z5qecL59KfGu_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm thun</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_13/J7615rBB5Q74ORtDb4XT_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm ren</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_13/SktQD3b1p16Qic9qEbnp_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm von,chiffon</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_13/h8wsB71Nh2TqBd7KZI74_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm công sở</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_13/g1J5LMX5LrCYCBVHqKcu_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Đầm trễ vai</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-window-item>

        <v-window-item value="five">
          <v-container>
            <div class="ma-2 pa-2">
              <v-row>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/cubhWdzCYjlA19vIyLcK_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo thun ,áo pholo nữ</p>
                </v-col>

                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/UydPMMowIAH5b4sBKi2K_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo kiểu nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/M64NxembaI6W6dYXsTR8_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo trễ vai</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/N0fNjIp7PWRIM6iGria4_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo sơ mi nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/5aTAp53VSTE2GKF9LoIQ_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo len</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/qR14fULOVBQ5BZcbuIpE_simg_3c46c2_120x120_maxb.jpgg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo hoodie nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/SGp5YwiWVLUQPpbvvUBq_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo dài nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/JVgfTP2zpikR4KHDWGNj_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo croptop nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/GSxZHHstQjAdB9OeO7Tb_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo con,chiffon nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/mcvVcYNjlGs1GVwiRhvI_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo hai dây</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-window-item>

        <v-window-item value="Six">
          <v-container>
            <div class="ma-2 pa-2">
              <v-row>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/a4KFN4wV67HbnAtDNFdm_simg_3c46c2_120x120_maxb.jpgg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác chống nắng nữ</p>
                </v-col>

                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/atsi0iPQVN5NLREwoVdH_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác kiểu nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/uDZLOw5XfKtMnuJIYXkm_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác jean nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/5wDN9tYshmaBFivHMEDM_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo phao nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="https://media3.scdn.vn/img4/2021/01_12/awenn1agT9HDQP4XEK62_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo mãng tô,khoác dạ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/wByzhxs5AZy15emAjusC_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác len nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/UaFuv7Fsf6z2A4pGbbda_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác vest nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/tClCmG4n5FWsUMRyY9jl_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác da nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/01_12/L0TOLXqXMnE0VYtzQsC7_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác bomber nữ</p>
                </v-col>
                <v-col class="custom-col">
                  <div class="mx-5">
                    <v-img
                      src="		https://media3.scdn.vn/img4/2021/01_12/tClCmG4n5FWsUMRyY9jl_simg_3c46c2_120x120_maxb.jpg"
                      width="44"
                      height="44"
                    ></v-img>
                  </div>
                  <p style="font-size: 13px">Áo khoác lửng nữ</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-window-item>
      </v-window>

      <div>
        <v-img
          src="https://media3.scdn.vn/img4/2024/04_10/9iIvekgwiqLwzZVsHFPv.png"
          width="1308"
          height="197"
          style="margin: 0 auto"
          @click="goToSelect"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomNav",
  data: () => ({
    tab: null,
  }),
  methods: {
    goToSelect() {
      this.$router.push("/select");
    },
  },
};
</script>

<style scoped></style>
