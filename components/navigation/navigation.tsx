import Link from 'next/link';
import React from 'react'

const NavigationBar = () => {
    return (
        <div className='sticky top-0 bg-black p-2 z-20'>
            <Link href={"/visitors_counter_page"}>
                <div className='bg-sky-400 p-3 h-fit lg:h-[5em]'>
                    <p className='uppercase text-center text-[3em] -mt-3'>angelawhite</p>
                </div>
            </Link>
        </div>
    )
}

export default NavigationBar;
