import { StyledFooter } from './styled';
import Link from 'next/link';

export default function Footer() {
    return (
        <StyledFooter>
            <p>MKS sistemas &copy; Todos os direitos reservados. <Link href="/cookies">Política de Cookies.</Link></p>
        </StyledFooter>
    );
}