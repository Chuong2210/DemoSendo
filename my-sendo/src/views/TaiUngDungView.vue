<template>
  <div class="tai-ung-dung" style="position: relative">
    <div>
      <div style="background-color: rgb(196, 3, 32)">
        <div
          style="background-color: red; color: #fff; margin: 0; padding: 5px"
        >
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 120px;
            "
          >
            <div>
              <v-icon>mdi-download</v-icon>
              <span @click="goTo">Tải ứng dụng</span>
              <span class="mx-4">Chăm sóc khách hàng</span>
            </div>
            <div>
              <v-icon size="25">mdi-account-circle</v-icon>
              <span class="ml-1">Đăng nhập</span>
            </div>
          </div>
        </div>
        <div
          style="background-color: red; color: #fff; margin: 0"
          class="sticky-div"
          v-sticky
        >
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 100px;
            "
          >
            <div class="ma-2">
              <router-link to="/">
                <v-img
                  src="../assets/logo1.png"
                  width="44px"
                  height="44px"
                ></v-img
              ></router-link>
            </div>
            <div class="ma-2">
              <v-icon size="40">mdi-menu-open</v-icon>
              <span class="ma-2">TẤT CẢ DANH MỤC</span>
            </div>

            <v-text-field
              variant="solo"
              label="Tìm kiếm trên sendo"
              density="compact"
              hide-details
              single-line
              style="width: 300px"
            />

            <v-btn class="ma-1 rounded -lg" color="#f5a623">
              <v-icon size="25" color="white">mdi-magnify</v-icon>
              <span style="color: white">Tìm kiếm</span>
            </v-btn>

            <v-icon size="40" class="ml-10 mr-4 my-2">mdi-cart</v-icon>
          </div>
        </div>
        <v-img
          src="https://media3.scdn.vn/img4/2021/03_16/NMPGY1ioeGu8WX5K7tEC.jpg"
        ></v-img>
        <div class="d-flex justify-space-evenly">
          <img
            src="https://media3.scdn.vn/img4/2021/03_15/DkrQro2Dfagqlqk9zn8F.png"
            width="440"
            height="169"
          />
          <img
            src="https://media3.scdn.vn/img4/2021/03_15/258xdJ7qXe7oCA2bzz0I.png"
            width="440"
            height="169"
          />
          <img
            src="https://media3.scdn.vn/img4/2021/03_15/aega7GQoA4GYHKh3QpH3.png
"
            width="440"
            height="169"
          />
        </div>
        <v-img
          src="https://media3.scdn.vn/img2/2018/10_26/9n2rS4.png"
          wight="750"
          height="156"
        ></v-img>
        <div class="mx-15">
          <div class="d-flex justify-space-around mt-5">
            <img
              src="https://media3.scdn.vn/img2/2018/10_26/3sfD7r.png"
              alt="Miễn phí vận chuyển"
              wight="215"
              height="200"
            />
            <img
              src="https://media3.scdn.vn/img2/2018/10_26/L6fA0b.png"
              alt="Siêu nhiều hàng tốt"
              wight="215"
              height="200"
            />
            <img
              src="https://media3.scdn.vn/img2/2018/10_26/AAmcQe.png"
              alt="Ưu đãi hấp dẫn"
              wight="215"
              height="200"
            />
            <img
              src="https://media3.scdn.vn/img2/2018/10_26/RJ8Ukz.png"
              alt="Gian hàng chính hãng"
              wight="215"
              height="200"
            />
            <img
              src="https://media3.scdn.vn/img2/2018/11_28/K3k2Ij.png"
              alt="Tiện ích Sendo"
              wight="215"
              height="200"
            />
            <img
              src="https://media3.scdn.vn/img2/2018/10_26/OErSK2.png"
              alt="Thanh toán tiện lợi"
              wight="215"
              height="200"
            />
          </div>
          <div class="d-flex mt-5">
            <img
              src="https://media3.scdn.vn/img3/2019/8_28/NENVmL.png"
              wight="665"
              height="266"
              alt="Giảm thêm 10% cho app"
            />
            <img
              src="	https://media3.scdn.vn/img3/2019/1_7/Zh46LE.jpg"
              alt="Cửa hàng đồng giá"
              wight="665"
              height="266"
            />
          </div>
        </div>
        <v-img
          src="https://media3.scdn.vn/img2/2018/10_29/ptUH1F.png"
          class="mt-10"
        ></v-img>
      </div>
      <diV style="display: block">
        <div class="mx-16">
          <div style="font-size: 14px; text-align: center" class="mx-10">
            <v-row class="ma-5">
              <v-col cols="auto" class="my-col" @click="handleColumnClick">
                <v-img
                  src="https://pwa-web.scdn.vn/static/media/benefit_1.d1c4f276.svg"
                  width="92"
                  height="92"
                  class="mx-12"
                ></v-img>
                <p style="font-weight: bold; text-transform: uppercase">
                  Siêu nhiều hàng tốt
                </p>
                <p>Cần gì cũng có 26 ngành hàng & <br />10 triệu sản phẩm</p>
              </v-col>
              <v-col cols="auto" class="my-col" @click="handleColumnClick">
                <v-img
                  src="		https://pwa-web.scdn.vn/static/media/benefit_2.1b86fd66.svg"
                  width="92"
                  height="92"
                  class="mx-11"
                ></v-img>
                <p style="font-weight: bold; text-transform: uppercase">
                  Siêu yên tâm
                </p>
                <p>Miễn phí đổi trả 48h</p>
              </v-col>
              <v-col cols="auto" class="my-col" @click="handleColumnClick">
                <v-img
                  src="	https://pwa-web.scdn.vn/static/media/benefit_3.8c790757.svg"
                  width="92"
                  height="92"
                  class="mx-12"
                ></v-img>
                <p style="font-weight: bold; text-transform: uppercase">
                  Siêu tiện lợi
                </p>
                <p>Mạng lưới vận chuyển toàn quốc <br />mua gì cũng có</p>
              </v-col>
              <v-col cols="auto" class="my-col" @click="handleColumnClick">
                <v-img
                  src="	https://pwa-web.scdn.vn/static/media/benefit_4.9504e1ef.svg"
                  width="92"
                  height="92"
                  class="mx-12"
                ></v-img>
                <p style="font-weight: bold; text-transform: uppercase">
                  Siêu tiết kiệm
                </p>
                <p>
                  Giá hợp lý vừa túi tiền.Luôn có nhiều <br />chương trình
                  khuyên mãi
                </p>
              </v-col>
              <v-col cols="auto" class="my-col">
                <v-img
                  src="	https://pwa-web.scdn.vn/static/media/benefit_5.85c0063d.png
"
                  width="241"
                  height="75"
                  class="mx-11"
                ></v-img>
                <p style="font-weight: bold; text-transform: uppercase">
                  Tải ứng dụng sendo
                </p>
                <p>
                  Mang cả thế giới mua sắm vào trong <br />
                  tầm tay bạn
                </p>
              </v-col>
            </v-row>
          </div>
        </div>
      </diV>

      <div style="font-size: 16px; background-color: #27343e; color: #ffffff">
        <v-container
          ><v-row>
            <v-col cols="2">
              <p style="text-transform: uppercase; font-weight: bold">
                Về chúng tôi
              </p>
              <p style="font-size: 14px">
                Giới thiệu Sendo.vn<br />Giới thiệu SenMaill<br />Quy chế hoạt
                động<br />Chính sách bảo mật<br />Giao hàng và nhận hàng
                <br />
                Điều khoản sử dụng
              </p>
            </v-col>
            <v-col cols="2">
              <p style="text-transform: uppercase; font-weight: bold">
                Dành cho người mua
              </p>
              <p style="font-size: 14px">
                Giải quyết khiếu nại<br />Hướng dẫn mua hàng<br />Chính sách đổi
                trả<br />Chăm sóc khách hàng <br />
                Nap tiền điện thoại
              </p>
            </v-col>
            <v-col cols="2">
              <p style="text-transform: uppercase; font-weight: bold">
                Dành cho người bán
              </p>
              <p style="font-size: 14px">
                Quy định đối với người bán<br />Chính sách bán hàng<br />Hệ
                thống tiêu chí bán hàng <br />Mở shop trên sendo
              </p>
            </v-col>

            <v-col cols="6">
              <p
                style="text-transform: uppercase; font-weight: bold"
                class="my-2"
              >
                Đăng ký nhận bản tin ưu đãi khủng từ Sendo
              </p>
              <div style="display: flex; justify-content: space-between">
                <v-text-field
                  variant="solo"
                  label="Email của bạn là"
                  density="compact"
                  hide-details
                  single-line
                  style="width: 300px"
                />

                <v-btn class="ma-1 rounded -lg" color="red">
                  <span style="color: white">Đăng ký</span>
                </v-btn>
              </div>
              <label for="nam" class="mx-2 mt-2">Nam</label>
              <input type="radio" id="nam" name="gioi_tinh" value="nam" />

              <label for="nu" class="mx-2 mt-2">Nữ</label>
              <input type="radio" id="nu" name="gioi_tinh" value="nu" />
            </v-col>
          </v-row>
        </v-container>
        <hr class="mx-5" style="color: #ffffff" />
        <v-container
          ><div>
            <p style="direction: rtl">Copyright © 2012 Sendo.vn</p>
            <p style="direction: rtl">Công ty Cổ phần Công nghệ Sen Đỏ</p>
            <p style="direction: rtl">
              Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ
              20, ngày 26/04/2022.
            </p>
            <p style="direction: rtl">
              Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
            </p>
            <p style="direction: rtl">
              Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường
              Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7,
              Thành phố Hồ Chí Minh, Việt Nam.
            </p>
            <p style="direction: rtl">Email: lienhe@sendo.vn</p>
            <p style="direction: rtl">
              <img
                src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                width="108px"
                height=" 33px"
              />

              <span class="mx-2"
                ><img
                  src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                  width="108px"
                  height=" 33px"
              /></span>
            </p></div
        ></v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaiUngDung",

  methods: {
    handleColumnClick() {
      this.$router.push("huongdan");
    },
    goTo() {
      this.$router.push("/tai-ung-dung");
    },
  },
};
</script>

<style scoped>
.sticky-div {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
