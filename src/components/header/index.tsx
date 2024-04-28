import { AppBar, Toolbar } from "@mui/material";
import Tutilabs from "../../assets/Tutilabs-logo 3.svg"
import { Container, Content, Image, LinkDev } from "./styles";

export function Header() {

  return (
    <Container>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Content>
            <Image src={Tutilabs} alt="Tutilabs Logo" />
            <LinkDev>
              <a href="https://www.linkedin.com/in/alessandro-uleon/">feito por: alessandro uleon</a>
            </LinkDev>
          </Content>
        </Toolbar>
      </AppBar>
    </Container>
  );
}