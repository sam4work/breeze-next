import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import FormValidationErrors from '@/components/FormValidationErrors'
import axios from '@/lib/axios'

const CreateCustomer = () => {
    const {
        register,
        unregister,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const [ownedByCustomer, setOwnedByCustomer] = useState(true)
    const [formErrors, setFormErrors] = useState([])

    const createNewCustomer = async data => {
        axios
            .post('/api/customers', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => {
                window.location.href = '/customers'
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setFormErrors(Object.values(error.response.data.errors).flat())
            })
    }

    useEffect(() => {
        // Unregister input fields from form state
        if (ownedByCustomer) {
            unregister('user_first_name')
            unregister('user_last_name')
            unregister('user_ghana_card')
        }

        console.log(ownedByCustomer)
    }, [ownedByCustomer])

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

            <div className="py-12 px-5">
                <>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-0">
                            <div className="md:col-span-1">
                                <div className="px-14 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Personal Information
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Add New Mobile Subscriber
                                    </p>
                                    <div>
                                        {/* Display Validations Errors */}
                                        <FormValidationErrors
                                            className="mb-4"
                                            errors={formErrors}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form
                                    onSubmit={handleSubmit(createNewCustomer)}>
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="first-name"
                                                        className="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={''}
                                                        {...register(
                                                            'first_name',
                                                            {
                                                                required: {
                                                                    value: true,
                                                                    message:
                                                                        'First Name is required',
                                                                },
                                                                maxLength: {
                                                                    value: 20,
                                                                    message:
                                                                        'Max Length is 20',
                                                                },
                                                                pattern: {
                                                                    value: /^[A-Za-z-]+$/i,
                                                                    message:
                                                                        'First Name must be alphabet',
                                                                },
                                                            },
                                                        )}
                                                        id="first-name"
                                                        className="mt-1 focus:ring-petra-blue focus:border-petra-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                    {errors &&
                                                    errors.first_name ? (
                                                        <span className="text-red-500">
                                                            {
                                                                errors
                                                                    .first_name
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="first-name"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={''}
                                                        {...register(
                                                            'last_name',
                                                            {
                                                                required: {
                                                                    value: true,
                                                                    message:
                                                                        'Last Name is required',
                                                                },
                                                                maxLength: {
                                                                    value: 20,
                                                                    message:
                                                                        'Max Length is 20',
                                                                },
                                                                pattern: {
                                                                    value: /^[A-Za-z-]+$/i,
                                                                    message:
                                                                        'Last Name must be alphabet',
                                                                },
                                                            },
                                                        )}
                                                        id="last-name"
                                                        className="mt-1 focus:ring-petra-blue focus:border-petra-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                    {errors &&
                                                    errors.last_name ? (
                                                        <span className="text-red-500">
                                                            {
                                                                errors.last_name
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="ghana-card-no"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Ghana Card No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={''}
                                                        {...register(
                                                            'ghana_card_no',
                                                            {
                                                                required: {
                                                                    value: true,
                                                                    message:
                                                                        'Enter Ghana Card No.',
                                                                },
                                                                maxLength: {
                                                                    value: 6,
                                                                    message:
                                                                        'Invalid Number',
                                                                },
                                                                minLength: {
                                                                    value: 6,
                                                                    message:
                                                                        'Number too short',
                                                                },
                                                                pattern: {
                                                                    value: /[0-9]{6}/,
                                                                    message:
                                                                        'Value must be digits',
                                                                },
                                                            },
                                                        )}
                                                        id="ghana-card-no"
                                                        className="mt-1 focus:ring-petra-blue focus:border-petra-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                    {errors &&
                                                    errors.ghana_card_no ? (
                                                        <span className="text-red-500">
                                                            {
                                                                errors
                                                                    .ghana_card_no
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="owner"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Owner(
                                                        <span>Yes / No</span>)
                                                    </label>
                                                    <select
                                                        id="owner"
                                                        {...register('owner', {
                                                            required: {
                                                                value: true,
                                                                message:
                                                                    'Select Owner of Number',
                                                            },
                                                        })}
                                                        onChange={e =>
                                                            setOwnedByCustomer(
                                                                e.target
                                                                    .value ==
                                                                    'yes'
                                                                    ? true
                                                                    : false,
                                                            )
                                                        }
                                                        defaultValue={''}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-petra-blue focus:border-petra-blue sm:text-sm">
                                                        <option value="" />

                                                        <option value={'yes'}>
                                                            Yes - Owner and User
                                                        </option>

                                                        <option value={'no'}>
                                                            No - Owner not User
                                                        </option>
                                                    </select>
                                                    {errors && errors.owner ? (
                                                        <span className="text-red-500">
                                                            {
                                                                errors.owner
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="service_type"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Service Type
                                                    </label>
                                                    <select
                                                        id="service_type"
                                                        {...register(
                                                            'service_type',
                                                            {
                                                                required: {
                                                                    value: true,
                                                                    message:
                                                                        'Service type is required',
                                                                },
                                                            },
                                                        )}
                                                        defaultValue={''}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-petra-blue focus:border-petra-blue sm:text-sm">
                                                        <option value="" />

                                                        <option
                                                            value={
                                                                'mobile_postpaid'
                                                            }>
                                                            POSTPAID
                                                        </option>

                                                        <option
                                                            value={
                                                                'mobile_prepaid'
                                                            }>
                                                            PREPAID
                                                        </option>
                                                    </select>
                                                    {errors &&
                                                    errors.service_type ? (
                                                        <span className="text-red-500">
                                                            {
                                                                errors
                                                                    .service_type
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="price"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Phone Number
                                                    </label>
                                                    <div className="mt-1 relative rounded-md shadow-sm">
                                                        <div className="absolute inset-y-0 left-0  flex items-center">
                                                            <select
                                                                id="currency"
                                                                {...register(
                                                                    'isp_code',
                                                                    {
                                                                        required: {
                                                                            value: true,
                                                                            message:
                                                                                'Select ISP',
                                                                        },
                                                                    },
                                                                )}
                                                                defaultValue={
                                                                    ''
                                                                }
                                                                className=" h-full py-0 pl-2 pr-7 outline-none border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                                                <option value="" />
                                                                <optgroup label="MTN">
                                                                    <option
                                                                        value={
                                                                            '024'
                                                                        }>
                                                                        024
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            '054'
                                                                        }>
                                                                        054
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            '055'
                                                                        }>
                                                                        055
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            '059'
                                                                        }>
                                                                        059
                                                                    </option>
                                                                </optgroup>
                                                                <optgroup label="Airtel">
                                                                    <option
                                                                        value={
                                                                            '026'
                                                                        }>
                                                                        026
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            '056'
                                                                        }>
                                                                        056
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            '057'
                                                                        }>
                                                                        057
                                                                    </option>
                                                                </optgroup>
                                                                <optgroup label="Vodafone">
                                                                    <option
                                                                        value={
                                                                            '020'
                                                                        }>
                                                                        020
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            '050'
                                                                        }>
                                                                        050
                                                                    </option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="phone_number"
                                                            defaultValue={''}
                                                            {...register(
                                                                'phone_number',
                                                                {
                                                                    required: {
                                                                        value: true,
                                                                        message:
                                                                            'Enter Phone Number',
                                                                    },
                                                                    maxLength: {
                                                                        value: 7,
                                                                        message:
                                                                            'Invalid Number',
                                                                    },
                                                                    minLength: {
                                                                        value: 7,
                                                                        message:
                                                                            'Number too short',
                                                                    },
                                                                    pattern: {
                                                                        value: /[0-9]{7}/,
                                                                        message:
                                                                            'Value must be digits',
                                                                    },
                                                                },
                                                            )}
                                                            className="focus:ring-petra-blue focus:border-petra-blue block w-full pl-24 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Phone Number"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        {errors &&
                                                        errors.isp_code ? (
                                                            <span className="text-red-500 absolute left-0">
                                                                {
                                                                    errors
                                                                        .isp_code
                                                                        .message
                                                                }
                                                            </span>
                                                        ) : null}
                                                        {errors &&
                                                        errors.phone_number ? (
                                                            <span className="text-red-500 absolute right-0">
                                                                {
                                                                    errors
                                                                        .phone_number
                                                                        .message
                                                                }
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* USER BLOCK */}

                                            {ownedByCustomer ? null : (
                                                <>
                                                    <h1 className="text-2xl mt-10 text-center">
                                                        User Details
                                                    </h1>
                                                    <hr className="bg-petra-yellow mb-10 w-2/3 mx-auto" />
                                                    <div className="grid grid-cols-6 gap-6 p-4 bg-gray-100 my-5 rounded">
                                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                            <label
                                                                htmlFor="first-name"
                                                                className="block text-sm font-medium text-gray-700">
                                                                User First name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                {...register(
                                                                    'user_first_name',
                                                                    {
                                                                        required: {
                                                                            value: true,
                                                                            message:
                                                                                'User First Name is required',
                                                                        },
                                                                        maxLength: {
                                                                            value: 20,
                                                                            message:
                                                                                'Max Length is 20',
                                                                        },
                                                                        pattern: {
                                                                            value: /^[A-Za-z-]+$/i,
                                                                            message:
                                                                                'First Name must be alphabet',
                                                                        },
                                                                    },
                                                                )}
                                                                id="first-name"
                                                                className="mt-1 focus:ring-petra-blue focus:border-petra-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                            {errors &&
                                                            errors.user_first_name ? (
                                                                <span className="text-red-500">
                                                                    {
                                                                        errors
                                                                            .user_first_name
                                                                            .message
                                                                    }
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                            <label
                                                                htmlFor="user-last-name"
                                                                className="block text-sm font-medium text-gray-700">
                                                                User Last name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                {...register(
                                                                    'user_last_name',
                                                                    {
                                                                        required: {
                                                                            value: true,
                                                                            message:
                                                                                'Last Name is required',
                                                                        },
                                                                        maxLength: {
                                                                            value: 20,
                                                                            message:
                                                                                'Max Length is 20',
                                                                        },
                                                                        pattern: {
                                                                            value: /^[A-Za-z-]+$/i,
                                                                            message:
                                                                                'Last Name must be alphabet',
                                                                        },
                                                                    },
                                                                )}
                                                                id="user-last-name"
                                                                className="mt-1 focus:ring-petra-blue focus:border-petra-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                            {errors &&
                                                            errors.user_last_name ? (
                                                                <span className="text-red-500">
                                                                    {
                                                                        errors
                                                                            .user_last_name
                                                                            .message
                                                                    }
                                                                </span>
                                                            ) : null}
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                            <label
                                                                htmlFor="user_ghana-card-no"
                                                                className="block text-sm font-medium text-gray-700">
                                                                Ghana Card No
                                                            </label>
                                                            <input
                                                                type="text"
                                                                defaultValue={
                                                                    ''
                                                                }
                                                                {...register(
                                                                    'user_ghana_card_no',
                                                                    {
                                                                        required: {
                                                                            value: true,
                                                                            message:
                                                                                'Enter Ghana Card No.',
                                                                        },
                                                                        maxLength: {
                                                                            value: 6,
                                                                            message:
                                                                                'Invalid Number',
                                                                        },
                                                                        minLength: {
                                                                            value: 6,
                                                                            message:
                                                                                'Number too short',
                                                                        },
                                                                        pattern: {
                                                                            value: /[0-9]{6}/,
                                                                            message:
                                                                                'Value must be digits',
                                                                        },
                                                                    },
                                                                )}
                                                                id="user_ghana-card-no"
                                                                className="mt-1 focus:ring-petra-blue focus:border-petra-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                            {errors &&
                                                            errors.user_ghana_card_no ? (
                                                                <span className="text-red-500">
                                                                    {
                                                                        errors
                                                                            .user_ghana_card_no
                                                                            .message
                                                                    }
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {/* END OF USER BLOCK */}
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-petra-yellow hover:bg-petra-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-petra-blue">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </AppLayout>
    )
}

export default CreateCustomer
