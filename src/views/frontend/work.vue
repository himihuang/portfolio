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
    <!-- <div>
      <h3 class="h3 mb-2">{{ work['title'] }}</h3>
      <p class="body_text mb-6">{{ work['subtitle'] }}</p>
      <img :src="work['img']" alt="" class="aspect-video w-full" />
    </div>
    <div class="pt-10" v-html="work['html']">
     
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
            客戶本來都需要約時間到現場與顧客面對面簽約，不過客戶有時候待在公司的時間比較少，所以想說有沒有辦法線上就可以與客戶簽署電子合約，打破時空與時間的限制，讓客最近剛好要規劃行程，剛開始很直覺就很直覺的想要使用google map，想説直接在google map上面規劃行程，到時候打開就一目瞭然位置、距離、交通等等，結果找了一會兒竟然找不到在哪裡，這時候就會想說應該是藏在比較隱蔽的位置吧，我來看看廣大的網友們是否有分享解法，結果找到的解法是只能在桌機編輯…戶可以不用到公司就可以與顧客進行簽約，特別是電子簽名這部分。
          </p>
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">痛點</h4>
          <p>Google Maps是每部手機內置的應用程序，無論何時有地圖相關的需求，用戶都會打開Google Maps。因此，在規劃旅程路線時，人們自然會考慮直接使用Google Maps。畢竟，規劃旅程的過程就像是日常從A地到B地的路線圖，只是路線中的斷點增加了好幾個。此外，Google Maps本身在路線的交通選擇上，包括了目前已知的多種交通工具，而使用者產生的大量數據也使參考時間更加準確。 Google Maps上也提供了多種類別，方便使用者依照類別尋找地點。
然而，目前的Google Maps好像缺少其他旅遊規劃應用程式所具備的功能，例如根據旅遊天數來製定旅遊路線以及在路線中設置多個斷點。這種缺失可能限制了使用者在更具體和複雜的旅遊計劃中的靈活性。因此，我們認為提供這樣的功能將進一步豐富Google Maps的使用體驗，使使用者能夠更方便地根據他們的旅行需求進行詳細的路線規劃。</p>
        </div>

        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">目標</h4>
          <p>深入瞭解使用者對於旅遊規劃的期望和經驗，以及他們通常如何進行旅遊規劃。透過與其他相關應用程式的功能進行比較，我們致力於將Google Maps進行優化，以提供更符合使用者期望的友善介面，使其更適用於旅遊規劃的需求。</p>
        </div>
        
      </div>
      <div class="mb-6">
        <h3 class="h3 mb-6">定義 Define</h3>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">競品分析</h4>
          <p>透過在網路上搜尋，查看一般規劃旅行，會去使用的幾款APP和網頁，透過實際去使用比對他們的功能，以規劃旅行這個角度出發去檢視每個產品的易用性、方便性、以及最後的達成度，從中去發現可以優化的部分與可以參考的部分。</p>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_1.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">使用者訪談</h4>
          <p>透過剛剛的競品分析，透過比較已經可以大致上了解每個產品的優點和缺點，不過這時候還是要透過訪談這種質性研究，去驗證使用者的真正想法。</p>
          <div class="mt-4">
            <h5 class="h5 mb-3">受訪者</h5>
            <ul>
              <li>人數：5位</li>
              <li>年齡：25–35</li>
              <li>共通點：近半年都有去旅遊的經驗</li>
            </ul>
          </div>
          <div class="mt-4">
            <h5 class="h5 mb-3">問題</h5>
            <ul>
              <li>目前使用什麼方式規劃旅遊？請敘述一下規劃流程？（為什麼會用這種方式規劃）</li>
              <li>在規劃旅程的過程中，你最常做的事情是什麼？（為什麼這件事你最常做）</li>
              <li>透過哪些方式或者手段搜集（景點或餐廳）（住宿）的相關資料？（為什麼用這些方式）</li>
              <li>擁有哪些3C產品？旅行過程中會怎麼使用這些3C產品呢？（為什麼？）</li>
              <li>最後一次旅行時什麼時候？過程中遇到什麼困難？怎麼解決的？（為什麼這件事最常做）</li>
            </ul>
          </div>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_2.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">親合圖</h4>
          <p>透過剛剛的競品分析，透過比較已經可以大致上了解每個產品的優點和缺點，不從訪談中獲取的資料，透過將相似意思的便利貼歸納與整理，去精煉粹取出受訪者真正的想法（洞見）過這時候還是要透過訪談這種質性研究，去驗證使用者的真正想法。</p>
          
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_3.png?raw=true"
            alt=""
            class="w-full"
          />
          <p>以上是從眾多便利貼得出的詮釋，其中與本次專案有高度相關的部分用粉色便利貼及匡線標示起來。</p>
          <div class="mt-4">
            <p>從這些框起來的便利貼中（詮釋），我們又可以將一些相似的便利貼歸類在一起，得出以下洞見。</p>
            <h5 class="h5 mb-3">使用者旅行規劃的行為</h5>
            <ul>
              <li>使用者會先記錄旅行計劃，然後將這些點標示在地圖上</li>
              <li>使用者會追蹤旅行相關的內容，並將喜歡的景點或餐廳存起來</li>
            </ul>
          </div>
          <div class="mt-4">
            <h5 class="h5 mb-3">使用者在旅行中的行為</h5>
            <ul>
              <li>使用者在旅行途中會使用google地圖查看地點的位置和距離</li>
              <li>使用者會攜帶手機以便查看手機查看地點、拍照和發文</li>
            </ul>
          </div>
          <div class="mt-4">
            <h5 class="h5 mb-3">使用者在住宿的需求</h5>
            <ul>
              <li>使用者在找住宿時會查看評價，尤其是負評。</li>
            </ul>
          </div>
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">使用者輪廓（Persona）</h4>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_4.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">使用者旅程地圖（User Journey Map））</h4>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_5.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">使用者路徑（User Flow）</h4>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_6.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
      </div>
      <div class="mb-6">
        <h3 class="h3 mb-6">設計 Design</h3>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">wireframe</h4>
       
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_7.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">Style Guide 設計規範</h4>
       
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_8.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">Feature Intro 功能介紹</h4>
          
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_9.png?raw=true"
            alt=""
            class="w-full"
          />
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_10.png?raw=true"
            alt=""
            class="w-full"
          />
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_11.png?raw=true"
            alt=""
            class="w-full"
          />
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/googleMap_12.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div class="pb-6 mb-6">
          <h4 class="h4 mb-3">原型(Prototype) </h4>
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ff9saGEF7eCvbsdldCdvjQD%2FGoogle-Map-%257C-Redesign-Case-Study%3Fpage-id%3D235%253A9627%26type%3Ddesign%26node-id%3D236-13385%26viewport%3D486%252C507%252C0.17%26t%3DZNU3qdrqkKjqWzzj-1%26scaling%3Dscale-down%26starting-point-node-id%3D236%253A13385%26mode%3Ddesign" allowfullscreen></iframe>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="h3 mb-6">總結 Conclusion</h3>
        <div class="pb-6 mb-6">
          <p>
            這次的Google Map重新設計主要專注於旅程規劃功能，因此頁面的修改主要著眼於這個功能頁面的改進。透過使用者訪談，我們真正深入了解使用者在規劃旅行和旅途中的行為及困擾，以使用者的角度優化產品。在整理使用者見解的過程中，我們發現有多個層面可以進行優化，但類似產品迭代的概念，一次只能有一個主要的方向，無法一次性優化所有功能。儘管如此，這次迭代確實從使用者訪談中獲得了許多寶貴的見解。
          </p>
          <br>
          <p>透過使用者訪談，我們瞭解到使用者在規劃旅途和旅途中的常見行為，並透過競品分析了解實現這些功能的方法。由於我最近正在計畫旅行，使用每個產品的過程中深刻體會到各種功能的優勢和不足。這使我能夠明確了解哪些功能使用起來更順暢，哪些時候會感到卡頓。透過優化，我們不僅確保產品達到使用者的期望，還能夠有效地在其中完成任務。</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
</style>

