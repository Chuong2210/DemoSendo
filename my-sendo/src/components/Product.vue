<template>
  <div class="products-home">
    <div class="product-grid mx-16 mt-10">
      <router-link
        class="product-container"
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'product-detail', params: { id: product.id } }"
      >
        <div class="image-container">
          <img
            :src="`${product.img}`"
            alt="Large Image"
            height="204.66px"
            width="210.55px"
          />
          <div class="small-image">
            <img
              :src="`${product.smallImg}`"
              alt="Small Image"
              height="16px"
              width="66px"
            />
          </div>
        </div>
        <div>
          <img :src="`${product.icon}`" height="12px" width="32px" />
          <span class="my-span">{{ product.name }}</span>

          <div>
            <del style="color: black; opacity: 0.3; font-size: 12px">{{
              formatCurrency(product.originalPrice)
            }}</del>
            <span style="color: #ee2624">{{ product.discount }}</span>
          </div>

          <div style="color: #ee2624; font-size: 15px; font-weight: 700">
            {{ formatCurrency(product.salePrice) }}
          </div>

          <div style="color: #ccac3a" class="rounded-xl">
            <img :src="`${product.tagIcon}`" height="12px" width="12px" />
            <span style="color: #674f00; font-size: 11px">{{
              product.tag
            }}</span>
          </div>
        </div>

        <div class="rounded-xl my-div">{{ product.status }}</div>

        <div style="font-size: 11px" class="mt-1">
          <p style="float: left">
            {{ product.rating }}/5
            <span><v-icon size="12" color="yellow">mdi-star</v-icon></span>
          </p>
          <p style="float: right" class="mr-2">{{ product.location }}</p>
        </div>
      </router-link>
    </div>
    <div class="d-flex justify-center">
      <v-btn class="ma-auto" @click="moreContent">Xem thêm</v-btn>
    </div>
  </div>
  >
</template>

<script>
import sourceData from "@/data.json";
export default {
  name: "ProductVue",
  data() {
    return {
      products: sourceData.products,
    };
  },
  methods: {
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
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-decoration: none;
}

.product-container {
  box-shadow: 0 0 10px rgba(14, 14, 14, 0.2);
  margin-bottom: 25px;
  border-radius: 10px;
  height: 375px;
  width: calc(15.55% - 5px);
  transition: transform 0.3s;
  text-decoration: none;
}

.product-container:hover {
  transform: scale(1.02);
}

.my-span {
  font-size: 14px;
  color: #0f1e29;
  font-family: "Roboto", sans-serif;
  padding-left: 4px;

  text-decoration: none;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.my-div {
  color: #ffffff;
  background-color: #f47c7b;
  text-align: center;
  font-size: 11px;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
}

.image-container {
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.small-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  text-decoration: none;
}
</style>
