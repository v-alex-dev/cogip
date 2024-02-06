import rect17 from '../assets/rect-17.svg';
import workBetter from '../assets/work-better.svg';

const WorkBetter = () => {
    return (
        <div className="flex flex-row my-40">
            <div className="w-5/12 text-xl my-4 md:text-7xl md:my-28">
                <h2 className="font-black font-inter">WORK BETTER IN YOUR COMPANY</h2>
            </div>
            <div className="flex items-center justify-center w-7/12 h-36 md:h-96 bg-rect-17 bg-cover">

                <img src={workBetter} alt="work" className=" w-1/2 top-0 right-0"/>
            </div>
        </div> 
    ) 
}

export default WorkBetter;