
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { auth } from "../../firebase/FirebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../../components/loader/Loader';

function Login() {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate()
      
    const context = useContext(myContext)
    const { loading, setLoading} = context

    const signin = async() => {
       setLoading(true)
       try{
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', JSON.stringify(result));
      toast.success('Signin Successfully'
      );
      navigate("/")
    //   window.location.href='/'
      console.log('login successfull')
      setLoading(false)
       }catch(error){
        toast.error('Sigin Failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        setLoading(false)
       }
      
    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader/>}
              <div className=' bg-gray-100 px-20 py-20 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Login</h1>
               </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                         className=' bg-gray-600 mb-6 px-4 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-white outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-6 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-white outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button  onClick={signin}
                        className=' bg-yellow-200 w-full text-black font-bold mb-2 px-2 py-2 rounded-lg'>
                        Sign in
                    </button>
                </div>
                <div>
                    <h2 className='text-black'> Don't have an account? <Link className=' text-brown-500 font-bold' to={'/signup'}>Sign up</Link></h2>
                </div>
            </div>
        </div>
    )
}
export default Login