<template>
  <div class="sidebar">
    <div class="logo-details">
      <span class="logo_name position-logo">Teenaii</span>
    </div>
    <ul class="nav-links">
      <li>
        <a href="#">
          <v-icon icon="mdi-chart-box-outline" />
          <span class="link_name">สรุปรายงาน</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">การขาย</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-printer-pos" />
            <span class="link_name">การขาย</span>
          </a>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">การขาย</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-format-list-checkbox" />
            <span class="link_name">คิวงาน</span>
          </a>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">คิวงาน</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Login Form</a></li>
          <li><a href="#">Card Design</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-invoice-list-outline" />
            <span class="link_name">การเงิน</span>
          </a>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">การขาย</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <v-icon icon="mdi-package-variant-minus" />
          <span class="link_name">คลังสตอค</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-briefcase-clock-outline" />
            <span class="link_name">ข้อมูลบริการ</span>
          </a>
        </div>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-account-group" />
            <span class="link_name">บุคลากรทีมงาน</span>
          </a>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">บุคลากรทีมงาน</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-warehouse" />
            <span class="link_name">ข้อมูลธุรกิจ</span>
          </a>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">ข้อมูลธุรกิจ</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <v-icon icon="mdi-cog-outline" />
            <span class="link_name">ตั้งค่าอื่นๆ</span>
          </a>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">ตั้งค่าอื่นๆ</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <v-icon icon="mdi-information-slab-circle-outline" />
          <span class="link_name">ติดต่อศูนย์ช่วยเหลือ</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">ติดต่อศูนย์ช่วยเหลือ</a></li>
        </ul>
      </li>
      <li>
        <div class="profile-details">
          <div class="profile-content" @click="logout">
            <i class='bx bx-log-out'></i>
            <div class="name-job">
              <div class="profile_name">ออกจากระบบ</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <section class="home-section">
    <div class="home-content">
      <v-btn color="primary" @click="back" variant="outlined">
        กลับ
      </v-btn>
      <v-breadcrumbs :items="breadcrumbsItems"></v-breadcrumbs>
      <span class="profile-name">
        <v-avatar>
          <v-img alt="John" :src="userdata.Profileimg"></v-img>
        </v-avatar>
        username: {{ userdata.name }}
        <!-- <v-menu activator="parent">
          <v-list>
            <v-list-item>
              <v-list-item-title @click="logout">ออกจากระบบ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </span>
    </div>
    <NuxtPage style="margin: 2%;" />
  </section>
</template>
<script setup>
const { userdata } = useAuthStore()
const breadcrumbsItems = ref(['สตอคสินค้า', 'ภาพรวม'])


onMounted(() => {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    });
  }
})


function back() {
  console.log('กลับ');
}
function logout() {
  console.log('ออกจากระบบ');
}

</script>

<style scoped>
/* Google Fonts Import Link */
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --back: #00dcff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #fefeff;
  z-index: 100;
  transition: all 0.5s ease;
}

.sidebar.close {
  width: 78px;
}

.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidebar .logo-details i {
  font-size: 30px;
  color: #000000;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}

.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #000000;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}

.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}

.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}

.sidebar .nav-links li:hover {}

.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar.close .nav-links li .iocn-link {
  display: block
}

.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
}

.sidebar.close .nav-links i.arrow {
  display: none;
}

.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  transition: all 0.4s ease;
}

.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #ffffff;
  display: none;
}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}

.sidebar .nav-links li .sub-menu a {
  color: #000000;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 12px 0;
  transition: all 0.5s ease;
}

.sidebar.close .profile-details {
  background: none;
}

.sidebar.close .profile-details {
  width: 78px;
}

.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}

.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #ffffff;
  transition: all 0.5s ease;
}

.sidebar.close .profile-details img {
  padding: 10px;
}

.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}

.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}

.sidebar .profile-details .job {
  font-size: 12px;
}

.home-section {
  position: relative;
  background: #ffffff;
  height: 100vh;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}

.sidebar.close~.home-section {
  left: 78px;
  width: calc(100% - 78px);
}

.home-section .home-content {
  margin-left: 32px;
  height: 60px;
  display: flex;
  align-items: center;
}

.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #11101d;
  font-size: 35px;
}

.home-section .home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
}

.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}

@media (max-width: 400px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }

  .sidebar {
    width: 78px;
  }

  .sidebar.close {
    width: 0;
  }

  .home-section {
    left: 78px;
    width: calc(100% - 78px);
    z-index: 100;
  }

  .sidebar.close~.home-section {
    width: 100%;
    left: 0;
  }
}

.profile-name {
  float: right;
  right: 5%;
  position: absolute;
}

.back-button {
  padding: 3px;
  border: 2px solid;
  border-radius: 7px;
  width: 3%;
  border-color: var(--back);
  background: white;
  color: #36e4da;
  font-size: 16px;
}

.position-logo {
  left: 75px;
  position: absolute;
}
</style>