import {
    ButtonAction, ButtonGroup, Container,
    Image,
    ImageArrwBack,
    ImageArrwForward,
    ImageGroup,
    NavigationButtonSelection, Title, VectorImage
} from "./styles";
import VectorLight from "../../assets/VectorLight.png";
import VectorBlack from "../../assets/VectorBlack.png";
import ArrowForward from "../../assets/ArrowForward.png";
import ArrowBack from "../../assets/ArrowBack.png";
import { arrayA, arrayB, ImageProps } from '../../utils/imageTechnology';
import { useEffect, useState } from "react";
import { COLORS } from "../../themes/colors";



export function TechnologyButton() {
    const [currentArray, setCurrentArray] = useState<ImageProps[]>([]);
    const [selectedButton, setSelectedButton] = useState<'A' | 'B'>('A');


    useEffect(() => {
        setCurrentArray(arrayA);
    }, []);

    const handleClickArrayA = () => {
        setCurrentArray(arrayA);
        setSelectedButton('A');
    };

    const handleClickArrayB = () => {
        setCurrentArray(arrayB);
        setSelectedButton('B');
    };

    return (
        <Container>
            <Title fontWeight="bold">Tipo de teste</Title>
            <ButtonGroup>
                <ButtonAction
                    onClick={handleClickArrayA}
                    style={{
                        backgroundColor: selectedButton === 'A' ? `${COLORS.BLACK_COLOR}` : `${COLORS.BACKGROUND_BASE}`,
                        color: selectedButton === 'A' ? `${COLORS.BACKGROUND_BASE}` : `${COLORS.BLACK_COLOR}`,
                    }}
                >
                    front-end
                    <VectorImage src={selectedButton === 'A' ? `${VectorLight}` : `${VectorBlack}`} />
                </ButtonAction>
                <ButtonAction
                    onClick={handleClickArrayB}
                    style={{
                        backgroundColor: selectedButton === 'B' ? `${COLORS.BLACK_COLOR}` : `${COLORS.BACKGROUND_BASE}`,
                        color: selectedButton === 'A' ? `${COLORS.BLACK_COLOR}` : `${COLORS.BACKGROUND_BASE}`,
                    }}
                >
                    back-end
                    <VectorImage src={selectedButton === 'A' ? `${VectorBlack}` : `${VectorLight}`} />
                </ButtonAction>

            </ButtonGroup>
            <NavigationButtonSelection>
                <ImageGroup>
                    <ImageArrwBack src={ArrowBack} alt="ArrowBack"  />
                    {currentArray.length > 0 ? (
                        currentArray.map((item) => (
                            <div key={item.id}>
                                <button>
                                    <Image src={item.image_url} alt={item.name} />
                                </button>
                            </div>

                        ))
                    ) : (
                        <p>Selecione um botão para exibir</p>
                    )}
                    <ImageArrwForward src={ArrowForward} alt="ArrwForward" />
                </ImageGroup>
                
            </NavigationButtonSelection>
        </Container>
    );
}