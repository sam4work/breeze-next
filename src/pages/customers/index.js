import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import Head from 'next/head'
import Link from 'next/link'

import { useState, useEffect } from 'react'

const CustomerIndex = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getAllCustomers()
    }, [])

    const getAllCustomers = async () => {
        axios
            .get('/api/customers')
            .then(response => {
                // alert('Success')
                setCustomers(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const searchCustomers = async keyword => {
        if (keyword.length > 2 && customers && customers.length) {
            axios
                .get('/api/customers', {
                    params: {
                        search: keyword,
                    },
                })
                .then(response => {
                    // alert('Success')
                    setCustomers(response.data)
                    console.log(response.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        if (keyword.length === 0 && customers.length && customers.length) {
            getAllCustomers()
        }
    }

    return (
        <AppLayout
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Customers
                    </h2>
                    <a
                        href="/customers/create"
                        className="text-sm font-medium underline-none text-petra-blue p-2 rounded bg-petra-yellow hover:bg-petra-blue hover:text-white dark:text-blue-500">
                        Add New
                    </a>
                </div>
            }>
            <Head>
                <title>PMS - Customers</title>
            </Head>

            <div className="p-1">
                <div className=" w-1/4  ml-auto mr-10">
                    <div className="flex items-center relative">
                        <svg
                            className="w-10 h-4 absolute"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                        <input
                            onChange={e => searchCustomers(e.target.value)}
                            type="text"
                            placeholder="Search Phone,Name"
                            className="rounded-lg w-full py-2 pl-10 border outline-none focus:ring dark:text-gray-900 focus:ring-offset-5 focus:ring-petra-blue"
                        />
                    </div>
                </div>
            </div>

            <div className="py-2 px-5 flex justify-center space-x-5">
                {customers && customers.length > 0
                    ? customers.map((customer, index) => {
                          return (
                              <Link
                                  key={index}
                                  href={'/customers/' + customer.id}>
                                  <a>
                                      <div className="p-4 max-w-sm hover:shadow-lg rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                          <div className="flow-root">
                                              <ul
                                                  role="list"
                                                  className="divide-y  divide-gray-200 max-w-sm dark:divide-gray-700">
                                                  <li className="py-3 sm:py-4">
                                                      <div className="flex items-center space-x-4">
                                                          <div className="flex-1 min-w-0">
                                                              <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                                                  {
                                                                      customer.first_name
                                                                  }{' '}
                                                                  {
                                                                      customer.last_name
                                                                  }
                                                              </p>
                                                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                  {customer.owners &&
                                                                  customer
                                                                      .owners
                                                                      .length >
                                                                      0
                                                                      ? customer
                                                                            .owners[0]
                                                                            .service_type
                                                                      : customer.users &&
                                                                        customer
                                                                            .users
                                                                            .length >
                                                                            0
                                                                      ? customer
                                                                            .users[0]
                                                                            .service_type
                                                                      : null}
                                                              </p>
                                                          </div>
                                                          <div className="flex flex-col items-center text-base  text-gray-900 dark:text-white">
                                                              <span className="rounded bg-petra-blue p-1 text-white">
                                                                  {customer.owners &&
                                                                  customer
                                                                      .owners
                                                                      .length >
                                                                      0
                                                                      ? customer
                                                                            .owners[0]
                                                                            .msisdn
                                                                      : customer.users &&
                                                                        customer
                                                                            .users
                                                                            .length >
                                                                            0
                                                                      ? customer
                                                                            .users[0]
                                                                            .msisdn
                                                                      : null}
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </a>
                              </Link>
                          )
                      })
                    : null}
            </div>
        </AppLayout>
    )
}

export default CustomerIndex
