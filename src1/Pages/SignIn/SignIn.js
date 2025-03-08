import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assest/Image/Logo.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import google from "../../assest/Image/google.png"
const SignIn = () =>{

    const context =useContext(MyContext);

    useEffect(()=>{context.setisHeaderFooterShow(false)},[])
    return(
        <>
        <section className="section signInPage">
            <div className="container">

               <div className="box card p-3 shadow-0">
                 <div className="text-center">
                    <img src={Logo} className="w-50"/>
                 </div>

                <form className="mt-1">
                <h2>Sign In</h2>
                    <div className="form-group">
                    <TextField id="standard-basic" label="Email" type="Email" required variant="standard" className="w-100 "/>
                    </div>
                    <div className="form-group">
                    <TextField id="standard-basic" label="Password" required typr="password" variant="standard" className="w-100"/>
                    </div>

                    <a className="border-effect cursor txt">Forgot Password?</a>

                    <Button className="btn-blue btn-lg btn-big w-100">Sign In</Button>
                    <p className="txt">Not Registered? <Link to="/signUp" className="border-effect cursor"> Sign Up
                    </Link></p>

                    <h6 className="mt-4 text-center font-weight-bold">Or continue with social account</h6>

                    <Button className="gtext"><img src={google} className="gimg"/>Sign in with google</Button>


                </form>

               </div>


            </div>
        </section>
        </>
    )
}

export default SignIn;