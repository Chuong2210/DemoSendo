<template>
  <div class="home">
    <div>
      <div
        class="d-flex flex-row pl-15"
        style="background-color: #e00404; color: #ffffff"
      >
        <p class="ma-2 ml-16">Tải ứng dụng</p>
        <p class="ma-2">Chăm sóc khách hàng</p>
        <p class="ma-2" @click="goToChaoHang">Nhà cung cấp</p>
      </div>

      <div
        class="sticky-div"
        v-sticky
        style="
          background-color: #ff0000;
          color: #ffffff;
          box-shadow: 0 4px 6px rgba(255, 0, 0, 0.5);
        "
      >
        <MyheadVue class="sticky-div" v-sticky></MyheadVue>
      </div>

      <CustomNav></CustomNav>
      <v-main>
        <v-container
          style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)"
          class="mt-4 rounded-lg"
        >
          <div class="flash-sale">
            <h2 style="font-family: Galada" class="pa-2">
              <v-icon color="yellow">mdi-lightning-bolt</v-icon>FLASH SALE
            </h2>
            <div class="time-display">{{ formattedTime }}</div>
          </div>

          <v-car>
            <v-carousel
              height="auto"
              hide-delimiters
              hide-controls
              show-arrows="hover"
              :interval="2000"
            >
              <v-carousel-item class="ma-5">
                <v-row>
                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/03_31/hSVs41ufb0JSTBSwLUNk_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">15.000đ</p>
                      <p style="font-size: 12px">
                        <del>49.000</del>
                        <span style="color: #ee4242">-70%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img4/2022/10_29/5Ao8N0rNftueoHQIzAnm_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">26.000đ</p>
                      <p style="font-size: 12px">
                        <del>40.000</del>
                        <span style="color: #ee4242">-35%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2022/11_01/thCGSdmomGOqTx9kKlve_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">71.000đ</p>
                      <p style="font-size: 12px">
                        <del>120.000</del>
                        <span style="color: #ee4242">-41%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2023/04_08/NcSXLWVP8ZjQuZFk9JMS_simg_de2fe0_250x250_maxb.png"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">145.000đ</p>
                      <p style="font-size: 12px">
                        <del>399.000</del>
                        <span style="color: #ee4242">-64%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img4/2024/04_01/4JicvrZyHuikCk7w8t2y_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">15.000đ</p>
                      <p style="font-size: 12px">
                        <del>59.000</del>
                        <span style="color: #ee4242">-75%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2023/04_03/PGYnmz9rGf9wQ6hQ66HP_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">185.000đ</p>
                      <p style="font-size: 12px">
                        <del>222.000</del>
                        <span style="color: #ee4242">-15%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img4/2020/10_24/FhaFVGHBZGFJXVVRExDk_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">79.000đ</p>
                      <p style="font-size: 12px">
                        <del>120.000</del>
                        <span style="color: #ee4242">-35%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2023/09_08/6E1ziWKLiTD2Et5MzdDy_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">39.000đ</p>
                      <p style="font-size: 12px">
                        <del>90.000</del>
                        <span style="color: #ee4242">-75%</span>
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>

              <v-carousel-item class="ma-5">
                <v-row>
                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img2/2017/4_27/JJo6E8_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>

                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">67.000đ</p>
                      <p style="font-size: 12px">
                        <del>109.000</del>
                        <span style="color: #ee4242">-33%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2024/04_06/NBI6wuLThn1rDaAKzb5m_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">340.000đ</p>
                      <p style="font-size: 12px">
                        <del>529.000</del>
                        <span style="color: #ee4242">-36%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2021/11_25/qZGEPvF36WIeYBEMJzOi_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">54.000đ</p>
                      <p style="font-size: 12px">
                        <del>120.000</del>
                        <span style="color: #ee4242">-55%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img3/2019/8_16/XbudeO_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">24.000đ</p>
                      <p style="font-size: 12px">
                        <del>39.000</del>
                        <span style="color: #ee4242">-39%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img2/2017/5_7/EbaaJu_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">68.000đ</p>
                      <p style="font-size: 12px">
                        <del>120.000</del>
                        <span style="color: #ee4242">-45%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2023/04_03/PGYnmz9rGf9wQ6hQ66HP_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">185.000đ</p>
                      <p style="font-size: 12px">
                        <del>222.000</del>
                        <span style="color: #ee4242">-15%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="https://media3.scdn.vn/img4/2023/05_19/T6E0abLVtNfB3CjPHe3j_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">79.000đ</p>
                      <p style="font-size: 12px">
                        <del>145.000</del>
                        <span style="color: #ee4242">-46%</span>
                      </p>
                    </div>
                  </v-col>

                  <v-col class="my-col-one">
                    <v-img
                      src="	https://media3.scdn.vn/img4/2023/05_13/W7Zss3fMAi6Dlxe951hK_simg_de2fe0_250x250_maxb.jpg"
                    ></v-img>
                    <div class="mt-2">
                      <p class="ma-1" style="color: #ee4242">89.000đ</p>
                      <p style="font-size: 12px">
                        <del>189.000</del>
                        <span style="color: #ee4242">-53%</span>
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-car>
        </v-container>

        <v-container>
          <v-sheet :elevation="1" class="rounded-lg">
            <div class="ma-2">
              <v-icon>mdi-check-outline</v-icon>
              <span class="font-weight-bold text-left ml-2"
                >Shop tiêu biểu</span
              >
            </div>

            <div class="ma-2">
              <v-carousel
                hide-delimiters
                show-arrows="hover"
                cycle
                hide-delimiter-background
                height="auto"
              >
                <v-carousel-item src="../assets/a1.png"> </v-carousel-item>
                <v-carousel-item src="../assets/a2.png"> </v-carousel-item>
                <v-carousel-item src="../assets/a3.png" @click="goToMuadee">
                </v-carousel-item>
                <v-carousel-item src="../assets/a4.png"> </v-carousel-item>
                <v-carousel-item src="../assets/a5.jpg" @click="goToMuadee">
                </v-carousel-item>
              </v-carousel>
            </div>
            <div>
              <v-car>
                <v-carousel height="auto" hide-controls hide-delimiters>
                  <v-carousel-item class="ma-5">
                    <v-row>
                      <v-col cols="2" class="my-col">
                        <v-img
                          src="https://media3.scdn.vn/img4/2024/04_05/Pe5SLVHZ9kcxbzmVMxze.png"
                        ></v-img>
                        <p class="mt-2">Giảm đến 50%</p>
                      </v-col>

                      <v-col cols="2" class="my-col">
                        <v-img
                          src="	https://media3.scdn.vn/img4/2024/04_05/zk7dayTr27IALwONxzMJ.png"
                        ></v-img>
                        <p class="mt-2">Giảm đến 50%</p>
                      </v-col>

                      <v-col cols="2" class="my-col">
                        <v-img
                          src="	https://media3.scdn.vn/img4/2024/04_05/3KVYeOV4dDRL9R78i6GH.png"
                        ></v-img>

                        <p class="mt-2">Giảm 50%++</p>
                      </v-col>

                      <v-col cols="2" class="my-col">
                        <v-img
                          src="	https://media3.scdn.vn/img4/2024/04_05/LRDqE4eSXTFEO4B6M7ci.png"
                        ></v-img>

                        <p class="mt-2">Chỉ từ 2k</p>
                      </v-col>
                      <v-col cols="2" class="my-col">
                        <v-img
                          src="https://media3.scdn.vn/img4/2024/03_31/tiVt5l7g1fVpeRremJ0W.png"
                        ></v-img>

                        <p class="mt-2">Giảm đến 50%++</p>
                      </v-col>
                    </v-row>
                  </v-carousel-item>

                  <v-carousel-item>
                    <v-row>
                      <v-col cols="2" class="my-col">
                        <v-img
                          src="		https://media3.scdn.vn/img4/2024/04_05/nEZRCN5dYeMzmep1FJnH.png"
                        ></v-img>

                        <p class="mt-2">Từ 1k</p>
                      </v-col>
                      <v-col cols="2" class="my-col">
                        <v-img
                          src="https://media3.scdn.vn/img4/2024/04_05/DVVpBJSiJDyiYmi74biT.png"
                        ></v-img>
                        <p class="mt-2">50%++</p>
                      </v-col>

                      <v-col cols="2" class="my-col">
                        <v-img
                          src="https://media3.scdn.vn/img4/2024/04_05/Od93XvqHw9mKeUmOg2jQ.png"
                        ></v-img>
                        <p class="mt-2">Từ 2k</p>
                      </v-col>
                      <v-col cols="2" class="my-col">
                        <v-img
                          src="	https://media3.scdn.vn/img4/2024/03_31/ov6MEVH0sZUjpM1uBEoq.png"
                        ></v-img>

                        <p class="mt-2">Từ 20k</p>
                      </v-col>
                      <v-col cols="2" class="my-col">
                        <v-img
                          src="	https://media3.scdn.vn/img4/2024/04_05/Lh5nleqyeyG1lWWw2qOJ.png"
                        ></v-img>

                        <p class="mt-2">Gia dụng từ 1k</p>
                      </v-col>
                    </v-row>
                  </v-carousel-item>
                </v-carousel>
              </v-car>
            </div>
          </v-sheet>
        </v-container>
        <ContentVue></ContentVue>
        <ProductsHome></ProductsHome>
      </v-main>

      <FooterVue />
      <v-container>
        <h3 class="ma-2">
          Top tìm kiếm
          <span>
            <v-icon @click="toggleContent">{{
              showContent ? "mdi-chevron-down" : "mdi-chevron-right"
            }}</v-icon>
          </span>
        </h3>

        <div style="color: blue; font-size: 16px">
          <v-row>
            <v-col-auto class="ma-1">Đồng hồ</v-col-auto>
            <v-col-auto class="ma-1">SHOPPING MAILL</v-col-auto>
            <v-col-auto class="ma-1">Thế giới di động</v-col-auto>
            <v-col-auto class="ma-1">Bánh trung thu</v-col-auto>
            <v-col-auto class="ma-1">Black friday</v-col-auto>
            <v-col-auto class="ma-1">Tivi</v-col-auto>
            <v-col-auto class="ma-1">Mỹ phẩm hàn quốc</v-col-auto>
            <v-col-auto class="ma-1">Kem chống năng</v-col-auto>
            <v-col-auto class="ma-1">Shoope</v-col-auto>
            <v-col-auto class="ma-1">Đồ chơi nấu ăn</v-col-auto>
            <v-col-auto class="ma-1">Bàn phím cơ</v-col-auto>
          </v-row>
        </div>
        <div id="myCounter" style="color: blue; font-size: 16px">
          <v-row>
            <v-col-auto class="ma-1">Corona virut</v-col-auto>
            <v-col-auto class="ma-1">Quạt trần</v-col-auto>
            <v-col-auto class="ma-1">Loa bluetooth</v-col-auto>
            <v-col-auto class="ma-1">Áo khoác nam</v-col-auto>
            <v-col-auto class="ma-1">Áo khoác nữ</v-col-auto>
            <v-col-auto class="ma-1">Đồng hồ nam</v-col-auto>
            <v-col-auto class="ma-1">IPHONE 6</v-col-auto>
            <v-col-auto class="ma-1">Đồng hồ nữ</v-col-auto>
            <v-col-auto class="ma-1">Xe đạp</v-col-auto>
            <v-col-auto class="ma-1">Vali kéo</v-col-auto>
            <v-col-auto class="ma-1">Balo hàng hiệu</v-col-auto>
            <v-col-auto class="ma-1">Xe Tay ga</v-col-auto>
            <v-col-auto class="ma-1">Áo dài</v-col-auto>
            <v-col-auto class="ma-1">Áo cưới</v-col-auto>
            <v-col-auto class="ma-1">Áo hoodiE</v-col-auto>
            <v-col-auto class="ma-1">Giay nike</v-col-auto>
            <v-col-auto class="ma-1">adidas</v-col-auto>
            <v-col-auto class="ma-1">Mắm ruốc</v-col-auto>
            <v-col-auto class="ma-1">Tiki</v-col-auto>
            <v-col-auto class="ma-1">Nhà hàng</v-col-auto>
            <v-col-auto class="ma-1">quần áo thời trang</v-col-auto>
            <v-col-auto class="ma-1">Lazada</v-col-auto>
            <v-col-auto class="ma-1">Máy ảnh</v-col-auto>
            <v-col-auto class="ma-1">Đồng hồ thông minh</v-col-auto>
            <v-col-auto class="ma-1">bộ trang điểm</v-col-auto>
            <v-col-auto class="ma-1">khau trang</v-col-auto>
            <v-col-auto class="ma-1">quan jean nam</v-col-auto>
            <v-col-auto class="ma-1">Váy nữ</v-col-auto>
            <v-col-auto class="ma-1">sữa rửa măt nam</v-col-auto>
            <v-col-auto class="ma-1">Thảo dược</v-col-auto>
            <v-col-auto class="ma-1">khẩu trang 5d</v-col-auto>
            <v-col-auto class="ma-1">trang trí</v-col-auto>
          </v-row>
        </div>
      </v-container>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CustomNav from "@/components/CustomNav.vue";
import ContentVue from "../components/Content_home.vue";
import ProductsHome from "@/components/Product.vue";
import FooterVue from "../components/Footer.vue";
import MyheadVue from "../components/Myhead.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CustomNav,
    ContentVue,
    ProductsHome,
    FooterVue,
    MyheadVue,
  },
  data() {
    return {
      remainingTime: 7200,
      showContent: true,
    };
  },
  created() {
    this.startCountdown();
  },

  computed: {
    formattedTime() {
      const seconds = this.remainingTime % 60;
      const minutes = Math.floor((this.remainingTime / 60) % 60);
      const hours = Math.floor(this.remainingTime / 3600);
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    },
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime -= 1;
        }
      }, 1000);
    },

    goToHome() {
      this.$router.push("/");
    },
    goToChaoHang() {
      this.$router.push("/chaohang");
    },
    goToMuadee() {
      this.$router.push("/muadee");
    },
    toggleContent() {
      this.showContent = !this.showContent;
      const myCounter = document.getElementById("myCounter");
      myCounter.style.display =
        myCounter.style.display === "none" ? "block" : "none";
    },
  },
});
</script>
<style scoped>
.custom-col {
  width: 120px;
  text-align: center;
  padding: 10px;
  transition: transform 0.2s;
}

.Silder-product-content {
  width: 200px;
  height: 200px;
  margin: 5px;
  white-space: normal;
  box-shadow: 0 0 10px rgba(171, 168, 168, 0.9);
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
}

.time-display {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-top: 12px;
  margin-left: 10px;
}
.flash-sale {
  display: flex;
}
.my-col {
  text-align: center;
  border-radius: 10px;
  margin: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-weight: 600;
}
.my-col-one {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 10px;
  border: 1px solid silver;
}

.custom-input {
  background-color: #fff !important;
}

.container {
  height: 350px;
}
.sticky-div {
  position: sticky;
  top: 0;
  z-index: 5200;
}
</style>
