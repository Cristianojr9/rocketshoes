import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img 
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" 
          alt="tenis"
        />
        <strong>Tenis maneiro</strong>
        <span>R$ 139,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img 
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" 
          alt="tenis"
        />
        <strong>Tenis maneiro</strong>
        <span>R$ 139,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img 
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" 
          alt="tenis"
        />
        <strong>Tenis maneiro</strong>
        <span>R$ 139,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  )
}
