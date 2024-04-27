<template>
  <div class="huongdan">
    <Myhead class="sticky-div"></Myhead>
    <v-container
      class="mb-5"
      style="
        background-color: #ffffff;
        box-shadow: 0px 0px 5px rgb(232, 232, 227);
      "
    >
      <div
        class="d-flex justify-center ma-5 pa-3"
        style="
          font-size: 14px;
          font-family: Roboto, sans-serif;
          text-transform: uppercase;
          font-weight: 400;
          color: red;
        "
      >
        <p class="mx-2">Hướng dẫn mua hàng</p>
        <p class="mx-2">
          <v-icon size="10" class="mx-2">mdi-checkbox-blank-circle</v-icon>Mua
          trước trả sau
        </p>
        <p class="mx-2">
          <v-icon size="10" class="mx-2">mdi-checkbox-blank-circle</v-icon>Shop
          uy tín
        </p>
        <p>
          <v-icon size="10" class="mx-2">mdi-checkbox-blank-circle</v-icon>Về
          sendo
        </p>
        <p class="mx-2">
          <v-icon size="10" class="mx-2">mdi-checkbox-blank-circle</v-icon>Hướng
          dẫn mua hàng
        </p>
      </div>

      <hr style="color: black" class="ma-2" />
      <div>
        <p
          style="
            font-family: Roboto, sans-serif;
            text-transform: uppercase;
            font-weight: 400;
            color: #333333;
            text-align: center;
            font-size: 18px;
          "
        >
          Sendo ứng dụng mua sắm thông minh
        </p>

        <p class="ma-3 my-p">
          Ứng dụng <span style="color: red">mua sắm </span> duy nhất được bảo
          trợ bởi FPT, kết nối người mua và người bán cả nước. Với mong muốn
          phục vụ nhu cầu mua sắm trực tuyến cho tất cả người tiêu dùng trên
          khắp Việt Nam, ứng dụng Sendo có mọi thứ bạn cần, không chỉ giúp bạn
          sở hữu được những sản phẩm yêu thích với giá hợp túi tiền mà còn đem
          đến sự yên tâm và tiện lợi nhất khi mua sắm trực tuyến, mang lại cuộc
          sống đầy đủ hơn.
        </p>
        <h3 class="ma-0">ỨNG DỤNG DUY NHẤT ĐƯỢC BẢO TRỢ BỞI FPT</h3>
        <p class="ma-3 my-p">
          Tháng 9/2012, Sendo ra mắt người tiêu dùng, xuất thân là một dự án
          Thương mại Điện tử do Công ty CP Dịch vụ Trực tuyến FPT (FPT online)
          phát triển. Ngày 13/5/2014, Công ty CP Công nghệ Sendo được thành lập,
          trực thuộc Tập đoàn FPT, là đơn vị chủ quản ứng dụng Sendo.
        </p>
        <h3>SIÊU NHIỀU HÀNG HÓA</h3>
        <p class="ma-3 my-p">
          Ứng dụng Sendo mang đến bạn kho hàng siêu khủng với 31 ngành hàng
          thiết yếu, hơn 10 triệu sản phẩm từ cộng đồng shop lớn nhất Việt Nam
          với hơn 200.000 shop cho bạn thoả thích chọn mua.
        </p>
        <h3>MIỄN PHÍ ĐỔI TRẢ 48H</h3>
        <p class="ma-3 my-p">
          Bạn có thể yêu cầu đổi hoặc trả hàng trong vòng 48 tiếng đồng hồ kể từ
          khi nhận hàng nếu sản phẩm không đúng mô tả để Sendo bảo vệ quyền lợi
          mua sắm của bạn. Các bước trả hàng như sau:
        </p>
        <v-img
          class="ma-5"
          src="	https://help.sendo.vn/hc/article_attachments/360037095991/about-sendo-update.png"
          wight="694px"
          height="248px"
        ></v-img>
        <h3>SIÊU NHIỀU SỰ KIỆN VÀ KHUYẾN MÃI</h3>
        <p class="ma-3 my-p">
          Trên ứng dụng Sendo luôn ngập tràn các sự kiện và khuyến mãi hấp dẫn,
          giảm giá khủng, flash sale giá sốc để bạn thỏa mãn nhu cầu mua sắm mỗi
          ngày với giá hợp túi tiền.
        </p>
      </div>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Myhead from "@/components/Myhead.vue";
export default {
  name: "HuongDanView",
  components: {
    Footer,
    Myhead,
  },
};
</script>

<style scoped>
.my-p {
  font-size: 14px;
  color: #0f1e29;
  font-family: Roboto, sans-serif;
}
</style>
