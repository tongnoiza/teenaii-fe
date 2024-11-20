<template>
  <div>

      <v-card>
          <v-tabs v-model="tab">
              <v-tab value="1">ภาพรวม</v-tab>
              <v-tab value="2">รายการสินค้าสตอค</v-tab>
              <v-tab value="3">หมวดหมู่</v-tab>
              <v-tab value="4">ประวัติการทำรายการ</v-tab>
          </v-tabs>
          <v-card-text>
              <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="1">
                      <v-row>
                          <v-col cols="4" sm="8">
                              <v-btn-toggle v-model="toggle_one" color="primary" mandatory shaped>
                                  <v-btn>
                                      ปีปัจจุบัน
                                  </v-btn>
                                  <v-btn>
                                      เดือนปัจจุบัน
                                  </v-btn>
                                  <v-btn>
                                      เมื่อวาน
                                  </v-btn>
                                  <v-btn>
                                      วันนี้
                                  </v-btn>
                                  <v-btn>
                                      ระบุช่วงเวลาเอง
                                  </v-btn>
                              </v-btn-toggle>
                          </v-col>
                          <v-col> <v-btn @click="ReportPrint" style="float: right;" color="primary"
                                  variant="outlined">
                                  พิมพ์รายงาน
                              </v-btn></v-col>
                      </v-row>
                      <v-card>
                          <v-spacer></v-spacer>
                          <v-row justify="end">
                              <v-col md="3" sm="7">
                                  <v-select clearable label="เลือกหมวดหมู่"
                                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                      variant="solo-filled"></v-select>
                              </v-col>
                          </v-row>
                          <v-divider></v-divider>
                          <v-table>
                              <thead>
                                  <tr>
                                      <th class="text-left">
                                          รายการสินค้าสต็อค
                                      </th>
                                      <th class="text-left">
                                          เพิ่มสต็อค
                                      </th>
                                      <th class="text-left">
                                          ลดสต็อค
                                      </th>
                                      <th class="text-left">
                                          ตัดใช้
                                      </th>
                                      <th class="text-left">
                                          คงเหลือ
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="item in Items" :key="item.name">
                                      <td>{{ item.StockProduct }}</td>
                                      <td>{{ item.addStock }}</td>
                                      <td>{{ item.Stockreduction }}</td>
                                      <td>{{ item.Utilize }}</td>
                                      <td>{{ item.remaining }}</td>
                                  </tr>
                              </tbody>
                          </v-table>
                      </v-card>
                  </v-tabs-window-item>
                  <v-tabs-window-item value="2">
                      Two
                  </v-tabs-window-item>

                  <v-tabs-window-item value="3">
                      Three
                  </v-tabs-window-item>
                  <v-tabs-window-item value="4">
                      Four
                  </v-tabs-window-item>
              </v-tabs-window>
          </v-card-text>
      </v-card>
  </div>
</template>
<script>
export default {
  data() {
      return {
          toggle_one: 0,
          tab: null,
          search: '',
          Items: [
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 2,
                  Stockreduction: 2,
                  Utilize: 2,
                  remaining: 2,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
              {
                  StockProduct: 'ติดตั้งแอร์',
                  addStock: 1,
                  Stockreduction: 1,
                  Utilize: 1,
                  remaining: 1,
              },
          ],

      }
  },
  methods: {
      ReportPrint() {
          console.log('พิมพ์รายงาน');
      },
  }
}
</script>
