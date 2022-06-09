import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    postArray: [
      {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 1,
          ClassId: 1,
          title: "1機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 7452,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 1,
          ClassId: 2,
          title: "2機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 456,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 2,
          ClassId: 1,
          title: "3機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 897412,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 2,
          ClassId: 2,
          title: "4機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 123,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "",
          epilogue: "",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 3,
          ClassId: 1,
          title: "5機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 9085,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 3,
          ClassId: 2,
          title: "6機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 186461,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 4,
          ClassId: 1,
          title: "7機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 21651,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 4,
          ClassId: 2,
          title: "8機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 4654321,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 1,
          ClassId: 1,
          title: "9機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 546231,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:true,
          categoryId: 1,
          TypeId: 1,
          ClassId: 2,
          title: "10機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 456123,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 2,
          ClassId: 1,
          title: "11機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 45610,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 2,
          ClassId: 2,
          title: "12機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 654123,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "",
          epilogue: "",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 3,
          ClassId: 1,
          title: "13機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 56410,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 3,
          ClassId: 2,
          title: "14機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 3210,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 4,
          ClassId: 1,
          title: "15機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 4561,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 4,
          ClassId: 2,
          title: "16機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 56412,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 1,
          ClassId: 1,
          title: "17機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 561320,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 1,
          ClassId: 2,
          title: "18機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 65132,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 2,
          ClassId: 1,
          title: "19機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 561320,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 2,
          ClassId: 2,
          title: "20機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 541,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "",
          text: "",
          epilogue: "",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 3,
          ClassId: 1,
          title: "21機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 231,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 3,
          ClassId: 2,
          title: "22機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 23100,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 4,
          ClassId: 1,
          title: "23機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 2310,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }, {
          showOnBooard:false,
          categoryId: 1,
          TypeId: 4,
          ClassId: 2,
          title: "24機場搭防疫計程車我們付費，文章標題第二列",
          createTime: "2022/06/08",
          viewer: 3054120,
          mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
          foreword: "前言",
          text: "內文",
          epilogue: "結語",
      }
  ]
  }),
  getters:{
    top10Post: (state)=>(state.postArray.sort((a,b)=>(b.viewer-a.viewer))).slice(0,10)
  }
})