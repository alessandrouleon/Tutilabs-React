import { Container,  Image,  MediaQuery,  Title, TriangleBackground } from "./styles";
import Rabbit from "../../assets/rabbit.png";

export function GoodLuck() {
    return (
        <MediaQuery>
        <Container className="containerBackground">
            <Title className="title" fontSize={39}>  Boa Sorte!</Title>
            <Image className="imagemRabbit" src={Rabbit} alt="Rabbit" />
            <TriangleBackground className="triangleBackground" />
        </Container>
        </MediaQuery>
    );
}