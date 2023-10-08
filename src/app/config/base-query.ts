import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import { HttpStatus } from 'common/const'

export const baseQuery =
  (): BaseQueryFn<{
    url: string
    data?: AxiosRequestConfig['data']
    method: AxiosRequestConfig['method']
    headers?: AxiosRequestConfig['headers']
  }> =>
  async (param) => {
    try {
      // const user: IUser | null = window.localStorage.getItem(LOCALE_STORAGE_KEYS.USER)
      //   ? JSON.parse(window.localStorage.getItem(LOCALE_STORAGE_KEYS.USER))
      //   : null

      const user: any = null
      const result: AxiosResponse = await axios({
        ...param,
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
          ...param?.headers,
          Authorization: user ? `Bearer ${user.token}` : null,
        },
      })
      return { data: result.data }
    } catch (axiosError) {
      let err: AxiosError = axiosError as AxiosError
      if (err.response?.status === HttpStatus.UNAUTHORIZED) {
        //     Update logout logic
      }
      const errors = err.response?.data['error' as keyof object]
      return {
        error: {
          status: err.response?.status,
          data:
            typeof errors === 'object'
              ? Object.values(errors).flat()
              : [err.response.data['message' as keyof object]],
        },
      }
    }
  }
