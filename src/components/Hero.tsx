const Hero = () => {
    return(
        <div className="mt-[2rem] px-10 grid grid-cols-1 md:grid-cols-2">
            <div className="sm:pl-[3rem] md:pl-[10rem] md:mr-[4rem] text-center md:text-left">
                <p className="text-white text-[20px]">Hello there, Welcome to my site</p>
                <p className="text-white text-[40px] font-bold">I´m Jorge Perales</p>
                <p className="text-amber-300 text-[40px] font-bold">I´m a full stack developer</p>
                <p className="text-white text-[40px] font-bold">And Video Editor</p>
                <div className="flex justify-center md:justify-start mt-4 gap-4">
                    <button className="font-bold mx-2 px-4 py-2 text-gray-100 bg-gradient-to-r from-blue-400 to-blue-950 rounded-full hover:border-[1px] hover:border-gray-100">See Portfolio</button>
                    <button className="font-bold mx-2 px-4 py-2 text-gray-100 bg-gradient-to-r from-blue-400 to-blue-950 rounded-full hover:border-[1px] hover:border-gray-100">Contact me</button>
                </div>
            </div>
            <div className="w-[25rem] h-[32rem] p-2 mt-[4rem] md:ml-[4rem] flex justify-center items-center bg-gradient-to-r from-amber-300 to-blue-500">
                <img src="../../vite.svg" alt="Vite Image" className="w-[24rem] h-full object-cover rounded-[20px] " />
            </div>
        </div>
    );
};
export default Hero;