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
                    class="ma-4 pa-2 rounded"
                    style="color: #3f4b53; background-color: #ffffff"
                  >
                    Đăng nhập
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>
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
              class="ma-4 pa-2 rounded"
              style="color: #3f4b53; background-color: #ffffff"
            >
              Đăng nhập
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyHead",

  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
});
</script>
<style scoped>
.custom-input {
  background-color: #fff !important;
}
.login_form {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  display: flex;
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  z-index: 5000;
}

.container {
  height: 350px;
}
</style>
