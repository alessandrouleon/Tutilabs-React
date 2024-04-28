import { GoodLuck } from "../../components/goodLuck";
import { Header } from "../../components/header";
import { InformtionCard } from "../../components/informationCard";
import { SeeWebsite } from "../../components/seeWebsite";
import { TechnologyButton } from "../../components/technologyButton";
import { WelcomeTutilabs } from "../../components/welcomeTutilabs";
import { Container, GridBody, HeaderHome, CardGrid, SubCardsGrid } from "./styles";

export function Home() {
    return (
        <Container>
            <HeaderHome>
                <Header />
            </HeaderHome>
            <GridBody>
                <CardGrid>
                    <WelcomeTutilabs />
                </CardGrid>
                <CardGrid>
                    <GoodLuck />
                </CardGrid>
                <CardGrid>
                    <TechnologyButton />
                </CardGrid>
                <SubCardsGrid>
                    <InformtionCard />
                    <SeeWebsite />
                </SubCardsGrid>
            </GridBody>
        </Container>
    );
}