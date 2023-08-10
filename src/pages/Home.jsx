import React from 'react'
import coverDriveOnlineImage from "../../public/cover-drive-online-home.svg"
import playUnlimited from "../../public/Play-Unlimited.svg"
import bestInvestment from "../../public/Best-Investment.svg"
import { Button } from 'antd'
import "../../src/pages/Home.css"


const Home = () => {
  return (
    <div className=''>
      <div>
        <img src={coverDriveOnlineImage} className='sm:w-520 sm:mt-140 sm:ml-100 w-200'/>
        <img src={playUnlimited} className='sm:ml-104 sm:mt-22 w-190'/>
        <img src={bestInvestment} className='sm:ml-104 w-520 sm:mt-25'/>   
      </div>

      <div className='flex sm:mt-25 sm:ml-105'>
        <Button className='sm:mr-20 sm:w-100 bg-loginBgColor login-button'> Login </Button>
        <Button className='sm:mr-20  bg-loginBgColor crypto-currency-button'> Only Cryptop Currency Use </Button>
        {/* <Button/> */} 
      </div>
    </div>
  )
}

export default Home