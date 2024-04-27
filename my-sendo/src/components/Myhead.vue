<template>
  <div class="myhead">
    <div>
      <div
        class="sticky-div"
        v-sticky
        style="
          background-color: #ff0000;
          color: #ffffff;
          box-shadow: 0 4px 6px rgba(255, 0, 0, 0.5);
        "
      >
        <div class="sticky-div-content">
          <v-container>
            <v-row>
              <v-col cols="2">
                <div class="d-flex">
                  <h1
                    style="
                      font-family: Brush Script MT cursive;
                      color: aliceblue;
                    "
                    @click="goToHome"
                  >
                    Sendo
                  </h1>
                  <router-link to="/menu">
                    <v-icon
                      class="white-icon mt-3 ml-5"
                      size="30"
                      style="color: #ffffff"
                      >mdi-widgets</v-icon
                    >
                  </router-link>
                </div>
              </v-col>

              <v-col cols="8">
                <v-autocomplete
                  append-inner-icon="mdi-microphone"
                  class="mt-2"
                  density="comfortable"
                  placeholder="Tìm trên Sendo"
                  prepend-inner-icon="mdi-magnify"
                  style="max-width: 750px"
                  theme="light"
                  variant="solo"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-autocomplete>
              </v-col>
              <v-col cols="2">
                <div class="d-flex">
                  <v-icon class="ma-4 pa-2" size="30">mdi-shopping</v-icon>
                  <v-btn
                    @click="loginFrom"
                    class="ma-4 pa-2 rounded"
                    style="color: #3f4b53; background-color: #ffffff"
                  >
                    Đăng nhập
                  </v-btn>

                  <div
                    class="login_form"
                    style="color: #3f4b53"
                    v-show="showLoginForm"
                  >
                    <div class="login_form_content rounded">
                      <div
                        class="d-flex align-end flex-column bg-white text-black pa-8"
                        @click="loginClose"
                      >
                        Thoát
                      </div>
                      <div>
                        <h2 class="d-flex align start ma-3">Xin chào,</h2>
                        <p class="d-flex align start mx-3 my-2">
                          Đăng nhập hoặc đăng ký tài khoản
                        </p>
                        <v-text-field
                          v-model="phoneNumberOrEmail"
                          label="Nhập số điện thoại "
                          prepend-icon="mdi-phone-email"
                          type="text"
                          class="ma-2"
                        ></v-text-field>
                        <v-btn style="color: #3f4b53; background-color: #ffffff"
                          >Tiếp tục >
                        </v-btn>
                      </div>

                      <div class="ma-10">
                        <div>Hoặc đăng nhập bằng</div>
                        <div>
                          <v-icon class="ma-2">mdi-google</v-icon
                          ><span
                            ><v-icon class="ma-2">mdi-facebook</v-icon></span
                          >
                          <span><v-icon class="ma-2">mdi-gmail</v-icon></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyHead",
  data() {
    return {
      showLoginForm: false,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    loginFrom() {
      this.showLoginForm = true;
    },
    loginClose() {
      this.showLoginForm = false;
    },
  },
});
</script>
<style scoped>
.login_form {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 5000;
}

.login_form_content {
  width: 400px;
  height: 500px;
  background-color: #fff;
}
.my-div {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-left: 50px;
  background-color: red;
  color: white;
  padding-top: 0;
}
.sticky-div {
  position: sticky;
  top: 0;
  z-index: 5200;
}
</style>
