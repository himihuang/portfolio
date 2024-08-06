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
      <div class="sm:col-start-2 sm:col-span-4 col-start-1 col-span-11">
        <div>
          <h3 class="h3 mb-2">{{ work['title'] }}</h3>
          <p class="body_text mb-6">{{ work['subtitle'] }}</p>
          <img :src="work['img']" alt="" class="aspect-video w-full" />
        </div>
        <div class="pt-10" v-html="work['html']"></div>
        <!-- <div class="text-blue-600 text-gray-500 h5"></div> -->
<!-- 
        <div class="mb-6">
          <h3 class="h3 mb-6">設計流程 Process</h3>
          <img
            src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/process_block.png?raw=true"
            alt=""
            class="w-full"
          />
        </div>
        <div>
          <div class="mb-6">
            <h3 class="h3 mb-6">起因 Cause</h3>
            <div class="pb-3">
              <h4 class="h4 mb-3 text-blue-600">背景</h4>
              <p>
                目前的後台系統的財務報表，僅能查看定期清潔的總訂單數量，沒辦法看到對應的的訂單列表，導致財務需要來回手動的去查看與對照每筆訂單總和的價格是否符合當月收入，再去記錄到財務的excel報表裡面
              </p>
            </div>
            <div class="pb-6 mb-6 text-gray-500">
              <h4 class="h4 mb-3">Bckground</h4>
              <p>
                Currently, the financial reports of the backend system can only view the total
                number of regular cleaning orders, but not the corresponding list of orders,
                resulting in the need for finance to manually go back and forth to check and match
                the total price of each order against the current month's revenue, and then record
                it in the financial excel report.
              </p>
            </div>
            <div class="pb-3">
              <h4 class="h4 mb-3 text-blue-600">挑戰</h4>
              <ol>
                <li>1. 整合進目前的後台系統裡面，設計邏輯貼合目前系統</li>
                <li>2. 理解利害關係人的情境與使用習慣</li>
              </ol>
            </div>
            <div class="pb-6 mb-6 text-gray-500">
              <h4 class="h4 mb-3">Challenge</h4>
              <ol>
                <li>
                  1. Integration into the current backend system, the design logic fits the current
                  system.
                </li>
                <li>2. Understanding Stakeholder Contexts and Usage Habits.</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="h3 mb-6">經過 Process</h3>
          <div class="pb-6 mb-6">
            <h4 class="h4 mb-3 text-blue-600">使用者研究</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
              <ol class="h5 list-disc pl-4">
                <li>利害關係人訪談</li>
              </ol>
              <ol class="list-disc pl-4">
                <li>痛點一：需要逐筆對照案件金額，再去記錄到excel裡面</li>
                <li>痛點二：目前的財務報表僅顯示定期的當月總收入，還要逐筆去訂單查詢確認</li>
              </ol>
            </div>
            <img
              src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_1.png?raw=true"
              alt=""
              class="w-full mb-6"
            />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ol class="h5 list-disc pl-4">
                <li>使用者故事</li>
                <li>使用者流程</li>
                <li>使用者任務拆解</li>
              </ol>
              <div>
                理解客戶的使用情境以及使用狀況，知道客戶需要在每月月底的時候進行對帳與彙整帳目，且需要知道每筆案件的發票開立狀況。
              </div>
            </div>
            <div class="pb-6 mb-6 text-gray-500">
              <h4 class="h4 mb-3">User research</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <ol class="h5 list-disc pl-4">
                  <li>Stakeholder Interviews</li>
                </ol>
                <ol class="list-disc pl-4">
                  <li>
                    Pain point:You need to check the amount of the case one by one, and then record
                    it in excel.
                  </li>
                  <li>
                    Pain point:Currently, the financial statement only shows the regular total
                    revenue of the month, and you have to check the order to confirm it one by one.
                  </li>
                </ol>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ol class="h5 list-disc pl-4">
                  <li>User Story</li>
                  <li>User Flow</li>
                  <li>User task disassembly</li>
                </ol>
                <div>
                  Understand the customer's usage context and status, know that the customer needs
                  to reconcile and consolidate accounts at the end of each month, and need to know
                  the status of invoicing on a case-by-case basis.
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaingnDashboard_flow.png?raw=true"
                  alt=""
                  class="w-fit"
                />
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaingnDashboard_flow_2.png?raw=true"
                  alt=""
                  class="w-fit"
                />
              </div>
            </div>
          </div>
          <div class="mb-6">
            <h3 class="h4 mb-6 text-blue-600">設計 Design</h3>

            <div class="pb-6 mb-6">
              <h4 class="h4 mb-3">功能介紹 <span class="text-gray-500">Feature Intro</span></h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
                <div>
                  <p class="h5">鐘點清潔特點介紹</p>
                  <ul class="body_text list-disc pl-4">
                    <li>將客戶給予的搜尋條件重新理解，並且實際實踐在設計稿上面</li>
                    <li>每個搜尋條件都可以獨立搜尋</li>
                    <li>
                      加時獨立為另外一筆單，因為在加時的情況是客人在當場有需要會在購買的加時服務，客人可以重新選擇支付方式，所以對於系統而言是一筆新的單
                    </li>
                  </ul>
                  <p class="h5 text-gray-500">Introduction of hourly cleaning features</p>
                  <ul class="body_text list-disc pl-4">
                    <li class="text-gray-500">
                      Reinterpret the search criteria given by the client and actually implement
                      them in the design.
                    </li>
                    <li class="text-gray-500">
                      Each search criterion can be searched independently
                    </li>
                    <li class="text-gray-500">
                      Overtime payment is independent of another order, because in the case of
                      overtime is the guest has the need on the spot will be in the purchase of
                      overtime services, the guest can re-select the mode of payment, so for the
                      system is a new order
                    </li>
                  </ul>
                </div>
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_2.png?raw=true"
                  alt=""
                  class="w-full outline outline-1 divide-black"
                />
              </div>
              <div class="grid grid-cols-1 gap-6 mb-6 items-center">
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_3.png?raw=true"
                  alt=""
                  class="w-full mb-6"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
                <div>
                  <p class="h5">定期清潔特點介紹</p>
                  <ul class="body_text list-disc pl-4">
                    <li>單據種類會影響下面的收款明細，通常定期都會是一樣的單據種類</li>
                    <li>
                      所以如果是需要單據的狀態下，且款項已到款的前提下就會顯示待開立，這時候會計就會知道需要去開立這張單據
                    </li>
                  </ul>
                  <p class="h5 text-gray-500">Introduction of regular cleaning features</p>
                  <ul class="body_text list-disc pl-4">
                    <li class="text-gray-500">
                      The type of invoice affects the following breakdown of receipts, which are
                      usually of the same type on a regular basis.
                    </li>
                    <li class="text-gray-500">
                      Each search criterion can be searched independently
                    </li>
                  </ul>
                </div>
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_4.png?raw=true"
                  alt=""
                  class="w-full outline outline-1 divide-black"
                />
              </div>
              <div class="grid grid-cols-1 gap-6 mb-6 items-center">
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_5.png?raw=true"
                  alt=""
                  class="w-full mb-6"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
                <div>
                  <p class="h5">特殊清潔特點介紹</p>
                  <ul class="body_text list-disc pl-4">
                    <li>會計根據單據種類，再完成服務後再去開立單據</li>
                    <li>
                      特殊清潔新增的部分，業務需要跟客人確認的項目，後面會計才能根據業務回覆的內容去做帳目的查核
                    </li>
                    <li>會計實際收到款項的時間</li>
                    <li>紀錄會計匯給廠商的時間（系統記錄時間），跟實際匯款日期跟款項</li>
                  </ul>
                  <p class="h5 text-gray-500">Introduction of regular cleaning features</p>
                  <ul class="body_text list-disc pl-4">
                    <li class="text-gray-500">
                      The accountant will complete the service according to the type of invoice and
                      then open the invoice.
                    </li>
                    <li class="text-gray-500">
                      Special Cleaning New Part, the business needs to confirm the item with the
                      customer, then the accountant can check the account according to the content
                      of the business reply.
                    </li>
                    <li>Accounting for the time of actual receipt of payment</li>
                    <li>
                      Record the time of remittance to the vendor (system record time), with the
                      actual remittance date and amount.
                    </li>
                  </ul>
                </div>
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_6.png?raw=true"
                  alt=""
                  class="w-full outline outline-1 divide-black"
                />
              </div>
              <div class="grid grid-cols-1 gap-6 mb-6 items-center">
                <img
                  src="https://github.com/himihuang/portfolio/blob/main/src/assets/img/cleaningDashboard_img_7.png?raw=true"
                  alt=""
                  class="w-full mb-6"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-6">
              <h3 class="h3 mb-6">結果 Results</h3>
              <div class="pb-3">
                <h4 class="h4 mb-3 text-blue-600">預估效益</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                  <ol class="h5 list-disc pl-4">
                    <li><span class="text-2xl">60%</span></li>
                  </ol>
                  <ol class="list-disc pl-4">
                    <li>至少提升一倍會計得工作效率</li>
                    <li>減少會計來回對資料的次數</li>
                    <li>下載下來同步紀錄到會計excel裡面</li>
                  </ol>
                </div>
              </div>
              <div class="pb-6 mb-6 text-gray-500">
                <h4 class="h4 mb-3">Estimated Benefits</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                  <ol class="h5 list-disc pl-4">
                    <li><span class="text-2xl">60%</span></li>
                  </ol>
                  <ol class="list-disc pl-4">
                    <li>At least double the efficiency of your work</li>
                    <li>Reduce the number of accounting round-trips for data matching</li>
                    <li>Download and synchronize the records to the accounting excel.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>



<style>
</style>

