import { ArticleType, PostCategoryType, PostClassType, postTypeType } from '@/types/post.type'
import { defineStore } from 'pinia'


const getPost = (postArray: Array<ArticleType>, id: string) => {
    console.log('getPost',id);
    console.log(postArray);
    
    return postArray.find(((post: ArticleType) => (post.firestoreId == id)))
}
const getCategoryPosts = (postArray: Array<ArticleType>, id: number) => {
    return postArray.filter(((post: ArticleType) => (post.categoryId === id)))
}
const getShowOnHomePosts = (postArray: Array<ArticleType>) => {
    return postArray.filter(((post: ArticleType) => (post.showOnHome)))
}

const getSortByViewerPosts = (postArray: Array<ArticleType>, postCount: null | number = null) => {
    if (postCount) {
        return postArray.sort((a, b) => (b.viewer - a.viewer)).slice(0, postCount)
    }
    return postArray.sort((a, b) => (b.viewer - a.viewer))

}


export const usePostStore = defineStore('post', {
    state: () => ({
        postCategoryArray: <Array<PostCategoryType>>[
            // {
            //     id: 1,
            //     key: "article",
            //     name: "防疫全攻略"
            // },
            // {
            //     id: 2,
            //     key: "news",
            //     name: "最新消息"
            // },
        ],
        postClassArray: <Array<PostClassType>>[
            // {
            //     id: 1,
            //     name: "最心文章"
            // }, {
            //     id: 2,
            //     name: "熱門議題"
            // },
        ],
        postTypeArray: <Array<postTypeType>>[
            // {
            //     id: 1,
            //     name: '優惠資訊'
            // }, {
            //     id: 2,
            //     name: '防疫資訊'
            // }, {
            //     id: 3,
            //     name: '營養健康'
            // }, {
            //     id: 4,
            //     name: '旅遊資訊'
            // },
        ],
        postArray: <Array<ArticleType>>[
            // {
            //     postId: 1,
            //     categoryId: 1,
            //     classId: 1,
            //     typeId: 1,
            //     showOnBoard: true,
            //     showOnHome: true,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 2,
            //     categoryId: 1,
            //     classId: 1,
            //     typeId: 2,
            //     showOnBoard: true,
            //     showOnHome: true,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 3,
            //     categoryId: 1,
            //     classId: 1,
            //     typeId: 3,
            //     showOnBoard: true,
            //     showOnHome: true,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 4,
            //     categoryId: 1,
            //     classId: 1,
            //     typeId: 4,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 5,
            //     categoryId: 1,
            //     classId: 2,
            //     typeId: 1,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 6,
            //     categoryId: 1,
            //     classId: 2,
            //     typeId: 2,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 7,
            //     categoryId: 1,
            //     classId: 2,
            //     typeId: 3,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 8,
            //     categoryId: 1,
            //     classId: 2,
            //     typeId: 4,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },

            // {
            //     postId: 9,
            //     categoryId: 2,
            //     classId: 1,
            //     typeId: 1,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 3020,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 10,
            //     categoryId: 2,
            //     classId: 1,
            //     typeId: 2,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 3030,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 11,
            //     categoryId: 2,
            //     classId: 1,
            //     typeId: 3,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 12,
            //     categoryId: 2,
            //     classId: 1,
            //     typeId: 4,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 13,
            //     categoryId: 2,
            //     classId: 2,
            //     typeId: 1,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 14,
            //     categoryId: 2,
            //     classId: 2,
            //     typeId: 2,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 15,
            //     categoryId: 2,
            //     classId: 2,
            //     typeId: 3,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },
            // {
            //     postId: 16,
            //     categoryId: 2,
            //     classId: 2,
            //     typeId: 4,
            //     showOnBoard: true,
            //     showOnHome: false,
            //     title: "機場搭防疫計程車我們付費，文章標題第二列",
            //     image: "https://i.ibb.co/fYBVPpF/image-7.png",
            //     viewer: 300,
            //     foreword: "前言",
            //     text: "內文",
            //     epilogue: "結語",
            //     createTime: "2022/06/08",
            // },



        ]
    }),
    getters: {
        hotPost: (state) => {
            const showPostCount = 10;

            return getSortByViewerPosts(state.postArray, showPostCount)
        },


        homePosts: (state) => {
            const showPostCount = 2;
            return state.postCategoryArray.map(pc => {
                let postArray: Array<ArticleType> = getCategoryPosts(state.postArray, pc.id)
                const sohPosts = getShowOnHomePosts(postArray);
                postArray = sohPosts.length >= showPostCount ? sohPosts.slice(0, 2) : getSortByViewerPosts(postArray, showPostCount)
                return { ...pc, postArray }
            })
        },

        postsByCategory: (state) => {
            return (categoryId: number) => {
                if (categoryId == 0) {
                    return state.postArray
                }
                return getCategoryPosts(state.postArray, categoryId)
            }
        },

        postById: (state) => {
            return (firestoreId: string) => {
                if (!firestoreId) {
                    return {} as ArticleType
                }
                return getPost(state.postArray, firestoreId)
            }
        },


    }
})