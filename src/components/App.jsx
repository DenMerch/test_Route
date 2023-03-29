import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Products } from "./pages/products";
import { NotFound } from "./pages/NotFound";
import styled from "styled-components";


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
