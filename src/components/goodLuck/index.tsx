import { Container,  Image,  Title, TriangleBackground } from "./styles";
import Rabbit from "../../assets/rabbit.png";

export function GoodLuck() {
    return (
        <Container>
            <Title fontSize={39}>  Boa Sorte!</Title>
            <Image src={Rabbit} alt="Rabbit" />
            <TriangleBackground />
        </Container>
       
    );
}