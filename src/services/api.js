import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorage } from './utils';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/',
    prepareHeaders: (headers) => {
      const token = getStorage("idToken")

      if(token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    }, 
  }),
  tagTypes: ['Employee'],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    
    getEmployeeByName: builder.query({
      query: () => 'employee',
      providesTags: ['Employee']
    }),

    createEmployee: builder.mutation({
      query: (payload) => ({
        url: `employee`,
        method: 'POST',
        body: payload,
      })
    }),

    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),

    getEmployeeById: builder.query({
      query: (id) => ({
        url:`employee/${id}`,
      }),
    }),

    updateEmployeeById: builder.mutation({
      query: ({id,...payload}) => ({
        url: `employee/${id}`,
        method: 'PUT',
        body: payload,
      })
    }),

    login: builder.mutation({
      query: (payload) => ({
        url: 'employee/login',
        method: 'POST',
        body: payload,
      })
    }),

  })
});

export const { useGetEmployeeByNameQuery, useCreateEmployeeMutation, useDeleteEmployeeMutation, useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation, useLoginMutation } = baseApi