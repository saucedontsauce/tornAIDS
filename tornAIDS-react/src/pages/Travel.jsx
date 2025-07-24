import DisplayTable from "../components/DisplayTable.jsx";
import Loading from '../components/Loading.jsx';
import { Suspense } from "react";
export default function Travel() {

    return (
        <section className="hero" id="travel">
            <div className='hero-content'><h1>Travel Storage</h1><p>A summary of what you have stored in display case.</p>

                <Suspense fallback={<Loading />} >
                    <DisplayTable />
                </Suspense>
                <a href="#home" className="btn">To Top</a>
            </div>
        </section >
    )
}