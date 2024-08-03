import React from 'react'
import { useForm } from "react-hook-form";
import "../css/Threads.css"
function Threads() {
  const { register,handleSubmit, formState :{errors},} = useForm();
  console.log(errors );
  const [data,setData]= React.useState('');
  console.log(data);

  return (
    <>
      <form className='form' onSubmit={handleSubmit((data)=>{setData(data)})}>
        <h2>Form</h2>
        <div>
          <label htmlFor="fn">first Name</label>
          <input
          {...register('firstname',{required: true})}
          type='text'
          name='firstname'
            id='fn'
            placeholder='enter your first name'
          />
        </div>
        {errors.firstname &&<div>first name is required</div>}
        <div>
          <label htmlFor="ln">Last Name</label>
          <input
          {...register('lastname',{required: true})}
            type="text"
            name='lastname'
            id="ln"
            placeholder='enter your last name' />
        </div>
        {errors.lastname&&<div>last name is required</div>}
        <div>
          <label htmlFor="phn">phone No</label>
          <input
          {...register('phone',{required: true})}
            type="tel"
            id="phn"
            name='phone'
            placeholder='enter your phone number' />
        </div>
        {errors.phone&&<div>phone number is required</div>}
        <div>
          <label htmlFor="em">email</label>
          <input
          {...register('email',{required: true})}
            type="email"
            name='email'
            id="em"
            placeholder='enter your email here' />
        </div>
        {errors.email&&<div>email is required</div>}
        <div>
          <label htmlFor="ps">Password</label>
          <input
          {...register('password',{required: true})}
            type="password"
            id="ps"
            name='password'
            placeholder='enter your password' />
        </div>
        {errors.password&&<div>password is required</div>}
        <fieldset className='fieldset'>
          <legend>Gender</legend>
          <div>
            <label htmlFor="ml">male</label>
            <input
            {...register('gender',{required: true})}
              type="radio"
              name="gender"
              id="ml"
            />
          </div>
          <div>
            <label htmlFor="feml">female</label>
            <input
            {...register('gender',{required: true})}
              type="radio"
              name="gender"
              id="feml"
            />
          </div>
        </fieldset>
        {errors.gender&&<div>gender is required</div>}
        <div>
          <label htmlFor="check">check </label>
          <input
          {...register('check',{required: true})}
            type="checkbox"
            name="check"
            id="check"
          />
        </div>
        {errors.check&&<div>check is required</div>}
        <div>
          <input type="submit" value="submit" />
        </div>

      </form>
    </>
  )
}

export default Threads
