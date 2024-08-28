import NavigationBar from '@/components/navigation/navigation';
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-sky-400 h-screen overflow-y-auto text-white'>
            <NavigationBar />
            <div className="relative m-4 lg:h-[35rem] bg-black rounded-xl">
                <video src="/video(2).mp4" className='w-full h-full object-cover' autoPlay muted loop>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
};

export default HomeLayout;
