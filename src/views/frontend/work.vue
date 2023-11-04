<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import worksJson from '@/public/work.json'

const works = ref([])
works.value = worksJson

// const getImgPath = (path) /work.json'

const route = useRoute()

const work = ref([])
const id = ref(0)
id.value = route.params.id - 1
work.value = worksJson[id.value]
const showLoading = ref(true)
onMounted(() => {
  showLoading.value = false
})
</script>


<template>
  <loading :active="showLoading"></loading>

  <div class="container mx-auto px-4 py-20">
    <div>
      <h3 class="h3 mb-2">{{ work['title'] }}</h3>
      <p class="body_text mb-6">{{ work['subtitle'] }}</p>
      <img :src="work['img']" alt="" class="aspect-video w-full" />
    </div>
    <!-- <div class="pt-10" v-html="work['html']">
     
    </div> -->
    <div class="mb-6">
      <h3 class="h3 mb-6">設計流程 Process</h3>
      <img
        src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/process_pdf.png?raw=true"
        alt=""
        class="w-full"
      />
    </div>
    <div>
      <div class="mb-6">
        <h3 class="h3 mb-6">發現 Discover</h3>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">背景</h4>
          <p>
            客戶本來都需要約時間到現場與顧客面對面簽約，不過客戶有時候待在公司的時間比較少，所以想說有沒有辦法線上就可以與客戶簽署電子合約，打破時空與時間的限制，讓客戶可以不用到公司就可以與顧客進行簽約，特別是電子簽名這部分。
          </p>
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">挑戰</h4>
          <ol>
            <li>1. 在有限的預算內達成符合客戶需求的產品</li>
            <li>
              2. 利用UX
              Research去解決客戶在後台（編輯pdf)可能會遇到的問題，以及顧客在前台（簽署電子簽名）可能會遇到的問題
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="h3 mb-6">定義 Define</h3>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">使用者研究</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ol class="h5 list-disc pl-4">
              <li>桌面研究</li>
            </ol>
            <div>
              透過研究市面上相似產品的流程與功能，理解功能的易用性流程，理解哪些部份對於使用者而言是好用的功能，並且在符合客戶預算的情況下，工程師不需要花費很大的研究成本就可以達成
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ol class="h5 list-disc pl-4">
              <li>任務拆解</li>
              <li>使用者故事</li>
              <li>使用者流程桌面研究</li>
            </ol>
            <div>
              理解每個任務背後的流程與可能會遇到的痛點（包含：客戶編輯pdf、客戶收到顧客的回覆...），理解使用者的任務進而去做出符合使用者需求的流程，並且去分類這個階段哪些功能是必要功能、哪些功能可以留待下次優化在執行。
            </div>
           
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <img
              src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_flow.png?raw=true"
              alt=""
              class="w-fit"
            />
            <img
              src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_flow_2.png?raw=true"
              alt=""
              class="w-fit"
            />
          </div>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="h3 mb-6">設計 Design</h3>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">wireframe</h4>
          <p>
            透過wireframe去了解每個功能擺放的位置與對應的頁面，也方便透過wireframe去跟工程師溝通畫面，確認雙方的認知是一致的。也確認是否每一個使用者的任務都有被考慮進來，每個需求都有適當地獲得解決。
          </p>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_wireframe.png?raw=true"
            alt=""
            class="w-full"
          />
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_wireframe_2.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">mockup</h4>
          <p>後台：客戶編輯完pdf後，會產一組連結，讓客戶可以轉傳給顧客</p>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_mockup_1.png?raw=true"
            alt=""
            class="w-full"
          />
          <p>後台：客戶可以查看顧客回覆的內容</p>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_mockup_2.png?raw=true"
            alt=""
            class="w-full"
          />
          <p>前台：顧客取得連結後可以線上簽署文件，簽署完成後即會回傳給客戶</p>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_mockup_3.png?raw=true"
            alt=""
            class="w-full"
          />

        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">Style Guide</h4>
          <p>在創作視覺稿的同時，也一邊整理設計稿的設計準則，若是產品需要擴增新的頁面，一方面可以依照準則去擴充頁面，一方面交付給工程師，他們也比較有一依循的方向在製作元件上面。</p>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/pdf_designGuide.png?raw=true"
            alt=""
            class="w-full"
          />

        </div>
      </div>
      <div class="mb-6">
        <h3 class="h3 mb-6">交付 Deliver</h3>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-4">測試與迭代</h4>
          <p>
            完成開發後，協助工程師去測試每個流程的流暢度以及在不同的裝置間轉換是否都可以順利達成任務。由此發現若是在哪些裝置上會出現哪些問題，最後再與工程師溝通協調以此去找出最小變動的方式去改善以進行迭代。
          </p>
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-4">交付</h4>
          <p>
            確認完每個步驟都沒問題後，就會交付予客戶，並且針對目前的流程去對客戶進行一個簡易的後台教學。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
</style>

