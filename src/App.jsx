import React from "react";

import { ProductService } from "./api/ProductService";

import * as Styled from "./App";

import ActionArea from "./organisms/ActionArea/ActionArea";
import Title from "./atoms/Title/Title";
import CardProduct from "./organisms/CardProduct/CardProduct";

export default function App() {
  const [productData, setProductData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  async function handleClick(event) {
    setLoading(true);
    const data = await ProductService.getProductByName(event.target.innerText);
    setProductData(data);
    setLoading(false);
  }

  return (
    <Styled.MainContainer>
      {loading ? (
        <Title title="Carregando..." />
      ) : (
        <>
          <Title title="Desafio UseState - Origamid" />
          <ActionArea handleClick={handleClick} />
          <CardProduct
            nome={productData.nome}
            preco={productData.preco}
            descricao={productData.descricao}
            fotos={productData.fotos}
          />
        </>
      )}
    </Styled.MainContainer>
  );
}
