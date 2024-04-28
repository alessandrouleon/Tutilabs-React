import { BackgroundImageGrid, ButtonView, Container, ImageGrad, InformationSeeWebsite, LegendImageSeeWebsite, TiteButton, VectorImage } from "./styles";
import ImageGrid from "../../assets/Imagem colada.png";
import ImageIphone from "../../assets/iPhone 15.png";
import LegendSeeWebsite from "../../assets/Rectangle.png";
import Vector from "../../assets/Vector.png";

export function SeeWebsite() {

    return (
        <Container>
            <BackgroundImageGrid src={ImageGrid} alt="Image grade" />
            <ImageGrad src={ImageIphone} alt="Iphone" />
            <LegendImageSeeWebsite src={LegendSeeWebsite} alt="Image Legend" />
            <InformationSeeWebsite>
                veja mais sobre nossos sistemas
                <ButtonView 
                 href="https://www.tutiplast.com.br/index.html" target="_blank" rel="noopener noreferrer"
                >
                  <TiteButton> Visualizar</TiteButton> 
                    <VectorImage src={Vector} alt="Vector" />
                </ButtonView>
            </InformationSeeWebsite>
        </Container>
    );
}