import React from 'react'
import main from '../assets/images/main.svg'
import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
    <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            jop <span>tracking</span> app
          </h1>
          <p>lorem lorem ahellsdj form
           the ohter side and whtere areu youlorem ahellsdj form the ohter side and whtere areu you ahellsdj form the ohter side and whtere areu you</p>
          <Link to='/register' className='btn btn-hero'>Login/Rigister</Link>
        </div>
        <img src={main} className='img main-img'/>
       </div>
    </Wrapper>
  )
}

export default Landing

const Wrapper =styled.main `
nav{
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
.page{
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}
h1{
  font-weight: 700;
  span{
    color: var(--primary-500);
  }
}
p{
  color: var(--grey-600);
}
.main-img{
  display: none;
}
@media (min-width:992px) {
.page {
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
}
.main-img{
  display: block;
}
}
`