export default function MERN() {
    return (
        <>
            <div id="mern" className="flex flex-col justify-center align-center my-5">
                <div className="flex justify-center align-center text-6xl sm:text-9xl">
                    <div className="flex flex-col text-center mx-3 sm:mx-2">M<span className="text-xs sm:text-lg">MongoDB</span></div>
                    <div className="flex flex-col text-center mx-3 sm:mx-2">E<span className="text-xs sm:text-lg">Express</span></div>
                    <div className="flex flex-col text-center mx-3 sm:mx-2">R<span className="text-xs sm:text-lg">React</span></div>
                    <div className="flex flex-col text-center mx-3 sm:mx-2">N<span className="text-xs sm:text-lg">Node</span></div>
                </div>
                <div className="flex justify-center align-center text-3xl sm:text-4xl">
                    Stack Developer
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <img src="imgs/svg/devices.svg" className="w-9/12 max-w-2xl" />
            </div>
            <hr />
        </>
    );
};