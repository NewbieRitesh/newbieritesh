export default function Skills() {
    return (
        <>
            <h1 className="text-2xl text-center font-bold mt-5">Skills</h1>
            <div className="flex justify-center align-center my-5">
                <table className="table-auto w-full sm:w-10/12">
                    <tbody className="bg-slate-100">
                        <tr className="border">
                            <td>Language</td>
                            <td>HTML <br />CSS<br />JavaScript</td>
                        </tr>
                        <tr className="border">
                            <td>Frameworks and Libraries</td>
                            <td>Node JS <br />Express JS <br />React <br />Redux <br />Tailwind CSS <br />BootStrap CSS</td>
                        </tr>
                        <tr className="border">
                            <td>Database</td>
                            <td>MongoDB</td>
                        </tr>
                        <tr className="border">
                            <td>Program and Tools</td>
                            <td>VS code <br />Photopia</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
        </>
    );
};
