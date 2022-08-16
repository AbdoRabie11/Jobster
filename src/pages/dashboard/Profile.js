import { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import FormRow from '../../components/FormRow';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const {isLoading , user} = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [userData , setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName:user?.lastName ||'',
    location:user?.location ||'',
    
  })
  const handleSubmit = (e) => {
    const {name, email, lastName, location} = userData
    e.preventDefault()
  if(!name || !email || !lastName || !location) {
    toast.error('please fill all fiealds')
    return;
  }
  dispatch(updateUser({ name, email, lastName, location }));
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value =  e.target.value;
    setUserData({...userData , [name]: value})
  }

  return (
   
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow 
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
            <FormRow 
            type='text'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
            <FormRow 
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
              <FormRow 
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button  className='btn btn-block' type='submit'
           disabled={isLoading}>
            {isLoading ? 'loading...': 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
    
  )
}

export default Profile