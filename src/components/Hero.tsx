const Hero = () => {
    return(
        <div className="px-10">
            <p>Hello there, Welcome to my site</p>
            <p>I´m Jorge Perales</p>
            <p>I´m a full stack developer</p>
            <p>And Video Editor</p>
            <div className="">
                <button className="font-bold mx-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-950 rounded-full hover:bg-gray-100 hover:text-blue-800">See Portfolio</button>
                <button className="font-bold mx-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-950 rounded-full hover:bg-gray-100 hover:text-blue-800">Contact me</button>
            </div>
        </div>
    );
};
export default Hero;