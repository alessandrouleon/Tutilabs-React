import { BackgroundImageGrid, ButtonView, Container, ImageGrad, InformationSeeWebsite, LegendImageSeeWebsite, MediaQuery, TiteButton, VectorImage } from "./styles";
import ImageGrid from "../../assets/Imagem colada.png";
import ImageIphone from "../../assets/iPhone 15.png";
import LegendSeeWebsite from "../../assets/Rectangle.png";
import Vector from "../../assets/Vector.png";
import { Typography } from "@mui/material";

export function SeeWebsite() {

    return (
        <MediaQuery>
            <Container>
                <BackgroundImageGrid 
                className="backgroundImageGrid"
                src={ImageGrid} alt="Image grade" />
                <ImageGrad 
                className="imageGrad"
                src={ImageIphone} alt="Iphone" />
                <LegendImageSeeWebsite 
                className="nformationSeeWebsite"
                src={LegendSeeWebsite} alt="Image Legend" />
                <InformationSeeWebsite>
                    <Typography className="more-about-website">
                    veja mais sobre nossos sistemas
                    </Typography>
                   
                    <ButtonView
                    className="buttonView"
                        href="https://www.tutiplast.com.br/index.html" target="_blank" rel="noopener noreferrer"
                    >
                        <TiteButton> Visualizar</TiteButton>
                        <VectorImage src={Vector} alt="Vector" />
                    </ButtonView>
                </InformationSeeWebsite>
            </Container>
        </MediaQuery>
    );
}