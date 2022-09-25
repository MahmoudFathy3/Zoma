import React, {useEffect} from 'react'

const About = ({HandlerFooter}) => {

  useEffect(() => {
    return HandlerFooter(true)
  },[HandlerFooter])
  
  return (
    <div>About</div>
  )
}

export default About