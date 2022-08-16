import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../components/FormRow'

import { toast } from 'react-toastify';
import { useSelector , useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const {user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
     setTimeout(() => {
      navigate('/');
     }, 3000)
    }
  },[user, navigate])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values
    if(!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if(isMember) {
      dispatch(loginUser({email: email, password: password}))
      return;
    }
    dispatch(registerUser({name, email, password}))
  }


  return (
    <Wrapper className='full-page'>
 
  <form className='form' onSubmit={onSubmit}>
    <Logo />
    <h3>{values.isMember ? 'Login' : 'register'}</h3>

    {!values.isMember && (
      <FormRow
        type='text'
        name='name'
        value={values.name}
        handleChange={handleChange}
      />
    
    )}

            <FormRow 
          type='email'
          name='email' 
          value={values.email}
          handleChange={handleChange}
          />
            <FormRow 
          type='password'
          name='password' 
          value={values.password}
          handleChange={handleChange}
          />   
     

 <button type='submit' className='btn btn-block' disabled={isLoading}>
  {isLoading ? 'loading...' : "submit"}
</button>

<p> {values.isMember ? 'Not a member' : 'already have account'}

<button type='button'
className='member-btn'
 onClick={toggleMember}>
      {values.isMember ? 'Register': 'Login'}
</button>

</p>



  </form>
    </Wrapper>
  )
}

export default Register