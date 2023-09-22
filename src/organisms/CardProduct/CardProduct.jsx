import * as Styled from "./index";

import Image from "../../atoms/Image/Image";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default function CardProduct({ nome, preco, descricao, fotos }) {
  return (
    <Styled.CardContainer>
      <Styled.CardImageContainer>
        {fotos?.length > 0 &&
          fotos.map((foto) => (
            <Image key={foto.titulo} src={foto.src} titulo={foto.titulo} />
          ))}
      </Styled.CardImageContainer>
      <Styled.CardDescriptionContainer>
        {nome ? (
          <SubTitle name={nome} />
        ) : (
          <SubTitle name="Clique em um dos botões acima para carregar dados de um produto" />
        )}
        {preco && (
          <Paragraph
            text={Number(preco).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          />
        )}
        <Paragraph text={descricao} />
      </Styled.CardDescriptionContainer>
    </Styled.CardContainer>
  );
}
