import { useState } from "react";
import { FiAlignRight  } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Portfolio" },
    { id: 5, name: "Contact" },
  ];

  return (
    <header className='flex items-center justify-around px-5 py-2'>
      <h2 className="font-bold">JORGE <span className="text-blue-800">PERALES</span></h2>
      <div className="hidden md:flex items-center gap-4 ml-10">
        {menuList.map((item) => (
            <div className='px-3' key={item.id}>
              <a href="#" className="font-bold px-4 py-2 hover:border-[1px] border-blue-800 rounded-full ">{item.name}</a>
            </div>
          ))}
        <a href="#" className="font-bold px-4 py-2 hover:bg-gradient-to-r from-blue-400 to-blue-950 rounded-full ">Hire Me</a>
      </div>
      <div className="md:hidden">
        {!toggle ? 
          <FiAlignRight onClick={()=>setToggle(!toggle)} className="text-[1.75rem] cursor-pointer" />
         : 
          <HiOutlineXMark onClick={()=>setToggle(!toggle)} className="text-[1.75rem] cursor-pointer" />
        }
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </header>
  );
};

export default Header;