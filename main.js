"use strict";
let parent=document.querySelector('#parent')
let rad1=document.querySelector('#rad1')
let rad2=document.querySelector('#rad2')
let rad3=document.querySelector('#rad3')
let inp=document.querySelector('#inp')
let elem=document.querySelector('#elem')
let str=document.querySelector('.start')

function func(data) {
  if (data >= "03.21" && data <= "04.20") {
    return "oven";
  } else if (data >= "04.21" && data <= "05.20") {
    return "teles";
  } else if (data >= "05.21" && data <= "06.20") {
    return "blizneci";
  } else if (data >= "06.21" && data <= "07.22") {
    return "rak";
  } else if (data >= "07.23" && data <= "08.22") {
    return "lev";
  } else if (data >= "08.23" && data <= "09.22") {
    return "deva";
  } else if (data >= "09.23" && data <= "10.22") {
    return "vesi";
  } else if (data >= "10.23" && data <= "11.22") {
    return "skorpion";
  } else if (data >= "11.23" && data <= "12.21") {
    return "strelec";
  } else if ((data >= "12.22" && data <= "12.31") || data <= "01.19") {
    return "kozerog";
  } else if (data >= "01.20" && data <= "02.19") {
    return "vodoley";
  } else if (data >= "02.20" && data <= "03.20") {
    return "ribi";
  }
}
let employees = [
  {
    name: "oven",
    today:
    "Qo'y oy boshida faol bo'ladi va o'z imkoniyatlarini to'liq ro'yobga chiqara oladi.",      
    tomorrow:
    "Oyning boshidanoq ular professional jihatdan omadga ega bo'lishadi.",      
    afterTomorrow: "Qo'y bu oyda o'zini muvaffaqiyatli ifoda eta oladi.",
  },
  {
    name: "teles",
    today:
    "Oyning boshida Torosda boshqalar bilan tushunmovchiliklar va oilaviy nizolar bo'lishi mumkin.",
    tomorrow: "Ehtiyot bo'ling va his-tuyg'ularingizni kuzatib boring.",
    afterTomorrow:
    "Ishda, aksincha, omad hamroh bo'ladi va moliyaviy mukofotlar kutiladi.",
      },
  {
    name: "blizneci",
    today: "Har qanday tashabbus va investitsiyalar uchun ajoyib oy.",
    tomorrow: "yozning oxirgi oyini dam olish va to'ldirishga bag'ishlang.",
    afterTomorrow: "Bayram romantikasi va yangi sevgi munosabatlari mumkin.",
  },
  {
    name: "rak",
    today: "avgust oyida samarali ishlash.",
    tomorrow:
      "Oila va qarindoshlar bilan vaqt o'tkazish uchun yaxshi vaqt.",
    afterTomorrow: "Ertadan keyin sizni sovrin kutmoqda",
  },
  {
    name: "lev",
    today: "Avgust Leo uchun eng qulay bo'ladi",
    tomorrow: "Hammasi yaxshi bo'ladi",
    afterTomorrow: "moliyaviy ahvol barqarorlashmoqda",
  },
  {
    name: "deva",
    today: "oyning boshi muvaffaqiyatsiz bo'ladi",
    tomorrow: "sizni kutilmagan sovg'alar va naqd pul bilan xursand qiladi",
    afterTomorrow: " Mumkin bo'lgan sog'liq muammolari.",
  },
  {
    name: "vesi",
    today: "Ishingizni o'zgartirishingiz mumkin",
    tomorrow: "yashash joyi yoki yashash mamlakati.",
    afterTomorrow: "Mansab ko'tarilish imkoniyati ",
  },
  {
    name: "skorpion",
    today: "Scorpio uchun oyning oxiri voqealarga boy bo'ladi",
    tomorrow: "Shoshilinch ish safarlari mumkin.",
    afterTomorrow: "Avgust oyining oxirgi oyini o'z-o'zini tarbiyalashga bag'ishlang.",
  },
  {
    name: "strelec",
    today: "Strelec uchun avgust oyidagi munajjimlar bashorati omad keltiradi",
    tomorrow: " Ushbu imkoniyatdan foydalaning va avval boshlangan barcha vazifalarni bajaring..",
    afterTomorrow: " Har qanday moliyaviy operatsiyalar uchun qulay davr.",
  },
  {
    name: "kozerog",
    today: "Uloq uchun eng qulay oy.",
    tomorrow: " Hammasi yaxshi bo'ladi",
    afterTomorrow: "muammolarning oldi olinadi.",
  },
  {
    name: "vodoley",
    today: "Avgust uchun Aquarius munajjimlar bashorati ba'zi kutilmagan hodisalarga ega.",
    tomorrow: "Barcha urinishlar uchun qulay davr. ",
    afterTomorrow: "dam olish va ijobiy his-tuyg'ularni unuting. ",
  },
  {
    name: "ribi",
    today: "Baliqlar butun yoz davomida faol ishladilar ",
    tomorrow: "Oilaviy dam olishga vaqt ajrating",
    afterTomorrow: " lekin sog'lig'ingizga e'tibor bering. ",
  },
];

inp.addEventListener('keypress', function(event){
  elem.textContent=null;
  if(event.key=="Enter"){
      for(let employe of employees){
          if(employe.name==func(inp.value) && rad1.checked){
              elem.textContent+=employe.today;
          }
          else if (employe.name==func(inp.value) && rad2.checked){
              elem.textContent+=employe.tomorrow;
          }
          else if (employe.name==func(inp.value) && rad3.checked){
              elem.textContent+=employe.afterTomorrow;
          }
      }
  }
})


str.addEventListener('click', function(event){
  elem.textContent=null;  
      for(let employe of employees){
          if(employe.name==func(inp.value) && rad1.checked){
              elem.textContent+=employe.today;
          }
          else if (employe.name==func(inp.value) && rad2.checked){
              elem.textContent+=employe.tomorrow;
          }
          else if (employe.name==func(inp.value) && rad3.checked){
              elem.textContent+=employe.afterTomorrow;
          }
      }
})
