import {Oval} from "react-loader-spinner";

const Loader = ({primaryColor, secondaryColor}) => {


    return (
        <>
            <div className={"w-full mt-4 flex justify-center items-center"}>
                <Oval   height={80}
                        width={80} color={primaryColor}
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor={secondaryColor}
                        strokeWidth={2}
                        strokeWidthSecondary={2}/>
            </div>
        </>
    )
}

export default Loader;