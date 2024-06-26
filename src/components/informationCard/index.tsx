
import { Container, Image, MediaQuery, StyledDivider, TextInformation, Title } from "./styles";
import { useItemContext } from '../../context/ItemContext';
import TecnologiaImage from "../../assets/tecnologiaImage.svg";
import { Typography } from "@mui/material";

export function InformtionCard() {
    const { clickedItemInfo } = useItemContext();

    return (
        <MediaQuery>
            <Container>
                <Title fontWeight={900}>
                    {clickedItemInfo === null ?
                        <Typography fontSize={17} fontWeight="bold">Tecnologia</Typography>
                        : clickedItemInfo?.name}
                </Title>
                <StyledDivider />
                <TextInformation className="textInformation">
                    {clickedItemInfo === null ?
                        <Image className="image" src={TecnologiaImage} alt="TecnologiaImage" />
                        : clickedItemInfo?.description}
                </TextInformation>
            </Container>
        </MediaQuery>
    );
}