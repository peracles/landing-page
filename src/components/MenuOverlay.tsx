import React from 'react';

interface Props {
    menuList: { id: number, name: string }[];
}

function MenuOverlay({ menuList }: Props) {
    return (
    <div className='absolute left-0 min-h-full backdrop-blur-lg w-full mt-7'>
        {menuList.map((item) => (
            <div className='flex mb-6 justify-center mt-10' key={item.id}>
                <a href="#" className="text-[2.5rem] hover:scale-110 transition-all ease-in-out duration-300">{item.name}</a>
            </div>
        ))}
    </div>
  )
};

export default MenuOverlay;