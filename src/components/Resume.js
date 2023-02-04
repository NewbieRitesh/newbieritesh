export default function Resume() {
    return (
        <>
            <div className="text-center my-5">
                <h1 className="text-center font-bold text-2xl">Resume</h1>
                <div className="my-5 flex flex-col items-center">
                    <embed src="files/RiteshResume.pdf" type="application/pdf" className="w-full max-w-7xl md:h-screen" />
                    <a href="files/RiteshResume.pdf" className="w-48 m-2 p-3 bg-slate-900 text-white font-bold rounded-full">Download Resume</a>
                </div>
            </div>
        </>
    );
};
