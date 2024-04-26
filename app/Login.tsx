export default function Login() {
    return (
        <>
            <link
                rel='stylesheet'
                href='https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css'
            />
            <div className='flex h-36 flex-col items-center justify-center pb-64 pt-48'>
                <div className='flex w-96 max-w-md flex-col rounded-md bg-white px-4 py-2 shadow-md sm:px-6 md:px-8 lg:px-10'>
                    <div className='self-center pt-8 text-center text-lg font-semibold uppercase text-gray-800 sm:text-lg'>
                        Login To Your Account
                    </div>
                    <div className='mt-10'>
                        <form action='/dashboard'>
                            <div className='mb-4 flex flex-col'>
                                <label
                                    htmlFor='email'
                                    className='mb-1 text-sm tracking-wide text-gray-600 sm:text-sm'
                                ></label>
                                <div className='relative'>
                                    <div className='absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400'>
                                        <svg
                                            className='h-6 w-6'
                                            fill='none'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                                        </svg>
                                    </div>
                                    <input
                                        id='email'
                                        type='email'
                                        name='email'
                                        className='w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none sm:text-base'
                                        placeholder='E-Mail Address'
                                    />
                                </div>
                            </div>
                            <div className='mb-6 flex flex-col'>
                                <label
                                    htmlFor='password'
                                    className='mb-1 text-xs tracking-wide text-gray-600 sm:text-sm'
                                ></label>
                                <div className='relative'>
                                    <div className='absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400'>
                                        <span>
                                            <svg
                                                className='h-6 w-6'
                                                fill='none'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                            >
                                                <path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                                            </svg>
                                        </span>
                                    </div>
                                    <input
                                        id='password'
                                        type='password'
                                        name='password'
                                        className='w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none sm:text-base'
                                        placeholder='Password'
                                    />
                                </div>
                            </div>
                            <div className='flex w-full pb-8'>
                                <button
                                    type='submit'
                                    className='flex w-full items-center justify-center rounded bg-emerald-400 py-2 text-sm text-white transition duration-150 ease-in hover:bg-blue-600 focus:outline-none sm:text-base'
                                >
                                    <span className='mr-2 uppercase'>Login</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
