import styled from "styled-components";

export const Wrapper = styled.nav`
  background: #777777;
  width: 100%;
  transition: all 0.5s;
  position: sticky;
  top: 0;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoItem = styled.li`
  overflow: hidden;
`;

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Anchor = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
`;
