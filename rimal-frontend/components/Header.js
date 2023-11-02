import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #911;
`;

const Logo = styled(Link)`
  text-decoration-color:#fff;
  text-decoration:none;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Logo href={'/'}>Rimal</Logo>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/account'}>Account</Link>
                <Link href={'/basket'}>Basket (0)</Link>
            </nav>
        </StyledHeader>
    )
}