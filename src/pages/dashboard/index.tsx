import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {
    Wrapper,
    ListContainer,
} from "./styles";
import ListItem from "../../components/AcordionCard";
import Empty from "../../assets/images/empty.svg";
import api from "../../services/api";
export interface IOrder {
    id:string;
    customer_name:string;
    customer_email:string;
    customer_address: string;
    amount:number;
    dolar_amount:number;
    created_at:string;
    updated_at:string;
    items:IItems[]

}
export interface IItems {
    id?:string;
    product_name:string;
    product_price:number;
    product_quantity:number;
    order_id?:string;
    created_at?:string;
    updated_at?:string;
}


const Dashboard: React.FC = () => {


  const [orders,setOrders]=useState<IOrder[]>([])

    async function HandleGetOrders() {
        try {
            const{data}= await api.get('checkouts');
            setOrders(data)
        } catch (error) {
            console.log(error)
        }
     
    }
    useEffect(() => {
        HandleGetOrders()
    }, [])
    
  return(  
    <Wrapper>
        <h1>CHECKOUTS</h1>
          <Link to="/new-order">
            <button type="button">
                NOVA COMPRA
            </button>
          </Link>
        <ListContainer>
            {orders?.length===0 ? <><img src={Empty} alt="empty"/><p>Nenhum registro encontrado :(</p></> :orders?.map((order) => (
                <ListItem key={order.id} order={order} />            
            ))}
        </ListContainer>
    </Wrapper>
)
}

export default Dashboard;