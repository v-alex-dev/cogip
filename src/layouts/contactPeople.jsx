import People from "../components/people";
import manager from '../assets/manager.svg';

const ContactPeople = () => {
    return (
         <div className="relative border-y-2 divide-solid border-slate-100 ml-12 mt-24 md:ml-24 md:py-12 ">
            <h2 className="text-6xl font-black font-inter">Contact People</h2>
            <div className="flex flex-col gap-4 md:flex-row">
                <People />
            </div>
             <img src={manager} alt="manager" className="absolute my-48 right-0 top-1/2 md:top-1/2 md:my-0" />
         </div>
    )
}

export default ContactPeople;