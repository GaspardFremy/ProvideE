import { createStackNavigator, createAppContainer } from 'react-navigation'
import Connexion from '../ui/views/Connexion'
import Home from '../ui/views/Home'
import Menu from '../ui/views/Menu'
import Invoices from '../ui/views/Invoices'
import InvoiceDetail from '../ui/views/InvoiceDetail'
import MakeAnOrder from '../ui/views/MakeAnOrder'
import Orders from '../ui/views/Orders'
import OrderDetail from '../ui/views/OrderDetail'
import Payment from '../ui/views/Payment'
import AddPayment from '../ui/views/AddPayment'
import MyInfo from '../ui/views/MyInfo'
import AddProduct from '../ui/views/AddProduct'
import DetailCurrentOrder from '../ui/views/DetailCurrentOrder'


const StackNavigator = createStackNavigator({

    Connexion: {
        screen: Connexion
    },
    Home: {
        screen: Home
    },
    MyInfo: {
        screen: MyInfo
    },
    AddPayment: {
        screen: AddPayment
    },
    Payment: {
        screen: Payment
    },
    Menu: {
        screen: Menu
    },
    Orders: {
        screen: Orders
    },
    MakeAnOrder: {
        screen: MakeAnOrder
    },
    DetailCurrentOrder: {
        screen: DetailCurrentOrder
    },
    OrderDetail: {
        screen: OrderDetail
    },
    Invoices: {
        screen: Invoices
    },
    InvoiceDetail: {
        screen: InvoiceDetail
    },
    AddProduct: {
        screen: AddProduct
    }

}, {
    initialRouteName: 'Home'
});



export default createAppContainer(StackNavigator)
