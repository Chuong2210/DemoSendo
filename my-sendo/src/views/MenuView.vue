<template>
  <div class="about">
    <div style="background-color: red; color: #fff; margin: 0; padding: 5px">
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
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCI+CiAgPGRlZnM+CiAgICA8cG9seWdvbiBpZD0icGFnZS0xLWNvcHktNEAxeC1hIiBwb2ludHM9IjAgLjIwOCAzMy43OTMgLjIwOCAzMy43OTMgMzQgMCAzNCIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPG1hc2sgaWQ9InBhZ2UtMS1jb3B5LTRAMXgtYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhZ2UtMS1jb3B5LTRAMXgtYSIvPgogICAgPC9tYXNrPgogICAgPHBhdGggZmlsbD0iI0ZFRkVGRSIgZD0iTTMxLjI5MTY3MjIsMC4yMDc0IEwyLjQ5NDcyMzcxLDAuMjA3NCBDMS4xMTc4OTg5NywwLjIwNzQgMC4wMDAxMDUxNTQ2MzksMS4yOTgyMDQxMiAwLjAwMDEwNTE1NDYzOSwyLjY0MzEzMTk2IEwwLjAwMDEwNTE1NDYzOSwzMS41NjE3MDkzIEMwLjAwMDEwNTE1NDYzOSwzMi45MDczMzgxIDEuMTE3ODk4OTcsMzMuOTk5ODk0OCAyLjQ5NDcyMzcxLDMzLjk5OTg5NDggTDMxLjI5MTY3MjIsMzMuOTk5ODk0OCBDMzIuNjY5ODk5LDMzLjk5OTg5NDggMzMuNzkzMzAxLDMyLjkwNzMzODEgMzMuNzkzMzAxLDMxLjU2MTcwOTMgTDMzLjc5MzMwMSwyLjY0MzEzMTk2IEMzMy43OTMzMDEsMS4yOTgyMDQxMiAzMi42Njk4OTksMC4yMDc0IDMxLjI5MTY3MjIsMC4yMDc0IiBtYXNrPSJ1cmwoI3BhZ2UtMS1jb3B5LTRAMXgtYikiLz4KICAgIDxwYXRoIGZpbGw9IiNFRDI1MjQiIGQ9Ik0xMiAyNi45OTkzMzE5QzEyIDI4LjEwNDA1ODggMTEuMTA0NTAyNSAyOSAxMC4wMDA1MDEyIDI5IDguODk1NDk3NDUgMjkgOCAyOC4xMDQwNTg4IDggMjYuOTk5MzMxOSA4IDI1Ljg5NTYwNzEgOC44OTU0OTc0NSAyNSAxMC4wMDA1MDEyIDI1IDExLjEwNDUwMjUgMjUgMTIgMjUuODk1NjA3MSAxMiAyNi45OTkzMzE5TTIyIDI2Ljk5OTMzMTlDMjIgMjguMTA0MDU4OCAyMS4xMDQ4MDE3IDI5IDE5Ljk5OTE2NDkgMjkgMTguODk1ODY2NCAyOSAxOCAyOC4xMDQwNTg4IDE4IDI2Ljk5OTMzMTkgMTggMjUuODk1NjA3MSAxOC44OTU4NjY0IDI1IDE5Ljk5OTE2NDkgMjUgMjEuMTA0ODAxNyAyNSAyMiAyNS44OTU2MDcxIDIyIDI2Ljk5OTMzMTlNMjMuNTM5MTI0MiAxMi44NjM4OTQ1QzIyLjA2NTU1MjMgMTIuMDY1NDE5MyAyMS4wMDc2Mzk1IDExLjQ2Njk5MDQgMjEuMDA3NjM5NSAxMC40OTQxMTU5IDIxLjAwNzYzOTUgOS42MzA2Njg0MSAyMS44NDk5MzM1IDguMDQ0MzE4NzcgMjMuNTgxMjU2NiA4LjA0MzI5MjkgMjQuMjcwNTk5MyA4LjA0MjYwODk4IDI1LjE2NzA2MzUgOC4xNTQwODc3NCAyNS4zMTg5NTI2IDguMTk5OTEwM0wyNi42MDczNTQzIDUuMzgzODc0NjhDMjQuNDE3MTc3NiA0Ljg1NTg4OTM3IDIzLjQyOTcyMTUgNS4wMjYxODUxNSAyMy40Mjk3MjE1IDUuMDI2MTg1MTUgMjAuMDMyNTc1NCA1LjE0ODk0ODU4IDE3LjA4MTg5MTEgNy45NjkwODc3MSAxNy4wODE4OTExIDExLjA5MzIyODcgMTcuMDgxODkxMSAxMy4yODc5MjQxIDE4LjgzNzY0MzggMTQuNTg0OTc2MSAyMC42OTc4NDI1IDE1LjU1Nzg1MDYgMjIuMjk5MjI3OCAxNi4zNTU5ODM4IDIzLjA0ODA1MTYgMTYuOTgwNDAxNyAyMy4wNDgwNTE2IDE3LjkyODMxMzEgMjMuMDQ4MDUxNiAxOS4xMTczMDU5IDIxLjk4MDU3OTQgMTkuNzYwODczNSAyMC43MTQxMjkgMTkuODc2NDU1OEwyMC42MTI1MTU1IDE5Ljg4NTY4ODcgMTAuNDIxMDc3MSAxOS45NTc4NDIxIDExLjAxMzA1NSAxOC4wNDMyMTE1IDE2LjcyNzEyOTIgMTguMDQzMjExNSAxNy43Njk4MTc2IDE1LjUwNDE2MyAxMC4xODA2NzQ1IDE1LjUwNDE2M0M5LjE5MTA5NDIgMTUuNTA0MTYzIDguNzgxNDUzOTYgMTUuODMwMzkyMiA4LjYwNTEzNTE3IDE2LjE1NTU5NTZMNy4wMzQ5MDY1OSAyMS41NDY5Mjc0QzYuODY1MzE0ODMgMjIuMTMwMzEwMiA3LjMzMDE4NzQ2IDIyLjc1MzAxODIgOC4wNzEyMjIwNSAyMi45NTI3MjI1IDguMTMzNTM1NTEgMjIuOTY5MTM2NiA4LjE5MzcyNDY2IDIyLjk3NDYwNzkgOC4yNTUzMzAwMiAyMi45ODQ1MjQ3TDguMjUxNzg5NDggMjIuOTk4MjAzMSA4LjQwNDc0MDcyIDIyLjk5NTgwOTRDOC40ODY4ODEyIDIzLjAwMjMwNjYgOC41NjkzNzU3MyAyMy4wMDA1OTY4IDguNjQ3OTc1NjggMjIuOTk1MTI1NUwyMC42MDkzMjkgMjIuOTY5MTM2NiAyMC43MTQxMjkgMjIuOTYzMzIzM0MyNC4yMjE3Mzk5IDIyLjcxMzY5MjkgMjcgMjAuNzg3Nzc3NiAyNyAxNy4zMDM4OTUzIDI3IDE1LjMwODIyMDIgMjUuNjU3MDc0IDEzLjkzNjYyMTEgMjMuNTM5MTI0MiAxMi44NjM4OTQ1Ii8+CiAgPC9nPgo8L3N2Zz4K"
              alt="SENDO.VN - Mua hàng online đảm bảo, giá rẻ từ các Shop uy tín"
            />
          </router-link>
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

    <v-container>
      <h3 class="my-h3">Thời trang nữ</h3>
      <v-row>
        <v-col cols="2" class="border">Đầm,váy</v-col>
        <v-col cols="2" class="border">Áo nữ</v-col>
        <v-col cols="2" class="border">Set bộ</v-col>
        <v-col cols="2" class="border">Áo khoác nữ</v-col>
        <v-col cols="2" class="border">Đồ lót nữ</v-col>
        <v-col cols="2" class="border">Quần nữ</v-col>
        <v-col cols="2" class="border">Đầm,váy</v-col>
        <v-col cols="2" class="border">Đồ mặc nhà</v-col>
        <v-col cols="2" class="border">Đồ đôi nam nữ</v-col>
        <v-col cols="2" class="border">Đồ bơi đi biển</v-col>
        <v-col cols="2" class="border">Quần áo thể thao nữ</v-col>
        <v-col cols="2" class="border">Thời trang trung niên</v-col>
        <v-col cols="2" class="border">Vải , nguyên phụ liệu may mặc</v-col>
        <v-col cols="2" class="border">Thời trang big size</v-col>
        <v-col cols="2" class="border">Thời trang thiết kế</v-col>
        <v-col cols="2" class="border">Trang phục cưới</v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
      </v-row>

      <h3 class="my-h3">Thời trang nam</h3>
      <v-row>
        <v-col cols="2" class="border">Áo thun, áo polo nam</v-col>
        <v-col cols="2" class="border">Áo sơ mi</v-col>
        <v-col cols="2" class="border">Áo khoác nam</v-col>
        <v-col cols="2" class="border">Quần jean nam</v-col>
        <v-col cols="2" class="border">Quần dài nam</v-col>
        <v-col cols="2" class="border">Quần short nam</v-col>
        <v-col cols="2" class="border">Quần thể thao nam</v-col>
        <v-col cols="2" class="border">Đồ ngủ nam</v-col>
        <v-col cols="2" class="border">Áo vest</v-col>
        <v-col cols="2" class="border">Thời trang big size</v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
      </v-row>

      <h3 class="my-h3">Nhà cửa</h3>
      <v-row>
        <v-col cols="2" class="border">Đồ dùng nhà bếp</v-col>
        <v-col cols="2" class="border">Đồ dùng phòng ngủ</v-col>
        <v-col cols="2" class="border">Đồ dùng sinh hoạt</v-col>
        <v-col cols="2" class="border">Đồ dùng ăn uống</v-col>
        <v-col cols="2" class="border">Thiết bị, đồ dùng phòng tắm</v-col>
        <v-col cols="2" class="border">Vệ sinh,chăm sóc nhà cửa</v-col>
        <v-col cols="2" class="border">Nội thất phòng khách</v-col>
        <v-col cols="2" class="border">Nội thất phòng làm việc</v-col>
        <v-col cols="2" class="border">Đồ ngoại thất</v-col>
        <v-col cols="2" class="border">Đồ dùng làm bánh kem</v-col>
        <v-col cols="2" class="border">Nội thất phòng ngủ</v-col>
        <v-col cols="2" class="border">Nội thât bếp, phòng ăn</v-col>
        <v-col cols="2" class="border">Nội thât phòng trẻ em</v-col>
        <v-col cols="2" class="border">Bộ đồ dùng một lần</v-col>
        <v-col cols="2" class="border">Bộ đồ dùng nội thất khác</v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
      </v-row>

      <h3 class="my-h3">Sức khỏe & làm đẹp</h3>
      <v-row>
        <v-col cols="2" class="border">Dưỡng da mặt</v-col>
        <v-col cols="2" class="border">Trang điểm môi</v-col>
        <v-col cols="2" class="border">Trag điểm mặt</v-col>
        <v-col cols="2" class="border">Làm sạch da mặt</v-col>
        <v-col cols="2" class="border">Mặt nạ dưỡng</v-col>
        <v-col cols="2" class="border">Trang điểm mắt</v-col>
        <v-col cols="2" class="border">Trị liệu chuyên sâu mắt</v-col>
        <v-col cols="2" class="border">Tắm & chăm sóc cơ thể</v-col>
        <v-col cols="2" class="border">Chăm sóc tóc</v-col>
        <v-col cols="2" class="border">Nước hoa nam , nữ</v-col>
        <v-col cols="2" class="border">Chăm sóc răng miêng</v-col>
        <v-col cols="2" class="border">Dinh dưỡng thể thao, protein</v-col>
      </v-row>
      <h3 class="my-h3">Giày dép</h3>
      <v-row>
        <v-col cols="2" class="border">Dép nữ</v-col>
        <v-col cols="2" class="border">Dép nam</v-col>
        <v-col cols="2" class="border">Giày nam</v-col>
        <v-col cols="2" class="border">Giày cao gót nữ</v-col>
        <v-col cols="2" class="border">Giày tây nam</v-col>
        <v-col cols="2" class="border">Giày boot nữ</v-col>
        <v-col cols="2" class="border">Giày nam khác</v-col>
        <v-col cols="2" class="border">Giày nữ khác</v-col>
        <v-col cols="2" class="border">Phụ kiện giày đép</v-col>
        <v-col cols="2" class="border">Giày dép nam big size</v-col>
        <v-col cols="2" class="border">Giày dép đi mưa</v-col>
        <v-col cols="2" class="border">Giày tăng chiều cao nam nữ</v-col>
      </v-row>

      <h3 class="my-h3">Đồng hồ</h3>
      <v-row>
        <v-col cols="2" class="border">Đồng hồ nam</v-col>
        <v-col cols="2" class="border">Đồng hồ nữ</v-col>
        <v-col cols="2" class="border">Động hồ trẻ em</v-col>
        <v-col cols="2" class="border">Đồng hồ đôi</v-col>
        <v-col cols="2" class="border">Đồng hồ khác</v-col>
        <v-col cols="2" class="border">Phụ kiện đồng hồ</v-col>
      </v-row>

      <h3 class="my-h3">Phụ kiện thời trang</h3>
      <v-row>
        <v-col cols="2" class="border">Phụ kiện thời trang nữ</v-col>
        <v-col cols="2" class="border">Đồng hồ nữ</v-col>
        <v-col cols="2" class="border">Động hồ trẻ em</v-col>
        <v-col cols="2" class="border">Đồng hồ đôi</v-col>
        <v-col cols="2" class="border">Đồng hồ khác</v-col>
        <v-col cols="2" class="border">Phụ kiện đồng hồ</v-col>
      </v-row>

      <h3 class="my-h3">Tân trang nhà cửa</h3>
      <v-row>
        <v-col cols="2" class="border">Dụng cụ cầm tay</v-col>
        <v-col cols="2" class="border">Máy Cơ khí chế tạo</v-col>
        <v-col cols="2" class="border">Dụng cụ làm vườn</v-col>
        <v-col cols="2" class="border">Các loại đèn</v-col>
        <v-col cols="2" class="border">Thiết bị điện, phụ kiện</v-col>
        <v-col cols="2" class="border">Thiết bị an ninh</v-col>
        <v-col cols="2" class="border">Thiết bị nước</v-col>
        <v-col cols="2" class="border">Đồ kim khí</v-col>
        <v-col cols="2" class="border">Thiết bị nâng đỡ</v-col>
        <v-col cols="2" class="border">Thiết bị PCCC</v-col>
        <v-col cols="2" class="border">Tân trang nhà cửa khác</v-col>
        <v-col cols="2" class="border">Bảo hộ lao động</v-col>
        <v-col cols="2" class="border">Dụng cụ xây dựng nhà cửa gia đình</v-col>
        <v-col cols="2" class="border">Linh kiên điện tử</v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
      </v-row>

      <h3 class="my-h3">Phụ kiện công nghệ</h3>
      <v-row>
        <v-col cols="2" class="border">Sạc điện thoại,ipad</v-col>
        <v-col cols="2" class="border">Thiết bị đeo công nghệ</v-col>
        <v-col cols="2" class="border">Thiết bị mạng</v-col>
        <v-col cols="2" class="border">Thiết bị lưu trữ</v-col>
        <v-col cols="2" class="border">Cáp sạc ,cáp kết nối</v-col>
        <v-col cols="2" class="border">Sim card,dụng cụ chuyển đổi sim</v-col>
      </v-row>

      <h3 class="my-h3">Thiết bị y tế</h3>
      <v-row>
        <v-col cols="2" class="border">Chăm sóc sức khỏe</v-col>
        <v-col cols="2" class="border">Thiết bị massage</v-col>
        <v-col cols="2" class="border">Vật tư y tế</v-col>
        <v-col cols="2" class="border">Dụng cụ chuyên khoa</v-col>
        <v-col cols="2" class="border">Máy móc y tế</v-col>
        <v-col cols="2" class="border">Dụng cụ vật lý trị liệu</v-col>
        <v-col cols="2" class="border">Thiết bị y tế khác</v-col>
      </v-row>

      <h3 class="my-h3">Mẹ và bé</h3>
      <v-row>
        <v-col cols="2" class="border">Bỉm,tã,vệ sinh</v-col>
        <v-col cols="2" class="border">Chăm sóc, sức khỏe an toàn</v-col>
        <v-col cols="2" class="border">Sữa và thức ăn dặm</v-col>
        <v-col cols="2" class="border">Thời trang mẹ bầu</v-col>
        <v-col cols="2" class="border">Đồ dùng phòng ngủ cho bé</v-col>
        <v-col cols="2" class="border">Đồ dùng phòng tắm cho bé</v-col>
        <v-col cols="2" class="border">Thời trang gia đình</v-col>
      </v-row>

      <h3 class="my-h3">Điện máy</h3>
      <v-row>
        <v-col cols="2" class="border">Tủ lạnh , tủ đông, tủ mát</v-col>
        <v-col cols="2" class="border">Máy lạnh , máy điều hòa</v-col>
        <v-col cols="2" class="border">Máy giặt,máy sấy</v-col>
        <v-col cols="2" class="border">Điện gia dụng lớn</v-col>
        <v-col cols="2" class="border"></v-col>
        <v-col cols="2" class="border"></v-col>
      </v-row>
    </v-container>

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
                Giá hợp lý vừa túi tiền.Luôn có nhiều <br />chương trình khuyên
                mãi
              </p>
            </v-col>
            <v-col cols="auto" class="my-col" @click="goTo">
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
              Quy định đối với người bán<br />Chính sách bán hàng<br />Hệ thống
              tiêu chí bán hàng <br />Mở shop trên sendo
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
            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20,
            ngày 26/04/2022.
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
</template>

<script>
export default {
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
.my-h3 {
  text-align: center;
  color: red;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 24px;
  text-transform: uppercase;
  font-family: Times New Roman;
}

.border {
  border: 1px solid #ffffffc3;
  transition: border-color 0.3s ease;
  text-align: center;
}
.border:hover {
  border-color: red;
  color: red;
}

.custom-col {
  width: 240px;
  text-align: center;
  transition: transform 0.2s;
}
.custom-col:hover {
  transform: scale(1.05);
}
.my-col {
  text-align: center;
  transition: transform 0.2s;
}
.my-col:hover {
  transform: scale(1.3);
}
.sticky-div {
  position: sticky;
  top: 0;
}
</style>
