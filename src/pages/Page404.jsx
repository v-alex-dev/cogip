import { Link } from "react-router-dom";

const Page404 = () => {

    return (
        <div className="flex justify-center flex-col items-center my-4">
            <h1 className="font-roboto font-bold text-4xl">404 Not Found - The page you requested is not avalaible</h1>
            <Link to="/"> <button className="bg-yellow rounded text-xl px-3 py-3 font-black font-roboto my-8"> Return Home </button> </Link>
        </div>
    )
}

export default Page404;