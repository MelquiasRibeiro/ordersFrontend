import React, { useState } from 'react'
import { BiChevronUp ,BiChevronDown} from "react-icons/bi";
import { MainInfo,Container,Details } from './styles';
import {  formatPriceToBRL,formatPriceToUSD} from "../../utils/formatCurrency";

import { IOrder} from "../../pages/dashboard";

interface Iprops{
    order:IOrder
}

const AcordionCard: React.FC<Iprops> = ({order}) => {
    const [expanded, setExpanded] = useState(false)

    function handleExpanded() {
        setExpanded(!expanded)
    }
  return (  
    <Container>
        <MainInfo>
         <table>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Total(BRL)</th>
                    <th>Total(USD)</th>
                    <th>Detalhes</th>
                </tr>
                <tr>
                            <td>{order.customer_name}</td>
                            <td>{order.customer_email}</td>
                            <td>{formatPriceToBRL(order.amount)}</td>
                            <td>{formatPriceToUSD(order.dolar_amount)} </td>
                            <td>
                                <button onClick={handleExpanded}>
                                    {!expanded?
                                    <BiChevronDown size={30} color="#191920"/>:
                                    <BiChevronUp size={30} color="#191920"/>
                                }
                                </button>
                            </td>

                </tr>
            </table>

        </MainInfo>
        {expanded && 
        <Details>
           <table>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
                {
                    order.items.map(product=>(
                        <tr>
                            <td>{product.product_name}</td>
                            <td>{product.product_quantity}</td>
                            <td>{formatPriceToBRL(product.product_price)}</td>
                        </tr>
                    ))
                }
              
            </table>
        </Details>
        } 
    </Container> 
);
}

export default AcordionCard;