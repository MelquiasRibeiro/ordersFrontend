import React,{useState,FormEvent,ChangeEvent} from "react";
import { FaSpinner,FaArrowLeft } from "react-icons/fa";
import {Link,} from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { v4 as uuid } from "uuid";

import {
  Wrapper,
  Content,
  Input,
  InfoContainer,
  Button,
  NewProduct,
  ItemsContainer,
  ItemRow,
  DeleteButtom

} from "./styles";
import api from "../../services/api";
import notify from "../../utils/notify";
import { IItems } from "../dashboard";

const NewOrder: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [userData,setUserData] =useState({
    "customer_name": "",
    "customer_email": "",
    "customer_address": "",
    })
    const [items,setItems] = useState<IItems[]|[]>([])

    const [unsavedItems,setUnsavedItems] = useState({
        id:uuid(),
				"product_name": "",
				"product_price": 0,
				"product_quantity": 0,
		
			})

    function handleInputChange(e:ChangeEvent<HTMLInputElement>){
      const {name,value} = e.target;
      setUserData({...userData,[name]:value})

  }
  function addNewItem(){
      setItems([...items,{...unsavedItems}
    ])    
    setUnsavedItems({
        id:uuid(),
				"product_name": "",
				"product_price": 0,
				"product_quantity": 0,
		
			})
  }

  function RemoveItem(id:string|undefined){
    console.log(id)
    const UpdatedItems= items.filter(item=>{
      return item.id !==id
    }
    )
   setItems(UpdatedItems)
  }
  
  function setItemValue(
    value: string,
    name:string
  ) {
    setUnsavedItems({...unsavedItems,[name]:value})
  }


 async function HandleCreate(e:FormEvent) {
  setLoading(true)

   e.preventDefault()
    try {
      const data ={
        ...userData,
        items
      }
    await api.post('checkout',data);
    notify('cadastrado com sucesso','sucess',)
  } catch (error) {
      notify("error ao salvar",'error')
      

  }finally{
    setLoading(false)
  }
  
  }

  return( 
    <Wrapper >
      <Link to="/">
        <FaArrowLeft color="#191920" size={24}/>
      </Link>
        <h1>Crie um novo registro</h1>
        <Content onSubmit={HandleCreate} >
              <InfoContainer>
                <p>Nome</p>
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  required
                  name="customer_name"
                  id="customer_name"
                  onChange={handleInputChange}

                  />
                <p>Email</p>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  required
                  name="customer_email"
                  id="customer_email"
                  onChange={handleInputChange}
                  />
                <p>endereco</p>
                <Input
                  type="text"
                  placeholder="Digite seu endereco"
                  required
                  name="customer_address"
                  id="customer_address"
                  onChange={handleInputChange}
                  />

              <ItemsContainer>
              <h1>Produtos:</h1>
              {
                  items?.map((item)=>(
                    
                    <ItemRow key={item.id}>
                      {
                        <>
                          <DeleteButtom type="button" onClick={()=>RemoveItem(item.id)}>
                            <FiTrash2/>
                          </DeleteButtom>
                          <p>{item.product_name}</p>
                          <p>{item.product_quantity}</p>
                          <p>{item.product_price}</p>
                        </>  
                    
                      }
                 
                       </ItemRow>
                       
                  ))
              }
                <ItemRow>
                <div>

                     <p>Nome do produto</p>
                     <Input
                       type="text"
                       placeholder="Digite o nome do produto"
                       name="product_name"
                       id="customer_name"
                       onChange={(e)=> setItemValue(e.target.value,"product_name") }
                        value={unsavedItems.product_name}
                       />
                        </div>
                        <div>
     
                       <p>Quantidade do produto</p>
                          <Input
                       type="number"
                       placeholder="Digite a quantidade do produto"
                       name="product_quantity"
                       id="customer_name"
                       onChange={(e)=> setItemValue(e.target.value,"product_quantity") }
                       value={unsavedItems.product_quantity}
                       />
                     </div>
                     <div>
                     <p>Valor do produto</p>
     
                          <Input
                       type="number"
                       placeholder="Digite o valor do produto"
                       name="product_price"
                       id="customer_name"
                       onChange={(e)=> setItemValue(e.target.value,"product_price") }
                       value={unsavedItems.product_price}
                       />
                       </div>
                       </ItemRow>
                  <NewProduct type="button" onClick={addNewItem}>
                     Adicionar produto
                  </NewProduct>
              </ItemsContainer>
              </InfoContainer>
              <Button >
                {loading ? <FaSpinner color="#fff" size={14} /> : "SALVAR"}
              </Button>
        </Content>
    </Wrapper>
    )
}

export default NewOrder;