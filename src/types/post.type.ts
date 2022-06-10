
export type ArticleType = {
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
}
export type PostCategoryType = {
    id: number,
    key:string
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