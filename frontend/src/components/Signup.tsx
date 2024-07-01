import React from 'react';
import BackgroundImage from './BackgroundImage';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (<>
    <BackgroundImage />
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='content absolute inset-0 items-center z-10 justify-center mx-[459px] mt-[90px] bg-gray-900 bg-opacity-50'>
      
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in"   redirectUrl="/home"  /></div>
    </div></>
  );
};

export default SignUpPage;
