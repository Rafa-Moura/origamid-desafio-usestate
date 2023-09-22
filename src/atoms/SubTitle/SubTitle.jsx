import * as Styled from "./index";

export default function SubTitle({ name }) {
  return (
    <Styled.SubTitle>
      {name
        ? name
        : "Clique em um dos botões acima para recuperar os dados de algum dos 3 itens"}
    </Styled.SubTitle>
  );
}
