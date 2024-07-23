import React from 'react'
import Wrapper from './Wrapper'

const Navbar = () => {
    const user = false
    return (
        <div className='border-b shadow sticky top-0 py-4'>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl font-bold text-slate-900'>Dev Jobs</div>

                    <ul className='flex gap-4 items-center text-slate-800 font-semibold'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Add Jobs</li>
                    </ul>

                    <div className='flex gap-4 items-center text-slate-800 font-semibold'>
                        {
                            user ? <button>logout</button> : (
                                <>
                                    <button>Register</button>
                                    <button>Login</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar