import { StyledButton } from "./styled";
import { ButtonProps } from "./button";

export default function Button(props: ButtonProps) {
    return (
        <StyledButton onClick={props.onClick} title={props.title}>
            {props.children}
        </StyledButton>
    );
}