<template>
  <div class="content">
    <v-container
      style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)"
      class="mt-2 rounded-lg"
    >
      <div class="ma-4">
        <img
          src="https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png"
          width="29"
          height="29"
          class="center-image"
        />
        <span class="my-span">Tiện ích cho bạn</span>
        <span class="my-span2">Xem tất cả</span>

        <v-row class="ma-4 custom-row">
          <v-col class="custom-col" style="background-color: #fef2f2">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/oTS47qm4NHgSucqXKo50.png"
                width="44"
                height="44"
              />
            </div>
            <div>Hóa đơn điện</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #e2f6f7">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/3ZXUlSIWwBXgNyzkjHie.png"
                width="44"
                height="44"
              />
            </div>
            <div>Máy bay giá rẻ</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #fdede2">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/VTLUgFa6KOdIT1jdOYcs.png"
                width="44"
                height="44"
              />
            </div>
            <div>Mua thẻ game</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #e7effe">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_17/6XeWaJY0gq5rf5g8B0AY.png"
                width="44"
                height="44"
              />
            </div>
            <div>Mua thẻ cào</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #fdede2">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_23/udI33vs2vfdAX1XHPcQa.png"
                width="44"
                height="44"
              />
            </div>
            <div>Ưu đãi đối tác</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #e2e6f2">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_17/NVVKXKYImjyVVLmTrh5u.png"
                width="44"
                height="44"
              />
            </div>
            <div>Nạp tiền điện thoại</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #e7effe">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/UxOzTiyxgMXe1eIBgxRp.png"
                width="44"
                height="44"
              />
            </div>
            <div>Hóa đơn nước</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #e2f6f7">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/Ju39kvVpMR8vdKYz73Hn.png"
                width="44"
                height="44"
              />
            </div>
            <div>Hóa đơn internet</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #e2f6f7">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/J3Z3cu8Wp6JIvTmr7TQB.png"
                width="44"
                height="44"
              />
            </div>
            <div>Vé tàu</div>
          </v-col>

          <v-col class="custom-col" style="background-color: #ecebf7">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/11_22/RsogGM6TgtmZcGIZoT1m.png"
                width="44"
                height="44"
              />
            </div>
            <div>Vé xe</div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ContentVue",
};
</script>

<style scoped>
.my-span {
  font-size: 18px;
  font-weight: 600;
  margin: 20px;
  padding: 4px;
  align-content: space-around;
  font-family: "Roboto", sans-serif;
}
.my-span2 {
  color: blue;
  float: right;
  padding: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.center-image {
  margin: 0 auto;
}
.custom-row {
  font-size: 12px;
  text-align: center;
}
.custom-col {
  text-align: center;
  padding: 14px 16px;
  margin: 0px 16px 0px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
