import * as styled from "./index";

export default function Button({ name, handleClick }) {
  return <styled.Button onClick={handleClick}>{name}</styled.Button>;
}
