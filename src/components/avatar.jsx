import React, { useState, useEffect, useMemo } from 'react';

const Avatar = (props) => {
    
    return (
         <>
            <img src={`https://ui-avatars.com/api/?name=${props.name}&background=random`} alt="avatar" className="rounded-full  md:mt-0" />
         </>
    )
}

export default Avatar;