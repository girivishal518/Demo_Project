import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Component1() {
  const { userName } = useParams();

  console.log(userName);
  return (
    <div>
      This is compo 1
      <Link to='/'>Click Here</Link>
    </div>
  )
}

export default Component1
