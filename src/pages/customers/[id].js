import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
// import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const ViewCustomer = () => {
    const [customer, setCustomer] = useState()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        axios
            .get(`/api/customers/${id}`)
            .then(response => {
                // alert('Success')
                setCustomer(response.data)
                // console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const deleteCustomer = async cid => {
        axios
            .delete(`/api/customers/${cid}/destroy`)
            .then(() => {
                alert('Success')
                window.location.href = '/customers'
                // console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Customers
                </h2>
            }>
            <Head>
                <title>PMS - Customers</title>
            </Head>
            <div className="md:w-1/2 p-5">
                {customer && (
                    <>
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Customer Information
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Personal details.
                                </p>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Full name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {customer.first_name}{' '}
                                            {customer.last_name}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Ghana Card
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {customer.ghana_card_no}
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Phone Number
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {customer.owners &&
                                            customer.owners.length > 0
                                                ? customer.owners[0].msisdn
                                                : customer.users &&
                                                  customer.users.length > 0
                                                ? customer.users[0].msisdn
                                                : null}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Service Start Date
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {customer.owners &&
                                            customer.owners.length > 0
                                                ? customer.owners[0]
                                                      .service_start_date
                                                : customer.users &&
                                                  customer.users.length > 0
                                                ? customer.users[0]
                                                      .service_start_date
                                                : null}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {' '}
                                            {customer.id}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right">
                                            <button
                                                onClick={() =>
                                                    deleteCustomer(customer.id)
                                                }
                                                className="rounded bg-red-500 p-2 text-white">
                                                Delete Account
                                            </button>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AppLayout>
    )
}

export default ViewCustomer
