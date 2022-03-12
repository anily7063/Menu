import React from 'react'
import "./Menu.css"

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

function Menu() {
  return (
    <div className='menu'>
       <button className=' btn  btn1'><AccountBalanceIcon/><p>Bank Loan</p></button>
       <button className='  btn btn2'><WifiTetheringIcon/><p>Internet Bill</p></button>
       <button className='btn btn3'><WbIncandescentIcon/><p>Electricity Bills</p></button>
       <button className='btn btn4'><PhoneInTalkIcon/><p>Telephone Bills</p></button>
       <button className=' btn btn5'><CloudQueueIcon/><p>Hosting</p></button>
       <button className='btn btn6'><DirectionsCarIcon/><p>Car Renting</p></button>
       <button className='btn btn7'><HomeIcon/><p>Home Service</p></button>
       <button className='btn btn8'><ShoppingBasketIcon/><p>Super Shop</p></button>
       
        </div>
  )
}

export default Menu;