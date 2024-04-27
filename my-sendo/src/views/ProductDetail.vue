<template>
  <div class="productDetail">
    <Myhead class="sticky-div" v-sticky></Myhead>
    <v-main>
      <div style="display: flex" class="mt-5 mx-16">
        <v-sheet class="ma-5 pa-5 rounded-lg" :elevation="1">
          <div style="float: left; width: 545px">
            <div class="image-container">
              <v-carousel
                hide-delimiters
                class="overnal-image"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              >
                <v-carousel-item
                  v-for="(image, i) in images"
                  :key="i"
                  :src="image.src"
                  cover
                ></v-carousel-item>
              </v-carousel>
              <img :src="`${product.overLay}`" class="overlay-image" />
            </div>
            <div class="mt-5">
              <ul class="carousel-indicators">
                <li
                  v-for="(image, i) in images"
                  :key="i"
                  :class="{ active: i === activeIndex }"
                >
                  <img
                    :src="image.src"
                    alt=""
                    class="carousel-indicator-image"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div style="float: right; width: 743px" class="mx-2">
            <div
              class="_3141-JkXso0 d7ed-fdSIZS d7ed-w9YXDo d7ed-UkcyG6"
              style="
                background-image: url(https://media3.scdn.vn/img4/2020/06_18/FBnN0sGbAeXbPuZ7IIWp.png);
              "
            >
              <img
                src="https://media3.scdn.vn/img4/2020/06_18/jaGsAfx1dzgHf82AyWSI.png"
                alt="flash-sale"
                class="_3141-OQ2g2F"
                wight="157"
                height="40"
              />
            </div>
            <div class="mt-3">
              <img
                src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                height="16"
                width="44"
              />
              <span
                style="font-size: 20px; font-weight: 600; letter-spacing: 2px"
              >
                {{ product.name }}</span
              >

              <p class="mt-1">Thương hiệu:OEM</p>

              <p
                style="
                  font-size: 24px;
                  font-family: Roboto, sans-serif;
                  color: red;
                  font-weight: 600;
                "
                class="mt-3"
              >
                {{ formatCurrency(product.salePrice) }}
              </p>
              <p>
                <del style="font-size: 12px; opacity: 0.6">{{
                  formatCurrency(product.originalPrice)
                }}</del>
                <span style="color: #ee2624; font-size: 18px" class="mx-2">{{
                  product.discount
                }}</span>
              </p>

              <div class="mt-8 d-flex justify-start">
                <span style="font-size: 16px; color: blue" class="mt-1">
                  {{ product.purchases }}
                </span>
                <div class="mx-4 mt-1" style="opacity: 0.7">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2"
                    style="color: rgb(111, 120, 126); width: 16px; height: 16px"
                  >
                    <path
                      d="M12 2c2.489 0 4.672 1.815 4.966 4h2.881a2 2 0 0 1 1.98 2.283l-1.714 12A2 2 0 0 1 18.133 22H5.867a2 2 0 0 1-1.98-1.717l-1.714-12A2 2 0 0 1 4.153 6h2.88C7.329 3.815 9.512 2 12 2ZM7 8H4.153l1.714 12h12.266l1.714-12H17v2h-2V8H9v2H7V8Zm5-4c-1.398 0-2.624.938-2.928 2h5.856c-.304-1.062-1.53-2-2.928-2Z"
                      fill="#6F787E"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span>{{ product.Evaluate }}</span>
                </div>
              </div>

              <div class="mt-3 d-flex">
                <p class="mt-2">Chọn số lượng:</p>
                <div class="mx-15">
                  <button
                    @click="decrement"
                    style="background-color: rgb(200, 200, 200)"
                    class="pa-2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <g
                        id="24-/-basic-/-icon24_minus_default"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          id="icon-background"
                          fill="#6F787E"
                          fill-rule="nonzero"
                          d="M22 11v2H2v-2z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <span
                    style="
                      font-size: 20px;
                      border: 1px solid rgb(200, 200, 200);
                    "
                    class="px-4 py-2 ma-1"
                    >{{ count }}</span
                  >
                  <button
                    @click="increment"
                    style="background-color: rgb(200, 200, 200)"
                    class="pa-2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <g
                        id="24-/-basic-/-icon24_plus_default"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          id="icon-background"
                          fill="#6F787E"
                          fill-rule="nonzero"
                          d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <v-row class="mt-4 pa-2">
                <v-col
                  class="mx-2 rounded"
                  cols="5"
                  style="
                    text-align: center;
                    background-color: rgb(200, 200, 200);
                    font-size: 16px;
                    font-weight: 600;
                  "
                  >Thêm giỏ hàng</v-col
                >
                <v-col
                  class="mx-2 rounded"
                  cols="5"
                  style="
                    text-align: center;
                    background-color: #ee2624;
                    font-size: 16px;
                    color: #ffffff;
                    font-weight: 600;
                  "
                  >Mua ngay</v-col
                >
              </v-row>
              <hr class="mt-10" style="opacity: 0.6" />
            </div>

            <div class="ma-2">
              <h3 class="ma-4">Ưu đãi dành cho bạn</h3>
              <v-row>
                <v-col cols="6" class="my-flex-column">
                  <img
                    src="https://media3.scdn.vn/img4/2023/08_29/HDgWOVQr93hTWAFmecC3.png"
                    width="24"
                    height="24"
                  /><span style="font-size: 14px" class="mx-1"
                    >Trả sau AFTEE</span
                  ></v-col
                >
                <v-col cols="6" class="my-flex-column">
                  <img
                    src="	https://media3.scdn.vn/img4/2023/04_17/9wtTH9rjcQ4CVH1s7SeW.png"
                    width="24"
                    height="24"
                  /><span style="font-size: 14px" class="mx-1">
                    Trả góp Muadee</span
                  ></v-col
                >
                <v-col cols="6" class="my-flex-column">
                  <img
                    src="https://media3.scdn.vn/img4/2022/12_19/k4fhvv3i925lb0CUgGn4.png"
                    width="24"
                    height="24"
                  /><span style="font-size: 14px" class="mx-1"
                    >Trả góp kredivo</span
                  ></v-col
                >
                <v-col cols="6" class="my-flex-column">
                  <img
                    src="	https://media3.scdn.vn/img4/2021/05_10/HHDHM10eqVNmGUZE5EfA.png"
                    width="24"
                    height="24"
                  /><span style="font-size: 14px" class="mx-1"
                    >Giảm khi mua qua app</span
                  ></v-col
                >
                <v-col cols="6" class="my-flex-column">
                  <img
                    src="	https://media3.scdn.vn/img4/2020/02_22/09A417Le8f9vmJ0aWEu6.png"
                    width="24"
                    height="24"
                  /><span style="font-size: 14px" class="mx-1"
                    >Miễn phí vận chuyển</span
                  ></v-col
                >
              </v-row>
            </div>

            <hr class="mt-10" style="opacity: 0.6" />

            <div class="ma-2">
              <h3>Dịch vụ bảo hiểm</h3>
              <img
                src="https://media3.scdn.vn/img4/2023/04_28/Dqn555PbGWueXU2PvS8b.png"
                width="24"
                height="24"
                class="mt-3 flex-item"
              /><span style="font-size: 14px" class="mx-1 flex-item"
                >Bảo hiểm thiết bị điện tử</span
              >
            </div>
            <hr class="mt-10" style="opacity: 0.6" />

            <div style="font-size: 14px; font-weight: 500" class="ma-2">
              <p class="ma-2">
                <v-icon color="red" class="mx-1"
                  >mdi-check-circle-outline</v-icon
                >48 giờ hoàn trả
              </p>
              <p class="ma-2">
                <v-icon color="red" class="mx-1"
                  >mdi-check-circle-outline</v-icon
                >Bảo hành theo chính sách nhà bán hàng
              </p>
              <p class="ma-2">
                <v-icon color="red" class="mx-1"
                  >mdi-check-circle-outline</v-icon
                >
                Miễn phí hoàn trả
              </p>
            </div>
          </div>
        </v-sheet>
      </div>
      <div style="display: flex" class="mt-5 mx-16">
        <div style="float: left; width: 560px">
          <v-sheet class="ma-5 pa-5 rounded-lg" :elevation="2">
            <p style="font-size: 16px; font-weight: 700">
              Thông tin nhà cung cấp
            </p>
            <v-layout class="mt-3">
              <v-flex class="ma-2"
                ><img
                  :src="`${product.shopAvata}`"
                  alt="shop-avata"
                  width="74"
                  height="74"
                  class="shop-avata"
              /></v-flex>
              <v-flex class="ma-2">
                <div
                  style="
                    font-size: 16px;
                    font-weight: 700;
                    float: right;
                    width: auto;
                  "
                >
                  {{ product.shopName }}
                </div>
                <br />
                <v-img
                  class="mt-1"
                  :src="`${product.shopPlus}`"
                  alt="shop-plus"
                  wight="44"
                  height="16"
                ></v-img>

                <div style="font-size: 12px; color: #6f787e">
                  {{ product.location }} | {{ product.rating
                  }}<span
                    ><v-icon size="12" color="yellow">mdi-star</v-icon></span
                  >
                </div>
              </v-flex>
            </v-layout>
            <div
              class="d-flex justify-space-between"
              style="color: #0f1e29; text-align: center"
            >
              <div>
                <p style="font-size: 16px; font-weight: 700">
                  {{ product.SaleTime }}
                </p>

                <p style="font-size: 12px">Bán ở Sendo</p>
              </div>
              <div>
                <p style="font-size: 16px; font-weight: 700">
                  {{ product.productItem }}
                </p>
                <p style="font-size: 12px">Sản phẩm</p>
              </div>
              <div>
                <p style="font-size: 16px; font-weight: 700">
                  {{ product.prepare }}
                </p>
                <p style="font-size: 12px">Chuẩn bị hàng</p>
              </div>
              <div>
                <p style="font-size: 16px; font-weight: 700">
                  {{ product.ResponseRate }}
                </p>

                <p style="font-size: 12px">Tỉ lệ phản hồi</p>
              </div>
              <div>
                <p style="font-size: 16px; font-weight: 700">Trong tuần</p>
                <p style="font-size: 12px">Shop phản hồi</p>
              </div>
            </div>

            <v-row style="text-align: center; font-weight: 500" class="mt-3">
              <v-col
                cols="5"
                class="rounded-sm"
                style="background-color: #e7e8ea"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="d7ed-SwZDZ2 d7ed-w34diS"
                >
                  <path
                    d="M16.553 2C20.258 2.015 23 5.14 23 9.12c0 .631-.073 1.258-.217 1.88H20.71a6.43 6.43 0 0 0 .289-1.88c0-2.931-1.912-5.11-4.45-5.12-1.163 0-1.804.118-2.568.492a4.18 4.18 0 0 0-1.25.936l-.73.79-.735-.784a4.262 4.262 0 0 0-1.232-.913C9.248 4.13 8.565 4 7.455 4 4.884 4 3 6.148 3 9.12c0 2.38 1.414 4.83 4.186 7.323 1.512 1.36 3.455 2.718 4.814 3.43v2.253l-.866-.449c-1.515-.784-3.63-2.258-5.285-3.747C2.694 15.092 1 12.158 1 9.12 1 5.097 3.716 2 7.455 2c1.395 0 2.376.189 3.467.728.38.188.736.41 1.068.668a6.146 6.146 0 0 1 1.113-.7c1.07-.524 2.003-.696 3.45-.696zM19 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"
                    fill="#6F787E"
                    fill-rule="nonzero"
                  ></path>
                </svg>
                <span class="ma-1">Theo dõi shop</span>
              </v-col>
              <v-col
                cols="5"
                class="rounded-sm mx-2"
                style="background-color: #e7e8ea"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="d7ed-SwZDZ2"
                  style="color: rgb(63, 75, 83)"
                >
                  <path
                    d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-.883.993L19 21H5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v4h12v-4a1 1 0 0 1 1-1Zm-6 1a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2Zm5-12a1 1 0 0 1 1 1.004c-.001.245.197.557.718 1.046.122.113.256.233.44.393l.5.432C22.25 7.267 23 8.36 23 10c0 1.598-1.431 3-3 3-.743 0-1.458-.321-2.004-.829-.545.506-1.258.829-1.996.829-.74 0-1.454-.325-2-.833-.545.508-1.26.833-2 .833-.747 0-1.461-.315-2.006-.819C9.45 12.683 8.74 13 8 13c-.74 0-1.455-.325-2-.833-.548.509-1.264.833-2.007.833-1.557 0-2.998-1.446-2.998-3 0-1.64.751-2.732 2.345-4.123.112-.098.483-.416.504-.435.186-.161.322-.282.444-.396.519-.486.714-.796.712-1.037A1 1 0 0 1 6 3h12Zm-.804 2H6.806c-.213.513-.6.99-1.151 1.506-.145.135-.298.271-.502.448l-.498.43C3.461 8.426 2.995 9.104 2.995 10c0 .451.547 1 .998 1C4.453 11 5 10.458 5 10c0-1.333 2-1.333 2 0 0 .458.546 1 1 1 .464 0 1-.528 1-1 0-1.333 2-1.333 2 0 0 .49.523 1 1 1 .454 0 1-.543 1-1 0-1.333 2-1.333 2 0 0 .456.547 1 1 1 .455 0 1-.542 1-1 0-1.333 2-1.333 2 0 0 .47.537 1 1 1 .473 0 1-.516 1-1 0-.898-.465-1.576-1.658-2.62l-.494-.426c-.202-.175-.354-.31-.497-.445-.553-.518-.94-.995-1.155-1.509Z"
                    fill="#6F787E"
                    fill-rule="nonzero"
                  ></path>
                </svg>
                <span class="ma-1">Vào shop</span>
              </v-col>
              <v-col
                cols="1"
                style="background-color: #e7e8ea"
                class="rounder-sm"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="d7ed-SwZDZ2 d7ed-w34diS"
                >
                  <path
                    d="M8.22 2.729c.555.548 1.44 1.685 2.755 3.525.585.65.4 1.386-.118 2.084a5.453 5.453 0 0 1-.436.508 14.89 14.89 0 0 1-.28.285l-.767.768c-.1.1.586 1.47 1.917 2.803 1.33 1.331 2.7 2.018 2.801 1.917l.767-.767c.422-.422.645-.626.952-.827.638-.42 1.335-.533 1.922-.008 1.917 1.372 3.002 2.213 3.534 2.765 1.037 1.078.9 2.736.006 3.682-.31.328-.704.722-1.169 1.17-2.811 2.813-8.745 1.101-13.293-3.45C2.263 12.63.551 6.695 3.358 3.888c.503-.512.67-.678 1.16-1.161.913-.9 2.648-1.041 3.703 0Zm-2.3 1.424c-.483.476-.642.635-1.144 1.145-1.804 1.805-.423 6.595 3.45 10.471 3.87 3.875 8.66 5.257 10.478 3.438.457-.441.83-.815 1.117-1.118.208-.22.245-.671.006-.92-.397-.412-1.37-1.17-3.05-2.377a6.856 6.856 0 0 0-.505.474l-.766.767c-1.303 1.303-3.521.192-5.629-1.917-2.109-2.111-3.219-4.329-1.916-5.632l.766-.766c.123-.123.18-.18.246-.25.092-.097.167-.182.228-.257-1.166-1.623-1.958-2.637-2.385-3.06-.22-.217-.714-.177-.896.002Zm7.735-2.083a9.505 9.505 0 0 1 8.275 8.275l-1.975.33a7.503 7.503 0 0 0-6.63-6.63l.33-1.975Zm-.659 3.952a5.501 5.501 0 0 1 4.982 4.982l-1.982.33a3.5 3.5 0 0 0-3.33-3.33l.33-1.982Z"
                    fill="#6F787E"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </v-col>
            </v-row>
            <hr class="mt-6 mb-3" />
          </v-sheet>
        </div>
        <div style="float: right; width: 810px">
          <v-sheet class="ma-5 pa-5 rounded-lg" :elevation="2">
            <div class="ma-1" style="color: #0f1e29">
              <p style="font-size: 16px; font-weight: 700">Mô tả sản phẩm</p>
              <p class="mt-3" style="font-size: 14px">
                {{ product.Describe }}
              </p>
            </div>
            <div class="ma-2" style="font-size: 14px">
              <p style="font-weight: 700">Chi tiết sản phẩm</p>
              <p class="mt-2">
                {{ product.Detail }}
              </p>
            </div>
            <div style="text-align: center" class="mt-16">
              <v-btn class="mt-16">Xem thêm</v-btn>
            </div>
          </v-sheet>
        </div>
      </div>
      <Product></Product>
    </v-main>
    <Footer></Footer>
    <div>
      <p
        style="
          font-size: 24px;
          font-family: Roboto, sans-serif;
          color: red;
          font-weight: 600;
        "
      >
        Tổng: {{ formatCurrency(counter) }}
      </p>
    </div>
  </div>
  <div class="sticky-footer">
    <v-sheet :elevation="6">
      <v-container class="sticky-total-price">
        <div class="d-flex" style="max-height: 90px">
          <div class="d-flex" style="width: 590px">
            <div>
              <img
                :src="`${product.img}`"
                height="52px"
                width="52px"
                style="border: 1px solid OrangeRed; border-radius: 4px"
              />
            </div>

            <div class="mx-2">
              <p class="my-p">{{ product.name }}</p>
              <p class="mt-1">x {{ count }}</p>
            </div>
            <div class="ml-6" style="font-family: Roboto, sans-serif">
              <p
                style="
                  font-size: 14px;

                  color: #0f1e29;
                "
              >
                Tạm tính
              </p>
              <p style="color: #ee2624; font-size: 20px; font-weight: 700">
                {{ formatCurrency(counter) }}
              </p>
            </div>
          </div>
          <div class="d-flex ml-4" style="width: 750px">
            <v-btn class="ma-1" style="background-color: #e7e8ea; padding: 7px">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="d7ed-SwZDZ2 d7ed-w34diS"
              >
                <path
                  d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-.883.993L19 21H5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v4h12v-4a1 1 0 0 1 1-1Zm-6 1a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2Zm5-12a1 1 0 0 1 1 1.004c-.001.245.197.557.718 1.046.122.113.256.233.44.393l.5.432C22.25 7.267 23 8.36 23 10c0 1.598-1.431 3-3 3-.743 0-1.458-.321-2.004-.829-.545.506-1.258.829-1.996.829-.74 0-1.454-.325-2-.833-.545.508-1.26.833-2 .833-.747 0-1.461-.315-2.006-.819C9.45 12.683 8.74 13 8 13c-.74 0-1.455-.325-2-.833-.548.509-1.264.833-2.007.833-1.557 0-2.998-1.446-2.998-3 0-1.64.751-2.732 2.345-4.123.112-.098.483-.416.504-.435.186-.161.322-.282.444-.396.519-.486.714-.796.712-1.037A1 1 0 0 1 6 3h12Zm-.804 2H6.806c-.213.513-.6.99-1.151 1.506-.145.135-.298.271-.502.448l-.498.43C3.461 8.426 2.995 9.104 2.995 10c0 .451.547 1 .998 1C4.453 11 5 10.458 5 10c0-1.333 2-1.333 2 0 0 .458.546 1 1 1 .464 0 1-.528 1-1 0-1.333 2-1.333 2 0 0 .49.523 1 1 1 .454 0 1-.543 1-1 0-1.333 2-1.333 2 0 0 .456.547 1 1 1 .455 0 1-.542 1-1 0-1.333 2-1.333 2 0 0 .47.537 1 1 1 .473 0 1-.516 1-1 0-.898-.465-1.576-1.658-2.62l-.494-.426c-.202-.175-.354-.31-.497-.445-.553-.518-.94-.995-1.155-1.509Z"
                  fill="#6F787E"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </v-btn>
            <v-btn style="background-color: #e7e8ea; padding: 7px" class="ma-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="d7ed-SwZDZ2 d7ed-w34diS"
              >
                <path
                  d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z"
                  fill="#6F787E"
                  fill-rule="nonzero"
                ></path></svg
            ></v-btn>
            <v-btn
              class="ma-1"
              style="background-color: #e7e8ea; width: 140px; color: #3f4b53"
              ><p style="font-size: 12px">Thêm giỏ hàng</p></v-btn
            >
            <div class="ma-1 my-div">Mua ngay</div>
          </div>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
import sourceData from "@/data.json";
import Myhead from "@/components/Myhead.vue";
import Footer from "@/components/Footer.vue";
import Product from "@/components/Product.vue";
export default {
  components: {
    Myhead,
    Footer,
    Product,
  },
  data() {
    return {
      count: 0,
      counter: 0,
      images: [],
      showFooter: true,
    };
  },

  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    product() {
      return sourceData.products.find(
        (product) => product.id === this.productId
      );
    },
  },
  mounted() {
    this.images = this.product.imgae;
  },
  methods: {
    increment() {
      this.count++;
      this.counter = this.count * this.product.salePrice;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
        this.counter = this.count * this.product.salePrice;
      }
    },
    formatCurrency(amount) {
      const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return VND.format(amount);
    },
  },
};
</script>
<style scoped>
.shop-avata {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.carousel-indicators {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.carousel-indicator-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  margin: 4px;
}

.carousel-indicator.active .carousel-indicator-image {
  border: 2px solid #007bff;
}

.carousel-indicator-image:hover {
  border: 1px solid red;
  transform: scale(1.3);
}
.my-flex-column {
  display: flex;
  align-items: center;
}
.sticky-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2000;
  transition: opacity 0.3s ease-in-out;
}
.my-p {
  font-size: 16px;
  color: #0f1e29;
  font-family: Roboto, sans-serif;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 210px;
  font-weight: 700;
}
.my-div {
  background-color: #ee2624;
  color: #ffffff;
  display: block;
  justify-content: center;
  align-items: center;
  width: 450px;
  text-align: center;
  border-radius: 5px;
  height: 40px;
  padding: 8px 16px;
}
.image-container {
  position: relative;
  width: 500px;
  height: 500px;
}
.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.sticky-footer.hidden {
  opacity: 0;
}
.original-image {
  width: 100%;
  height: auto;
  z-index: 0;
}

.original-image-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
