import { createApi } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/src/query/baseQueryTypes'
import type { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions'

import { baseQuery } from 'app/config/base-query'

import { HttpMethod, Slice } from 'common/const'

export const authApi = createApi({
  reducerPath: Slice.AUTH,
  baseQuery: baseQuery(),
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    login: build.mutation({
      query: (user) => ({
        url: '/login',
        data: user,
        method: HttpMethod.POST,
      }),
    }),
    register: build.mutation({
      query: (user) => ({
        url: '/register',
        data: user,
        method: HttpMethod.POST,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation }: any = authApi
