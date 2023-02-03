import { StyledHeader } from "./styled";

interface HeaderInterface {
  logo?: JSX.Element,
  menu?: JSX.Element
}

export default function Header( { logo, menu }: HeaderInterface) {
    return (
        <StyledHeader>
            {logo}{menu}
        </StyledHeader>
    );
}