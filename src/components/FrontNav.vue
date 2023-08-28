<script setup>
import { onMounted, ref, watch } from 'vue'
import {useRoute} from 'vue-router';

const deskNavH = ref(null)
const navfixShow = ref(false)
const hamShow = ref(false)
const route = useRoute();
watch(route ,()=>{
    hamShow.value = false
})

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    const scrollTop = e.target.documentElement.scrollTop

    if (scrollTop > deskNavH.value.offsetHeight) {
      navfixShow.value = true
    } else {
      navfixShow.value = false
    }
  })
})
</script>


<template>
  <nav ref="deskNavH" :class="{ navfix: navfixShow }">
    <div class="container mx-auto w-full flex justify-between items-center px-4">
      <div class="z-50">
        <router-link to="/" class="px-0 exact">
          <img src="~@/assets/img/logo.png" alt="" class="md:w-[13rem] w-[9rem]" />
        </router-link>
      </div>
      <div class="font-light hidden md:block">
        <RouterLink to="/about" class="btn px-2 ml-6">About</RouterLink>
        <RouterLink to="/work" class="btn px-2 ml-6">Work</RouterLink>
        <RouterLink to="#" class="btn px-2 ml-6 exact">Resume</RouterLink>
        <RouterLink to="/contact" class="btn px-2 ml-6">Contact</RouterLink>
      </div>
      <div class="ham-wrap block md:hidden">
        <input type="checkbox" id="ham" v-model="hamShow"/>
        <label class="ham z-50" for="ham">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div
          class="mobile-nav w-full h-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-white z-10"
        >
          <RouterLink to="/about" class="btn px-2 ml-6 h4 mb-6">About</RouterLink>
          <RouterLink to="/work" class="btn px-2 ml-6 h4 mb-6">Work</RouterLink>
          <RouterLink to="#" class="btn px-2 ml-6 exact h4 mb-6">Resume</RouterLink>
          <RouterLink to="/contact" class="btn px-2 ml-6 h4 mb-6">Contact</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
.ham {
  position: relative;
  cursor: pointer;
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: black;
    margin-top: 6px;
    transition: all 0.5s;
    &:nth-child(2) {
      width: 16px;
    }
  }
}

.mobile-nav{
    display: none;
}

#ham {
  display: none;
  &:checked ~ .ham {
    span {
      &:nth-child(1) {
        transform-origin: 0%;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: translateX(200px);
      }
      &:nth-child(3) {
        transform-origin: 0% 100%;
        transform: rotate(-45deg);
      }
    }
  }
  &:checked ~ .mobile-nav{
    display: flex;
  }
}
.navfix {
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.5s;
    z-index: 99;
}

.is--active.exact::before {
  height: 0;
}
.is--active {
  display: inline-block;
  position: relative;
}

.is--active::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  transition: all 0.5s;
}
</style>