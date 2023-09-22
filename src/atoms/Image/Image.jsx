import * as Styled from "./index";

export default function Image({ src, titulo }) {
  return <Styled.Image src={src} alt={titulo} />;
}
