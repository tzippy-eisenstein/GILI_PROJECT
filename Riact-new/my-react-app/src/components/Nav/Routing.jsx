

import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Contact } from '../Contact/Contact'
import Apartments from '../Apartments/Apartments'
import { Update } from '../personalOptions/update'
import { Register } from '../Register/Register'
import {ApartmentCard} from '../Apartments/ApartmentCard'
import Details from '../Apartments/DetailsComponent'
// import { Icon } from '@mui/material'

//הצהרות על ניתובים
export const Routing = () => {
    return <>

        <Routes>
            
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'Home'} element={<Home></Home>}></Route>
          <Route path={'Login'} element={<Login></Login>}></Route>
          <Route path={'Register'} element={<Register></Register>}></Route>
          <Route path={'Contact'} element={<Contact></Contact>}></Route>
          <Route path={'Apartments'} element={<Apartments></Apartments>}></Route>
          <Route path={'update'} element={<Update></Update>}></Route>
          <Route path={'Apartment'} element={<ApartmentCard></ApartmentCard>}></Route>
    
          <Route path={'DetailsComp/:_id'} element={<Details></Details>}></Route>
        </Routes>
    </>
}
export default Routing