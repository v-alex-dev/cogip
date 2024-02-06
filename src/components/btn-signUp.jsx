import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const BtnSignUp = ({isLog}) => {



    return (
      <>
          {isLog ?
                (<Link to={"/dashboard"}>Dashboard</Link>)
              :
               ( <Link to={"/"}>Sign up</Link>)

          }
      </>
  )
}

export default BtnSignUp;