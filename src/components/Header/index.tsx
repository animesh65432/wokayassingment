import { Calendar, Search, Settings, CirclePlus, Video, LayoutDashboard, Logs } from 'lucide-react';

export default function Header() {
    return (
        <div className=" p-2 px-5 flex justify-between items-center bg-[rgb(255_258_248/5%)]">
            <div className="relative h-4 w-4">
                <img className="absolute h-full w-full" src="https://app-cdn.clickup.com/media/clickup-symbol_color-VTPFUWKJ.svg" />
            </div>
            <div className='flex items-center gap-2'>
                <div className='bg-[rgb(255_255_255/7%)] p-1 rounded'>
                    <Calendar className='h-4 w-4  text-[rgb(255_255_255/0.66)]' />
                </div>
                <div className='bg-[rgb(255_255_255/15%)]  w-[35vw] lg:w-[29vw] flex  justify-between items-center rounded text-[rgb(255_255_255/0.66)]'>
                    <div className='flex items-center gap-2 p-1 px-2'>
                        <Search className='h-4 w-4 ' />
                        <span className='text-sm'>
                            Search
                        </span>
                    </div>
                    <div className='flex items-center border-l border-[rgb(255_255_255/0.16)] gap-1 p-1 px-2 bg-[rgb(255_255_255/0.66%)]'>
                        <Settings className='h-4 w-4' />
                        <span className='text-sm'>
                            AI
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 text-[rgb(255_255_255/0.66)]'>
                <button className="bg-gradient-to-r p-1 px-2 from-[#7f77f1]   to-[#4a3fea]  text-sm rounded">
                    Upgrade
                </button>
                <div className='flex items-center gap-1 text-white'>
                    <CirclePlus size={17} className='' />
                    <span className='text-sm'>New</span>
                </div>
                <div className='flex gap-3 border-l border-[rgb(255_255_255/0.66)] px-2'>
                    <Video className='h-4 w-4' />
                    <LayoutDashboard className='h-4 w-4' />
                    <Logs className='h-4 w-4' />
                </div>
            </div>
        </div>
    )
}
