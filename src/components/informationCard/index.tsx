
import { Container, Image, StyledDivider, TextInformation, Title } from "./styles";
import { useItemContext } from '../../context/ItemContext';
import TecnologiaImage from "../../assets/tecnologiaImage.svg";
import { Typography } from "@mui/material";

export function InformtionCard() {
    const { clickedItemInfo } = useItemContext();
    
    console.log("NOME DESCRIPTION", clickedItemInfo);
    
    return (
        <Container>
            <Title fontWeight={900}>
                { clickedItemInfo === null ? 
                <Typography fontSize={17} fontWeight="bold">Tecnologia</Typography> 
                :  clickedItemInfo?.name}
                </Title>
            <StyledDivider />
            <TextInformation>
                {clickedItemInfo === null ? 
                 <Image src={TecnologiaImage} alt="TecnologiaImage" /> 
                 : clickedItemInfo?.description}
            </TextInformation>
        </Container>
    );
}