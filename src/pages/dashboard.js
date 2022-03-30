import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const Dashboard = () => {
    const [stats, setStats] = useState({
        customer_count: 0,
        owner_count: 0,
        user_count: 0,
    })

    useEffect(() => {
        getStats()
    }, [])

    const getStats = async () => {
        axios
            .get('/api/customers/stats')
            .then(response => {
                // alert('Success')
                setStats(response.data)
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
                    Dashboard
                </h2>
            }>
            <Head>
                <title>PMS - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="">
                    <div className=" flex justify-center flex-wrap  p-5 sm:rounded-lg">
                        <>
                            {/* Card code block start */}
                            <div className="bg-white dark:bg-gray-800 w-1/4 mx-1 rounded shadow px-8 py-6 flex items-center">
                                <div className="p-4 bg-petra-blue rounded text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-click"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={3} y1={12} x2={6} y2={12} />
                                        <line x1={12} y1={3} x2={12} y2={6} />
                                        <line
                                            x1="7.8"
                                            y1="7.8"
                                            x2="5.6"
                                            y2="5.6"
                                        />
                                        <line
                                            x1="16.2"
                                            y1="7.8"
                                            x2="18.4"
                                            y2="5.6"
                                        />
                                        <line
                                            x1="7.8"
                                            y1="16.2"
                                            x2="5.6"
                                            y2="18.4"
                                        />
                                        <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                                        {stats.customer_count}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">
                                        Customers
                                    </p>
                                </div>
                            </div>

                            {/* Card code block end */}

                            {/* Card code block start */}
                            <div className="bg-white dark:bg-gray-800 w-1/4 mx-1 rounded shadow px-8 py-6 flex items-center">
                                <div className="p-4 bg-petra-blue rounded text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-click"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={3} y1={12} x2={6} y2={12} />
                                        <line x1={12} y1={3} x2={12} y2={6} />
                                        <line
                                            x1="7.8"
                                            y1="7.8"
                                            x2="5.6"
                                            y2="5.6"
                                        />
                                        <line
                                            x1="16.2"
                                            y1="7.8"
                                            x2="18.4"
                                            y2="5.6"
                                        />
                                        <line
                                            x1="7.8"
                                            y1="16.2"
                                            x2="5.6"
                                            y2="18.4"
                                        />
                                        <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                                        {stats.owner_count}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">
                                        Owners
                                    </p>
                                </div>
                            </div>

                            {/* Card code block end */}

                            {/* Card code block start */}
                            <div className="bg-white dark:bg-gray-800 w-1/4 mx-1 rounded shadow px-8 py-6 flex items-center">
                                <div className="p-4 bg-petra-blue rounded text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-click"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={3} y1={12} x2={6} y2={12} />
                                        <line x1={12} y1={3} x2={12} y2={6} />
                                        <line
                                            x1="7.8"
                                            y1="7.8"
                                            x2="5.6"
                                            y2="5.6"
                                        />
                                        <line
                                            x1="16.2"
                                            y1="7.8"
                                            x2="18.4"
                                            y2="5.6"
                                        />
                                        <line
                                            x1="7.8"
                                            y1="16.2"
                                            x2="5.6"
                                            y2="18.4"
                                        />
                                        <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                                        {stats.user_count}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">
                                        Users
                                    </p>
                                </div>
                            </div>

                            {/* Card code block end */}
                        </>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
