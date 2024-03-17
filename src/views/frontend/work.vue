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
const msg = ref(null)
const key = ref(work.value['key'])

const check = () => {
  if (msg.value == 5411) {
    key.value = !key.value
    console.log(key.value)
  }
}

onMounted(() => {
  showLoading.value = false
})
</script>


<template>
  <loading :active="showLoading"></loading>

  <div class="mx-auto w-screen h-screen flex justify-center items-center" v-if="key">
    <input
      class="input"
      type="text"
      v-model="msg"
      @keyup.enter="check()"
      placeholder="請輸入密碼"
    />
    <button class="btn-fill" @click="check()">送出</button>
  </div>
  <div class="container mx-auto px-4 py-20" v-if="!key">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4">
        <div>
          <h3 class="h3 mb-2">{{ work['title'] }}</h3>
          <p class="body_text mb-6">{{ work['subtitle'] }}</p>
          <img :src="work['img']" alt="" class="aspect-video w-full" />
        </div>
        <div class="pt-10" v-html="work['html']">
     
    </div>
        <!-- <div class="mb-6">
          <h3 class="h3 mb-6">設計流程 Process</h3>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/process_pdf.png?raw=true"
            alt=""
            class="w-full pt-4"
          />
        </div>
        <div>
          <div class="mb-6">
            <h3 class="h3 mb-6">起因</h3>
            <div class="pb-6 mb-6">
              <h4 class="h4 mb-3">背景</h4>
              <p>
                想要了解現在學習網站動態效果的學員的學習方式、學習管道，以及學習方法，以此來規劃出在每個學習階段符合學員需求的學習內容且適合他們的輸出方式，並達到版塊希望能夠培育數位人才且帶動產業發展的目標。
              </p>
              <img
                src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_1.png?raw=true"
                alt=""
                class="w-full pt-4"
              />
            </div>
            <div class="pb-6 mb-6">
              <h4 class="h4 mb-3">問題</h4>
              <p>首先需要制定使用者的需求假說，透過這個階段設定的假說再去做驗證與收斂</p>
              <ul>
                <li>
                  <h5>價值主張地圖</h5>
                  <p>
                    這時候需要先考慮各種假設，從產品面跟使用者層面出發，設想各種相關的假說（這時候可以不用管合理性，先把各種假設都先寫下來）
                  </p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_2.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
                <li>
                  <h5>象限評估</h5>
                  <p>利用象限去和組員或是同事討論出是否是目前重要且有證據支撐的假說</p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_3.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
                <li>
                  <h5>確定這次研究的重要議題</h5>
                  <p>
                    依著一開始客戶的研究目標，從剛剛的象限中討論後選出重要與具有證據的幾個假說
                    之後再依著這幾個假說下去做驗證
                  </p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_4.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-6">
            <h3 class="h3 mb-6">經過</h3>
            <div class="pb-6 mb-6">
              <h4 class="h4 mb-3">研究方法</h4>
              <p>訪談問券製作、訪綱擬定...等等</p>
              <ul>
                <li>
                  <h5>拆解重要議題</h5>
                  <p>
                    從選出的議題中，找出有哪些面向，在從這些面向去發想更多相關的元素，然後找出這些元素哪些是與這個議題有強烈的關係，就是次要面向的指標
                  </p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_5.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
                <li>
                  <h5>發想目標性問題</h5>
                  <p>
                    這個問券的目的是要從問卷的問題中去找出可能的潛在受訪者，所以可以從剛剛我們想到的大面向中的各種次要面向，由此去發想可能的目標性問題
                  </p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_6.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
                <li>
                  <h5>問券邏輯設計</h5>
                  <p>
                    問券前期透過先前的上課經驗，再來是進修網站動態相關經驗，進而詢問答題者對於整體環境變遷所帶來的影響等去篩選出符合要求的訪談受訪者。
                  </p>
                </li>
                <li>
                  <h5>設計訪談訪綱</h5>
                  <p>從不同面向去思考問題，面向包含：認知/行為流程/決策/人事時地物等等去研擬訪綱</p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_7.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-6">
            <h3 class="h3 mb-6">結果</h3>
            <div class="pb-6 mb-6">
              <h4 class="h4 mb-3">研究洞見呈現</h4>

              <ul>
                <li>
                  <h5>資料切片</h5>
                  <p>
                    將訪談整理成一張一張的資料切片，將有完整脈絡的文字描述整理成一張切片，原因可以為獨立的一張切片，而結果需要有原因支撐才能成為一張切片。
                  </p>
                </li>
                <li>
                  <h5>親合圖</h5>
                  <p>
                    將相關的切片集合在一起，並且透過發現這些切片中隱含的關聯性，找出這切片的第一層觀察發現。
                  </p>
                  <br />
                  <p>
                    （如果資料夠多的情況下）
                    將第一層發現集合在一起，可以再從中找到更深層的研究洞見（回扣研究目標）
                  </p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_8.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
                <li>
                  <h5>研究報告</h5>
                  <p>
                    最後將全部的洞見整理成一份研究簡報口頭發表給客戶，並且提供給客戶讓他們可以從簡報內容，去針對後面的服務做參考並且規劃。
                  </p>
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_9.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                  <img
                    src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/block_img_10.png?raw=true"
                    alt=""
                    class="w-full pt-4"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>


<style>
</style>

