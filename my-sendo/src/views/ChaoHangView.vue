<template>
  <div class="chaohang">
    <div class="sticky-div" v-sticky>
      <div
        class="sticky-div-content"
        style="background-color: #ffffff; text-align: center"
      >
        <div
          class="d-flex justify-end mb-6"
          style="background-color: #3aaa35; color: #ffffff; font-size: 12px"
        >
          <img
            src="https://media3.scdn.vn/img4/2023/10_16/A23yrvp8On0B3PbAEpRM.png"
            width="16px"
            height="16px"
            class="ma-2"
          />
          <span><p class="ma-2">Chất lượng đảm bảo bởi</p></span>
          <img
            src="https://media3.scdn.vn/img4/2023/10_16/xoKW5ITSnPn3fuYpDUkb.png"
            width="24px"
            height="16px"
            class="ma-2"
          />
          <img
            src="https://media3.scdn.vn/img4/2023/10_16/gZKpWYFvlUybG4t1qTxz.png"
            width="16px"
            height="16px"
            class="ma-2"
          />

          <p class="ma-2 mr-15">Nay mua mai nhận</p>
        </div>

        <div style="font-size: 14px; font-weight: 600">
          <v-card>
            <v-row>
              <v-col cols="2">
                <img
                  src="https://media3.scdn.vn/img4/2023/10_16/HIJ2DGOZlohnkJBQxSVY.png"
                  width="64px"
                  height="48px"
                />
              </v-col>
              <v-col cols="10" class="d-flex justify-space-evenly">
                <p class="mt-2">Sendo fram là gì?</p>
                <p class="mt-2">Tầm nhìn-sứ mệnh</p>
                <p class="mt-2">Quy mô</p>
                <p class="mt-2">Hướng dẫn mua hàng</p>
                <p class="mt-2">Tải ứng dụng</p>
                <p class="mt-2">Đăng ký chào hàng</p>
                <p class="mt-2">Tin tức</p>
                <v-btn style="background-color: #3aaa35; color: #ffffff"
                  >Đăng ký đối tác</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="my-div">
        <div class="my-content">
          <v-container style="background-color: #ffffff">
            <h2
              style="
                text-align: center;
                color: #3aaa35;
                font-size: 32px;
                font-family: Roboto, sans-serif;
              "
              class="ma-4"
            >
              Quý Nhà Cung Cấp vui lòng nhập các thông tin sau
            </h2>
            <div>
              <p class="ma-2">Tên nhà cung cấp *</p>
              <v-text-field
                density="compact"
                label="Tên nhà cung cấp"
                variant="solo"
                hide-details
                single-line
              ></v-text-field>
            </div>
            <div>
              <p class="ma-2">Số điện thoại liên lạc *</p>
              <v-text-field
                density="compact"
                label="Nhập số điện thoại liên lạc"
                variant="solo"
                hide-details
                single-line
              ></v-text-field>
            </div>
            <div>
              <p class="ma-2">Địa chỉ emali*</p>
              <v-text-field
                density="compact"
                label="Nhập địa chỉ email"
                variant="solo"
                hide-details
                single-line
              ></v-text-field>
            </div>
            <div>
              <h3v class="ma-3"
                >Quý Nhà Cung Cấp có thể cung ứng hàng hoá cho:</h3v
              >
              <v-radio-group inline>
                <v-radio label="Sendo Farm miền Bắc" value="one"></v-radio>
                <v-radio label="Sendo Farm miền Nam" value="two"></v-radio>
                <v-radio label="Cả hai miền" value="three"></v-radio>
              </v-radio-group>
            </div>

            <div>
              <h3 class="ma-2">
                Quý Nhà Cung Cấp vui lòng chọn ngành hàng kinh doanh
              </h3>

              <v-tabs v-model="tab">
                <v-row>
                  <v-col cols="3">
                    <v-tab value="one" class="my-tab"
                      >Thực phẩm tươi sống</v-tab
                    ></v-col
                  >
                  <v-col cols="3"
                    ><v-tab value="two" class="my-tab"
                      >Thực phẩm khô</v-tab
                    ></v-col
                  >
                  <v-col cols="3"
                    ><v-tab value="three" class="my-tab"
                      >Phi thực phẩm</v-tab
                    ></v-col
                  >
                  <v-col cols="3"
                    ><v-tab value="four" class="my-tab"
                      >Mặt hàng khác</v-tab
                    ></v-col
                  >
                </v-row>
              </v-tabs>

              <v-window v-model="tab">
                <v-window-item value="one">
                  <div class="d-flex justify-space-between">
                    <v-checkbox
                      label="Rau củ quả"
                      v-model="selected"
                      value="Rau củ quả"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Trái cây"
                      v-model="selected"
                      value="Trái cây"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Thịt"
                      v-model="selected"
                      value="Thịt"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Thủy hải sản"
                      v-model="selected"
                      value="Thủy hải sản"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Sản phẩm đóng gói"
                      v-model="selected"
                      value="Sản phẩm đóng gói"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Hàng ký gửi"
                      v-model="selected"
                      value="Hàng ký gửi"
                      color="success"
                    ></v-checkbox>
                  </div>
                </v-window-item>

                <v-window-item value="two">
                  <div class="d-flex justify-space-between">
                    <v-checkbox
                      label="Đồ ăn"
                      v-model="selected"
                      value="Đồ ăn"
                      color="success"
                    ></v-checkbox>

                    <v-checkbox
                      label="Đồ uống"
                      v-model="selected"
                      value="Đồ uống"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Sữa"
                      v-model="selected"
                      value="Sữa"
                      color="success"
                    ></v-checkbox>
                    <v-checkbox
                      label="Hàng ký gửi"
                      v-model="selected"
                      value="Hàng ký gửi"
                      color="success"
                    ></v-checkbox>
                  </div>
                </v-window-item>

                <v-window-item value="three">
                  <div class="d-flex justify-space-between">
                    <v-checkbox
                      label="Đồ dùng nhà"
                      v-model="selected"
                      value="Đồ dùng nhà cửa"
                      color="success"
                    ></v-checkbox>
                  </div>
                </v-window-item>
                <v-window-item value="four">
                  <div class="d-flex justify-space-between">
                    <v-checkbox
                      label="Mặt hàng khác"
                      v-model="selected"
                      value="Mặt hàng khác"
                      color="success"
                    ></v-checkbox>
                  </div>
                </v-window-item>
              </v-window>
              <p>
                Các ngành hàng kinh doanh Quý Nhà Cung Cấp đã chọn:{{
                  selected
                }}
              </p>
            </div>
          </v-container>
          <div class="ma-2">
            <v-container class="mt-4" style="background-color: #ffffff">
              <h1 style="text-align: center; color: #3aaa35">
                Nhằm đẩy nhanh tiến độ hợp tác, Quý Nhà Cung Cấp có thể điền<br />
                các thông tin bên dưới để Sendo Farm dễ dàng đánh giá về sản<br />
                phẩm và quy mô NCC
                <span
                  ><v-icon @click="toggleContent">{{
                    showContent ? "mdi-chevron-down" : "mdi-chevron-right"
                  }}</v-icon></span
                >
              </h1>
              <div id="myCounter">
                <h4>Mô tả sản phẩm</h4>
                <v-textarea
                  :placeholder="'Thông tin giới thiệu sản phẩm (từ 50-200 ký tự):\n\n· Quy cách đóng gói\n· Loại bảo quản - Nhiệt độ\n· Hạn sử dụng\n· Giá sản phẩm'"
                  rows="6"
                ></v-textarea>
                <div
                  style="
                    font-size: 12px;
                    font-family: Roboto, sans-serif;
                    width: 300px;
                  "
                >
                  <v-file-input
                    label="Đính kèm hình ảnh về sản phẩm"
                    prepend-icon="mdi-camera"
                    accept="image/*"
                    variant="outlined"
                    multiple
                    rounded="xl"
                    validate-on="lazy submit"
                    chips
                  ></v-file-input>
                  <p class="ma-2">
                    Tải lên tối thiểu 3, tối đa 10 hình ảnh về sản phẩm
                  </p>

                  <v-file-input
                    label="Tải file cataloque, bảng giá"
                    multiple
                    variant="outlined"
                    accept="application/pdf,application/vnd.ms-excel"
                    rounded="xl"
                    chips
                  ></v-file-input>
                  <p class="ma-2">Định dạng file Excel hoặc PDF</p>
                </div>
                <div class="ma-3">
                  <h4>01. Giấy phép kinh doanh</h4>
                  <v-radio-group inline>
                    <v-radio
                      label="Có"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Không"
                      value="two"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <div class="ma-3">
                  <h4>02. Giấy chứng nhận ATTP</h4>
                  <v-radio-group inline>
                    <v-radio
                      label="Có"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Không"
                      value="two"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <div class="ma-3">
                  <h4>
                    03. Giấy tiếp nhận đăng ký công bố/Hồ sơ tự công bố sản phẩm
                  </h4>
                  <v-radio-group inline>
                    <v-radio
                      label="Có"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Không"
                      value="two"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <div class="ma-3">
                  <h4>04. Quý nhà cung cấp (NCC) là:</h4>
                  <v-radio-group>
                    <v-radio
                      label="Dưới 10.000 đơn vị sản phẩm"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="NCC nhập khẩu trực tiếp từ nước ngoài"
                      value="two"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <div class="ma-3">
                  <h4>
                    05. Khả năng cung ứng của Quý nhà cung cấp trong tháng đạt:
                  </h4>
                  <v-radio-group>
                    <v-radio
                      label="NCC trực tiếp sản xuất trong nước"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Từ 10.000 -> 100.000 đơn vị sản phẩm"
                      value="two"
                      color="success"
                    ></v-radio>

                    <v-radio
                      label="Từ 100.000 -> 500.000 đơn vị sản phẩm"
                      value="three"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Trên 500.000 đơn vị sản phẩm"
                      name="four"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <div class="ma-3">
                  <h4>
                    06. Thời gian giao hàng đến kho: tối đa 2 ngày kể từ ngày
                    nhận đơn hàng
                  </h4>
                  <v-radio-group inline>
                    <v-radio
                      label="Có"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Không"
                      value="two"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <div class="ma-3">
                  <h4>
                    07. Năng lực vận chuyển và giao hàng: Vận chuyển và giao
                    trực tiếp đến các Kho
                  </h4>
                  <v-radio-group inline>
                    <v-radio
                      label="Có"
                      value="one"
                      class="mr-10"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="Không"
                      value="two"
                      color="success"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </v-container>
          </div>
        </div>
        <div class="d-flex justify-center ma-5">
          <v-btn class="my-btn mt-5 rounded-xl">Hoàn tất chào hàng</v-btn>
        </div>
      </div>
      <div style="background-color: #27343e; color: #ffffff; font-size: 14px">
        <v-container>
          <v-row>
            <v-col cols="6">
              <div>
                <p>
                  Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
                </p>
                <p class="mt-2">
                  Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần
                  thứ 20, ngày 26/04/2022.
                </p>
                <p class="mt-2">Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
                <p class="mt-2">
                  Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01,
                  Đường Tân Thuận, Khu chế <br />xuất Tân Thuận, Phường Tân
                  Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
                </p>
                <p class="mt-2">Email: lienhe@sendo.vn</p>
              </div>
            </v-col>
            <v-col cols="6">
              <div>
                <p>Tải ứng dụng đối tác Sendo Farm</p>
                <p>Thực phẩm tươi sạch, chất lượng đảm bảo bởi FPT</p>
                <p class="mt-5">
                  <img
                    src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                    width="120"
                    height="40"
                  />
                  <span class="mx-1"
                    ><img
                      src="	https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                      width="120"
                      height="40"
                    />
                  </span>
                </p>
                <p class="mt-2">
                  <img
                    src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                    width="108"
                    height="33"
                  />
                  <span class="mx-2">
                    <img
                      src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                      width="109"
                      height="33"
                    />
                  </span>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    showContent: true,
    selected: [],
  }),
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;

      const myCounter = document.getElementById("myCounter");
      myCounter.style.display =
        myCounter.style.display === "none" ? "block" : "none";
    },
  },
};
</script>
<style scoped>
.sticky-div {
  position: sticky;
  top: 0;
  z-index: 100; /* Đảm bảo div nằm trên các element khác */
}

.container {
  min-height: 500px; /* Đảm bảo div cha có chiều cao tối thiểu */
}
.my {
  background-color: #3aaa35;
  color: #ffffff;
  font-size: 12px;
}
.my-div {
  background-image: url("https://media3.scdn.vn/img4/2024/02_26/ypHO7v4MPW8genYozjad.png");
  background-color: #e9e2e2;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
.my-tab {
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  color: #3aaa35;
}
.my-tab:focus {
  color: #ffffff;
  background-color: #3aaa35;
}
.my-content {
  padding-top: 100px;
}
.my-btn {
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  height: 50px;
  color: #ffffff;
  background-color: rgb(255, 106, 0);
}
.my-btn:focus {
  background-color: blue;
}
#myCounter {
  display: none;
}
</style>
