<template>
  <div class="muadee">
    <div>
      <Myhead class="sticky-div" v-sticky></Myhead>
      <v-main style="background-color: rgb(255, 222, 135)">
        <v-img
          src="https://media3.scdn.vn/img4/2024/03_31/h9PEhkXeRF509axus5Ye.jpg"
        ></v-img>

        <v-img
          class="my-10"
          src="https://media3.scdn.vn/img4/2023/06_07/PAZv9iCqpnOcRWldbXru.png"
        ></v-img>

        <div style="display: block">
          <div class="mx-5">
            <v-img
              src="	https://media3.scdn.vn/img4/2024/04_01/4H70agBvUOmG56caiLUt.png"
            >
            </v-img>

            <v-img
              src="https://media3.scdn.vn/img4/2023/06_07/ZoDnLJmkeZH8LMSWaaeP.png"
            ></v-img>

            <div class="d-flex justify-space-between">
              <img
                src="https://media3.scdn.vn/img4/2024/04_04/yagWGe565FKcVoF3tmFy.png"
                wight="328px"
                height="387px"
              />

              <img
                src="https://media3.scdn.vn/img4/2024/04_04/yagWGe565FKcVoF3tmFy.png"
                wight="328px"
                height="387px"
              />

              <img
                src="	https://media3.scdn.vn/img4/2024/04_04/6s4P1GmR8xGZNTeAjAsy.png"
                wight="328px"
                height="387px"
              />
              <img
                src="https://media3.scdn.vn/img4/2024/04_04/p64qRdM6sJDfRckB0lWR.png"
                wight="328px"
                height="387px"
              />
            </div>

            <div class="mt-5">
              <v-tabs
                v-model="tab"
                bg-color="rgb(99, 119, 234)"
                class="rounded-xl"
              >
                <v-tab value="one">Top Deal Xu Hướng</v-tab>
                <v-tab value="two">Đón đầu công nghệ</v-tab>
                <v-tab value="three">Top Best-Seller</v-tab>
              </v-tabs>

              <v-card-text>
                <v-window v-model="tab">
                  <v-window-item value="one" class="custom-tab">
                    <v-row>
                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="https://media3.scdn.vn/img3/2019/8_24/ZnEFKn_simg_ab1f47_350x350_maxb.jpg"
                              alt="Bồn massage chân JRK 8861 - bồn ngâm massage chân trị liệu"
                            />
                            <img
                              class="overlay-image"
                              src="https://media3.scdn.vn/img4/2020/08_27/40pfudqSCALqYajVtM66_simg_de2fe0_250x250_maxb.png"
                              alt="Bồn massage chân JRK 8861 - bồn ngâm massage chân trị liệu"
                              width="235"
                            />
                            <p class="label">Giảm 10%</p>
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Bồn massage chân JRK 8861 - bồn ngâm massage chân
                            trị liệu

                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">850.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  350.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet
                          class="pa-2 ma-2 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <v-img
                            src="		https://media3.scdn.vn/img4/2023/10_12/eVnDGpxxz4UPJ0tkU3s5_simg_ab1f47_350x350_maxb.jpg"
                            alt="Máy làm sữa đạu lành dung tích 800ml- Máy làm sữa đạu lành mini 8 chức năng
              "
                          ></v-img>
                          <div
                            class="product-item__info__name"
                            tyle="font-size:15px;"
                          >
                            Máy làm sữa đạu lành dung tích 800ml- Máy làm sữa
                            đạu lành mini 8....
                          </div>
                          <hr class="ma-2" />
                          <div class="ma-3">
                            <div style="float: left">
                              <del tyle="font-size:15px;">734.000</del>
                              <p style="font-size: 20px; color: #6377ea">
                                440.000
                              </p>
                            </div>
                            <div
                              style="
                                float: right;
                                background-color: rgb(99, 119, 234);
                                color: #ffffff;
                              "
                              class="pa-2 rounded"
                            >
                              Mua ngay
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>
                      <v-col
                        ><v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="https://media3.scdn.vn/img4/2020/11_17/aLysi1WR4iLbOJOtNv75_simg_ab1f47_350x350_maxb.jpg"
                              alt="Bếp từ cảm ứng cường lực bền bỉ , Eagle đa chức năg"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Bếp từ cảm ứng cường lực bền bỉ , Eagle đa chức năg
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">964.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  349.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet></v-col
                      >
                      <v-col
                        ><v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="https://media3.scdn.vn/img4/2022/04_09/SSj5KhNVQo3UN7jZ8LEu_simg_ab1f47_350x350_maxb.jpg"
                              alt="Bồn massage chân JRK 8861 - bồn ngâm massage chân trị liệu"
                            />
                            <img
                              class="overlay-image"
                              src="https://media3.scdn.vn/img4/2020/08_27/40pfudqSCALqYajVtM66_simg_de2fe0_250x250_maxb.png"
                              alt="Hàng chính hãng-ấm đun siêu tốc SunHouse 2 lớp dung tích...u"
                              width="235"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Hàng chính hãng-ấm đun siêu tốc SunHouse 2 lớp dung
                            tích...
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">319.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  239.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet></v-col
                      >
                      <v-col
                        ><v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="https://media3.scdn.vn/img3/2019/8_24/ZnEFKn_simg_ab1f47_350x350_maxb.jpg"
                              alt="Máy massage lưng cột sống,gối mát xa cổ vai gáy con lăn 4D ..."
                            />
                            <img
                              class="overlay-image"
                              src="	https://media3.scdn.vn/img4/2024/03_31/7uTHQmUNft6xk06y8syH.png"
                              width="235"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Máy massage lưng cột sống,gối mát xa cổ vai gáy con
                            lăn 4D ...
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">1850.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  989.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-pagination :length="5"></v-pagination>
                  </v-window-item>

                  <v-window-item value="two" class="custom-tab">
                    <v-row>
                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="	https://media3.scdn.vn/img4/2022/10_24/Y6fMfcJN33b5MUWVXEfI_simg_ab1f47_350x350_maxb.jpg"
                              alt="Tai nghe không dây yoking x16 blutooth 5.1"
                            />
                            <img
                              class="overlay-image"
                              src="https://media3.scdn.vn/img4/2020/08_27/40pfudqSCALqYajVtM66_simg_de2fe0_250x250_maxb.png"
                              alt="Tai nghe không dây yoking x16 blutooth 5.1"
                              width="235"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Tai nghe không dây yoking x16 blutooth 5.1

                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">700.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  379.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet
                          class="pa-2 ma-2 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <v-img
                            src="		https://media3.scdn.vn/img4/2022/10_24/6ggFHfYH9kJvsgTvNOab_simg_ab1f47_350x350_maxb.jpg"
                            alt=" Loa Blutooth nghe nhạc mini pin trâu yoking đĩa than,...
              "
                          ></v-img>
                          <div
                            class="product-item__info__name"
                            tyle="font-size:15px;"
                          >
                            Loa Blutooth nghe nhạc mini pin trâu yoking đĩa
                            than,...
                          </div>
                          <hr class="ma-2" />
                          <div class="ma-3">
                            <div style="float: left">
                              <del tyle="font-size:15px;">700.000</del>
                              <p style="font-size: 20px; color: #6377ea">
                                329.000
                              </p>
                            </div>
                            <div
                              style="
                                float: right;
                                background-color: rgb(99, 119, 234);
                                color: #ffffff;
                              "
                              class="pa-2 rounded"
                            >
                              Mua ngay
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>
                      <v-col
                        ><v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="https://media3.scdn.vn/img4/2022/10_22/kP2Ozdpiae4LSxvcAg95_simg_ab1f47_350x350_maxb.jpg"
                              alt="Tai nghe không dây yoking x16 blutooth 5.1
"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Tai nghe không dây yoking M9 spureBass âm thanh vòm
                            9D

                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">400.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  229.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet></v-col
                      >
                      <v-col
                        ><v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="	https://media3.scdn.vn/img4/2022/10_21/nUx3tBGJ9fy8WU0LqzmT_simg_ab1f47_350x350_maxb.jpg"
                              alt="Tai nghe không dây Yoking gaming K55 nhét tai cuốn,"
                            />
                            <img
                              class="overlay-image"
                              src="https://media3.scdn.vn/img4/2020/08_27/40pfudqSCALqYajVtM66_simg_de2fe0_250x250_maxb.png"
                              alt="Tai nghe không dây Yoking gaming K55 nhét tai cuốn,"
                              width="235"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Tai nghe không dây Yoking gaming K55 nhét tai
                            cuốn,...
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">319.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  239.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet></v-col
                      >
                      <v-col
                        ><v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="400"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="https://media3.scdn.vn/img4/2022/01_22/m0e00g7Vd9wrFuagf4wZ_simg_ab1f47_350x350_maxb.png"
                              alt="Máy massage lưng cột sống,gối mát xa cổ vai gáy con lăn 4D ..."
                            />
                            <img
                              class="overlay-image"
                              src="	https://media3.scdn.vn/img4/2024/03_31/7uTHQmUNft6xk06y8syH.png"
                              width="235"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Loa kéo Blutooth karaoke Remax RB-X9 lite,..
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">5999.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  3989.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-pagination :length="5"></v-pagination>
                  </v-window-item>

                  <v-window-item value="three" class="custom-tab">
                    <v-row>
                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="410"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="		https://media3.scdn.vn/img4/2021/07_12/vRn3kaLrSj3ikc5HD6pv_simg_ab1f47_350x350_maxb.png"
                              alt="Giày nike uniset ari"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Giày Nike Unisex Air Force 1 Low AF1 Chính Hãng
                            DH2920-111 Size 38.5
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <p style="font-size: 20px; color: #6377ea">
                                  2.200.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="410"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="		https://media3.scdn.vn/img4/2022/12_23/YI8uvXMvQvEXE4sBSJPu_simg_ab1f47_350x350_maxb.jpg"
                              alt=" Nệm massage toàn thân OKACHI nhiệt và hồng ngoại JP-M799"
                            />
                          </div>

                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Nệm massage toàn thân OKACHI nhiệt và hồng ngoại
                            JP-M799 (màu xám)
                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <del tyle="font-size:15px;">3.450.000</del>
                                <p style="font-size: 20px; color: #6377ea">
                                  2.100.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="410"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="		https://media3.scdn.vn/img4/2021/10_01/MHuboUfASaaVk3NUCE7f_simg_ab1f47_350x350_maxb.jpg"
                              alt="Bia Tiger thùng 24 lon x 330ml"
                            />
                          </div>
                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Bia Tiger thùng 24 lon x 330ml

                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <p style="font-size: 20px; color: #6377ea">
                                  375.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="410"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="			https://media3.scdn.vn/img3/2019/11_27/qpiUp0_simg_ab1f47_350x350_maxb.jpg"
                              alt="Nước hoa Unisex Creed Silver Mountain Water 100ml"
                            />
                          </div>
                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Nước hoa Unisex Creed Silver Mountain Water 100ml

                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <p style="font-size: 20px; color: #6377ea">
                                  6.600.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet
                          class="pa-2 ma-1 product-item__info"
                          :elevation="2"
                          :height="410"
                        >
                          <div class="image-container">
                            <img
                              class="original-image"
                              src="		https://media3.scdn.vn/img4/2020/01_16/dk3BkXqx93okfQOgqrwb_simg_ab1f47_350x350_maxb.jpg"
                              alt="Nước hoa Unisex Creed Silver Mountain Water 100ml"
                            />
                          </div>
                          <div
                            class="product-item__info__name mt-5"
                            tyle="font-size:15px;"
                          >
                            Nước hoa nữ TOM-FORD-Velvet Orchid EDP 100ml

                            <hr class="ma-2" />
                            <div class="ma-3">
                              <div style="float: left">
                                <p style="font-size: 20px; color: #6377ea">
                                  3.458.000
                                </p>
                              </div>
                              <div
                                style="
                                  float: right;
                                  background-color: rgb(99, 119, 234);
                                  color: #ffffff;
                                "
                                class="pa-2 rounded"
                              >
                                Mua ngay
                              </div>
                            </div>
                          </div>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card-text>
            </div>
          </div>

          <div style="display: block">
            <v-img
              src="https://media3.scdn.vn/img4/2023/08_11/MkVjQvkbs5WAqEKCm2Oc.jpg"
            ></v-img>

            <v-img
              src="https://media3.scdn.vn/img4/2023/06_07/qLj8vMjLsWO35exAaef8.png"
            ></v-img>
          </div>

          <div class="mt-5">
            <div class="d-flex justify-space-between mt-5">
              <v-img
                src="https://media3.scdn.vn/img4/2024/01_24/haOhCYjDGrvRXBSVPdPy.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="https://media3.scdn.vn/img4/2024/01_24/kTN5OgOpS8RpBWbye6A5.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="https://media3.scdn.vn/img4/2023/10_17/PWRnHWcSgpAbouhcgtHD.png"
                wight="273"
                height="162"
              ></v-img>

              <v-img
                src="	https://media3.scdn.vn/img4/2023/07_20/x3moFXpPM6yY69d7Hcht.png"
                wight="273"
                height="162"
              ></v-img>
            </div>

            <div class="d-flex justify-space-between mt-5">
              <v-img
                src="https://media3.scdn.vn/img4/2023/10_09/EJ2tNpbZ0oSx0FJN6kNS.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="	https://media3.scdn.vn/img4/2023/06_13/HxKG4KBEKbDYGs9UrePf.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="https://media3.scdn.vn/img4/2023/06_13/r4l7uFuXiR0bA9bKibuy.png"
                wight="273"
                height="162"
              ></v-img>

              <v-img
                src="	https://media3.scdn.vn/img4/2023/10_17/SkydJivZn8cyQ110MU50.png"
                wight="273"
                height="162"
              ></v-img>
            </div>

            <div class="d-flex justify-space-between mt-5">
              <v-img
                src="https://media3.scdn.vn/img4/2024/01_24/zl0efbgigpyn8C7raC0O.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="	https://media3.scdn.vn/img4/2024/01_24/ZbNhDroLFybA6vN70DcJ.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="	https://media3.scdn.vn/img4/2023/06_07/JTucRQUEpNmqCe6J6JXG.png"
                wight="273"
                height="162"
              ></v-img>

              <v-img
                src="https://media3.scdn.vn/img4/2023/06_07/fg7ilrODLj389wD0vbZM.png"
                wight="273"
                height="162"
              ></v-img>
            </div>

            <div class="d-flex justify-space-between mt-5">
              <v-img
                src="https://media3.scdn.vn/img4/2023/06_30/fsV7YCdA7HcJAriDiiwS.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="	https://media3.scdn.vn/img4/2023/06_07/NtjHwAsUNndzC3jMjBaT.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="	https://media3.scdn.vn/img4/2023/07_19/ZO0unvuSp3BPQltz7GC6.png"
                wight="273"
                height="162"
              ></v-img>

              <v-img
                src="	https://media3.scdn.vn/img4/2023/12_15/QTF9COIlOz6gKvUKwzZg.png"
                wight="273"
                height="162"
              ></v-img>
            </div>

            <div class="d-flex justify-space-between mt-5">
              <v-img
                src="https://media3.scdn.vn/img4/2023/07_19/AWaOHBzh6ooXhDCPeIw4.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="	https://media3.scdn.vn/img4/2023/08_11/zlU7DCLaqT8A5IrqwKDK.png"
                wight="273"
                height="162"
              ></v-img>
              <v-img
                src="https://media3.scdn.vn/img4/2023/07_19/ZO0unvuSp3BPQltz7GC6.png"
                wight="273"
                height="162"
              ></v-img>

              <v-img
                src="https://media3.scdn.vn/img4/2023/12_15/QTF9COIlOz6gKvUKwzZg.png"
                wight="273"
                height="162"
              ></v-img>
            </div>
          </div>

          <img
            class="image__2kfhH2L_ full__2WaIaSl1"
            src="https://media3.scdn.vn/img4/2023/11_13/vbxSBrljpq43GzDUF9nY.jpg"
            alt="Image"
            width="1495"
            height="632"
            style="opacity: 1"
          />
        </div>
      </v-main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Myhead from "@/components/Myhead.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "MUADEEView",
  components: {
    Myhead,
    Footer,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped>
.my {
  background-color: rgb(255, 222, 135);
}
.custom-tab {
  padding: 30px;
}
.image-container {
  position: relative;
  width: 238px;
  height: 237px;
}

.original-image {
  width: 100%;
  height: auto;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
}
.product-item__info:hover {
  border: 1px solid blue;
  color: rgb(230, 53, 215);
}
.label {
  position: absolute;
  top: 5px;
  right: 10px;
  border: 1px solid rgb(255, 205, 0);
  background-color: red;
  color: #ffffff;
  border-radius: 5px;
  font-size: 9px;
  padding: 3px;
}
</style>
