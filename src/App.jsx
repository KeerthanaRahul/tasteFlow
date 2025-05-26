import { createTheme, CssBaseline, ThemeProvider, Container,Paper} from "@material-ui/core"
import HomeScreen from "./Screens/HomeScreen"
import './App.css'
import {   Route, Routes } from "react-router-dom";
import ChooseScreen from "./Screens/ChooseScreen";
import  CartProvider  from './CartContext';

import MainMenu from "./MainMenu";
import CheckoutScreen from "./CheckoutScreen";
import   OrderConfirmationScreen from "../OrderConfirmationScreen";

 // Not using destructuring unless it's a named export

import { menu } from "framer-motion/client";
import CartScreen from "./CartScreen";
import AdminPage from "./components/AdminPage";
import AdminOrdersPage from "./AdminOrdersPage";
import PaymentScreen from "./PaymentScreen";
import AdminLoginPage from "./Screens/AdminLoginPage";


const theme= createTheme({
  Typography:{
    h1:{fontWeight:'bold'},
    h2:{
      fontSize:'2rem',
      color:'black',
    },
  },
  palette:{
    primary:{main: '#ff1744'},
    secondary:{
      main:'#118e16',
      contrastText:'#ffffff'
    },
  },
});


function App() {
  
  return (
   
    <ThemeProvider theme={theme}>
      
    <CssBaseline/>
    <Container>
      <Paper>
         <CartProvider>
        <Routes>
          <Route path='/' element={<AdminLoginPage></AdminLoginPage>}></Route>
        <Route path='/home' element={<HomeScreen></HomeScreen>}></Route>
        <Route path='/choose' element={<ChooseScreen/>}></Route>
        <Route path='/order/:mood' element={<MainMenu />}></Route>
        <Route path="/cart" element={<CartScreen/>}></Route>
        <Route path="/checkout" element={<CheckoutScreen/>}></Route>
        <Route path="/orders" element={<OrderConfirmationScreen />} />
        <Route path="/admin/orders" element={<AdminOrdersPage/>}  />
        <Route path="/payment" element={<PaymentScreen/>}  />


        <Route path='/admin' element={<AdminPage/>}></Route>
        </Routes>
        </CartProvider>
 
        
      </Paper>
    </Container>

    </ThemeProvider>

    )
}

export default App
