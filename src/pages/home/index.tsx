import { GoodLuck } from "../../components/goodLuck";
import { Header } from "../../components/header";
import { InformtionCard } from "../../components/informationCard";
import { SeeWebsite } from "../../components/seeWebsite";
import { TechnologyButton } from "../../components/technologyButton";
import { WelcomeTutilabs } from "../../components/welcomeTutilabs";
import { Container, GridBody, HeaderHome, CardGrid, SubCardsGrid, MediaQuery } from "./styles";

export function Home() {
    return (
        <MediaQuery>
        <Container>
            <HeaderHome>
                <Header />
            </HeaderHome>
            <GridBody className="gridBody">
                <CardGrid>
                    <WelcomeTutilabs />
                </CardGrid>
                <CardGrid>
                    <GoodLuck />
                </CardGrid>
                <CardGrid>
                    <TechnologyButton />
                </CardGrid>
                <SubCardsGrid className="subCardsGrid">
                    <InformtionCard />
                    <SeeWebsite />
                </SubCardsGrid>
            </GridBody>
        </Container>
        </MediaQuery>
    );
}