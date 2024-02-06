const DynamicTitle = ({title}) => {

    const path = window.location.pathname

    return (
        <div className="mt-12  mb-20">
            <div className="relative md:pr-28">
                  <h2 className="text-5xl md:text-6xl font-black font-inter md:w-full relative z-10">{title}</h2>
                {path !== "/" && (
                    <div className="bg-yellow w-3/4 h-8 absolute left-24 top-9 "></div>
                )}

            </div>
        </div> 
    ) 
}

export default DynamicTitle;