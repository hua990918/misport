// 用户信息
export interface user {
    user: string
    pwd: string
    step: string
}

// ref类型
export interface Modalval {
    handleShowModal: () => boolean | null
}
