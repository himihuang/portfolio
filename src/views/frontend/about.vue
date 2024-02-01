<script setup>
import { ref, onMounted } from 'vue'

const showLoading = ref(true)
onMounted(() => {
  showLoading.value = false
})
</script>

<template>
  <loading :active="showLoading"></loading>
  <div class="container mx-auto py-20 px-4">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-start-1 col-end-13 md:col-end-11">
        <div class="pb-10 text-left">

          <img
            src="@/assets/img/about_img.jpg"
            alt=""
            class="aspect-auto h-80 "
          />
        </div>
        <div class="mb-6">
          <p>
            我一直以來都認為，設計不僅僅是關於美感，更是關於提供出色的使用者體驗。我想分享一下我自己的設計旅程。
          </p>
          <br />
          <p>
            從一開始，我對前端程式設計充滿好奇心。我認為寫程式是一個可以將設計實踐的工具，可以將設計變成真正可以實際看得到的頁面。這個過程不僅教會了我如何理解用戶在網站上的需求，還使我更深刻地理解了設計和技術之間的互動。
          </p>
          <br />
          <p>
            然而，我逐漸意識到，要創建真正優秀的產品，不僅需要美觀的外觀，還需要優質的使用者體驗。這激發了我對UX（使用者體驗）的熱情，於是我開始不斷進修，學習如何設計更具吸引力、易用性和可訪問性的產品。我堅信，設計師應該擁有一種「UX
            mindset」，即將用戶的需求和期望置於首位，並且將商業價值隨時存在心中，在設計過程中不斷追求最佳解決方案，創造出符合商業價值且符合使用者期待的產品。
          </p>
          <br />
          <p>
            我目前正在不斷精進自己的技能，通過參加工作坊、閱讀最新的UX研究以及與同事們分享經驗，以確保我能夠提供最佳的設計和使用者體驗。我的目標是將我的設計帶到更高的水平，並將設計與技術以及用戶需求無縫結合。
          </p>
          <br />
          <p>
            總之，我是一位充滿熱情、不斷進修並尋求不斷進步的UI/UX設計師。我相信設計可以改變世界，並且希望有機會與您一同創建卓越的產品和使用者體驗。謝謝您聆聽我的故事，期待能有機會與您合作！
          </p>
        </div>
        <div>
          <p>
            I've always believed that design is not just about aesthetics, but also about providing a great user experience. I would like to share my own design journey.
          </p>
          <br />
          <p>
            At the beginning, I was curious about front-end programming. I thought of programming as a tool to bring a design to life, to turn it into a real, an actual page that I could actually see. This process not only taught me how to understand the users' needs on a website, but also gave me a deeper understanding of the interaction between design and technology.
          </p>
          <br />
          <p>
            However, I came to realize that to create truly great products, you need more than just good looks, you need a great user experience. This inspired me to get passionate about UX (User Experience), and I started to study and learn how to design products that are more attractive, easy to use and accessible. I firmly believe that designers should have a "UX mindset" that puts the needs and expectations of the user first, and keep business value in mind at all times, constantly pursuing the best solution in the design process to create products that meet business value and user expectations.
          </p>
          <br />
          <p>
            I'm currently refining my skills by attending workshops, reading the latest UX research and sharing my experience with colleagues to ensure I'm able to deliver the best possible design and user experience. My goal is to take my designs to the next level and seamlessly combine them with technology and user needs.
          </p>
          <br />
          <p>
            Overall, I am a passionate UI/UX designer who is constantly learning and never stops looking to improve. I believe that design can change the world and would like to have the opportunity to work with you to create great products and user experiences. Thank you for listening to my story and I look forward to the opportunity to work with you!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>