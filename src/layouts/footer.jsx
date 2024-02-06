import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import fax from "../assets/fax.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import google from "../assets/google.svg";
import pinterest from "../assets/pinterest.svg";
import rss from "../assets/rss.svg";
import {Link} from "react-router-dom";


export default function Footer() {

    return (
        <div className="w-10/12 mx-auto my-5 border-t-2 divide-solid border-yellow mt-24">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-48 md:items-start my-16">
                    <h1 className="border-4 divide-solid border-yellow px-3 font-black text-5xl font-roboto"> COGIP </h1>
                    <div className="flex flex-col gap-y-3 my-3">
                        <div className="flex flex-row gap-4">
                            <img src={location} alt="location" /> 
                            <p className="text-sm">345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <img src={phone} alt="phone" />
                            <p className="text-sm">(123) 456-7890</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <img src={fax} alt="fax" />
                            <p className="text-sm">(123) 456-7890</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-4">
                            <p className="text-sm text-slate-500 my-3">Social Media</p>
                            <div className="flex flex-row gap-5">
                                <img src={facebook} alt="facebook" />
                                <img src={twitter} alt="twitter" />
                                <img src={linkedin} alt="linkedin" />
                                <img src={youtube} alt="youtube" />
                                <img src={instagram} alt="instagram" />
                                <img src={google} alt="google" />
                                <img src={pinterest} alt="pinterest" />
                                <img src={rss} alt="rss" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-10/12 border-t-2 divide-solid border-slate-100 flex flex-col justify-between items-center my-3 md:flex-row">
                    <nav>
                        <ul className="flex flex-row gap-4 my-3 md:gap-8">
                            <li className="text-sm font-medium"><Link to="/">HOME</Link></li>
                            <li className="text-sm font-medium"><Link to="/invoices">INVOICES</Link></li>
                            <li className="text-sm font-medium"><Link to="/companies">COMPANIES</Link></li>
                            <li className="text-sm font-medium"><Link to="/contact">CONTACTS</Link></li>
                            <li className="text-sm font-medium">PRIVACY POLICY</li>
                        </ul>
                    </nav>
                    <div>
                        <p className="text-sm text-slate-500">Copyright © 2022 • COGIP Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}