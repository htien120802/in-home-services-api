import {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import { useDispatch } from 'react-redux'
import { actionLogin } from 'store/actions'

function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const INITIAL_LOGIN_OBJ = {
        password : "",
        username : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const callbackLoginSuccess = useCallback(() => {
        navigate('/app/welcome');
    }, [navigate]);

    const submitForm = (e) =>{
        e.preventDefault()
        setErrorMessage("")

        if(loginObj.username.trim() === "")return setErrorMessage("Username is required! (use any value)")
        if(loginObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        setLoading(true);
        dispatch(actionLogin({loginObj, callback: callbackLoginSuccess}));
        setLoading(false);
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className=''>
                        <LandingIntro />
                </div>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText type="username" defaultValue={loginObj.username} updateType="username" containerStyle="mt-4" labelTitle="Username" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>

                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Login</button>

                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login