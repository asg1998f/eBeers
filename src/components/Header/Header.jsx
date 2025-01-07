import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Avatar, Space, Button, Badge } from "antd";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss"
 
const Header = () => {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="header">
    <div className="header-logo">
      <h1>EBeers</h1>
    </div>
    <nav className="header-nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      {user ? (
        <>
          <Link to="/cart" className="nav-link">
            <Badge count={cart.length} offset={[8, 0]}>
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </Badge>
          </Link>
          <Link to="/profile" className="nav-link">
            <Space size={16}>
              <Avatar>{user.name ? user.name[0].toUpperCase() : "U"}</Avatar>
            </Space>
          </Link>
          <Button type="link" onClick={logoutUser} className="nav-link">
            Logout
          </Button>
        </>
      ) : (
        <Link to="/login" className="nav-link">
          Login
        </Link>
      )}
    </nav>
  </header>
  );
};

export default Header;