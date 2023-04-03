import type { user, stepinfo } from '@/types/index'
import { request } from '@/service/request'

// 提交步数
export const submitStep = (params: user) => request.get<stepinfo>('/api/mi', { params })
