export type hotelDataType = {
    hotel_id: string,
    area: string,
    lowest_price: number,
    facility_tags: Array<{
        name: string
    }>
    name: string,
    county: string,
    images: Array<string>,
    small_images: Array<string>,
    room_types: Array<RoomType>,
    intro: string,
    booking_notice: string,
    cancel_notice: string,
    image: string
    sortingOrder: number
}

export type RoomType = {
    name: string,
    bed_type: string,
    images: Array<string>,
    window: string | null,
    features: Array<{
        name: '',
        class: ''
    }>,
    price: string,
    room_size: number
}


export type hotelFilterType = {
    hotelId: string,
    name: string
    sortingOrder: number
}

export type CityType = {
    label: string,
    name: string,
    image: string,
    rooms: Array<hotelDataType>,
    showMoreThanFourRooms: boolean,
}