
export type ArticleType = {
    firestoreId?:string,
    postId: number,
    categoryId: number,
    classId: number,
    typeId: number,

    showOnBoard: boolean,
    showOnHome: boolean,
    title: string,
    image: string,
    viewer: number,
    foreword: string,
    text: string,
    epilogue: string,
    createTime: string,

    postKeywordArray?: Array<PostKeywordType>
    similarPostArray?: Array<SimilarPostType>
    morePostAarray?: Array<MorePostType>
}

export type PostKeywordType = {
    id: number,
    label: string
    link: string,
}
export type SimilarPostType = {
    id: number,
    label: string
    link: string,
}
export type MorePostType = {
    id: number,
    firestoreId: number,
}

export type PostCategoryType = {
    id: number,
    key: string
    name: string,
};
export type PostClassType = {
    id: number,
    name: string,
};
export type postTypeType = {
    id: number,
    name: string,
};


export type PostSettingType = {
    postCategoryArray: Array<PostCategoryType>,
    postClassArray: Array<PostClassType>,
    postTypeArray: Array<postTypeType>,
}
