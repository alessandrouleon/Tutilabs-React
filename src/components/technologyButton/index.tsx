/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    ArrwBackButton,
    ArrwForwardButton,
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
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../themes/colors";
import { useItemContext } from '../../context/ItemContext'; 

export function TechnologyButton() {
    const [currentArray, setCurrentArray] = useState<ImageProps[]>([]);
    const [selectedButton, setSelectedButton] = useState<'A' | 'B'>('A');
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [clickCount, setClickCount] = useState(0);
    const [isStateScrollRight, setIsStateScrollRight] = useState(false);
    const [isStateScrollLeft, setIsStateScrollLeft] = useState(false);
    const { setClickedItemInfo } = useItemContext();

    const handleScrollLeft = () => {
        if (clickCount >= arrayB.length || clickCount < arrayB.length + 1 || clickCount < arrayB.length + 2) {
            if (containerRef.current) {
                containerRef.current.scrollLeft -= 100;
                setScrollPosition(containerRef.current.scrollLeft);
                setClickCount(clickCount - 3);
            }
        }
        else {
            setIsStateScrollLeft(true);
        }
    };

    const handleScrollRight = () => {
        if (clickCount < arrayA.length || clickCount < arrayA.length + 1 || clickCount < arrayA.length + 2) {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 100;
                setScrollPosition(containerRef.current.scrollLeft);
                setClickCount(clickCount + 3);
            }
        }
        else {
            setIsStateScrollRight(true);
        }
    };

    useEffect(() => {
        setCurrentArray(arrayA);
    }, []);

    const handleClickArrayA = () => {
        setClickedItemInfo(null);
        setCurrentArray(arrayA);
        setSelectedButton('A');
    };

    const handleClickArrayB = () => {
        setClickedItemInfo(null);
        setCurrentArray(arrayB);
        setSelectedButton('B');
    };

    const handleItemClick = (itemName: string, itemDescription: string) => {
        setClickedItemInfo({ name: itemName, description: itemDescription });
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
            <NavigationButtonSelection id="container" ref={containerRef}>
                <ImageGroup>
                    {!isStateScrollLeft && !isStateScrollRight || clickCount == 0 ? null :
                        <ArrwBackButton
                            type="button"
                            value={clickCount}
                            onClick={handleScrollLeft}
                        >
                            <ImageArrwBack src={ArrowBack} alt="ArrowBack" />
                        </ArrwBackButton>
                    }
                    {currentArray.length > 0 ? (
                        currentArray.map((item) => (
                            <div key={item.id}>
                                <button onClick={() => handleItemClick(item.name, item.description)}>
                                    <Image src={item.image_url} alt={item.name} />
                                </button>
                            </div>

                        ))
                    ) : (<p>Selecione um botão para exibir</p>)}
                    {!isStateScrollRight && !isStateScrollLeft || clickCount === 0 ?
                        <ArrwForwardButton
                            type="button"
                            value={clickCount}
                            onClick={handleScrollRight}
                        >
                            <ImageArrwForward src={ArrowForward} alt="ArrwForward" />
                        </ArrwForwardButton>
                        : null}
                </ImageGroup>
            </NavigationButtonSelection>
        </Container>
    );
}
