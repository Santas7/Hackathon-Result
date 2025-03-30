import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../core/config/config'

interface IRegisterUserPayload extends ILoginUserPayload {}

interface IRegisterUserResponse {
  token: string
}

interface ILoginUserPayload {
  username: string
  password: string
}

export interface ILoginUserResponse {
  token: string
}
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>({
      query: (payload) => ({
        url: '/register',
        method: 'POST',
        body: payload,
      }),
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

export const { useRegisterUserMutation, useLoginUserMutation } = authApi
