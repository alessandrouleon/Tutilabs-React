
import { Container, StyledDivider, TextInformation, Title } from "./styles";

export function InformtionCard() {

    return (
        <Container>
            <Title fontWeight={900}>Node</Title>
            <StyledDivider />
            <TextInformation>
            Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.
            </TextInformation>
        </Container>
    );
}