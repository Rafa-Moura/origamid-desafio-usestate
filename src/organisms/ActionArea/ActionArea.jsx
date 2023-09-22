import Button from "../../atoms/Button/Button";

import * as Styled from "./index";

export default function ActionArea({ handleClick }) {
  return (
    <Styled.ActionContainer>
      <Button handleClick={handleClick} name="tablet" />
      <Button handleClick={handleClick} name="smartphone" />
      <Button handleClick={handleClick} name="notebook" />
    </Styled.ActionContainer>
  );
}
