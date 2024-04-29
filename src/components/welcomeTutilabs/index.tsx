import { Box, Typography } from "@mui/material";
import Hello from "../../assets/Group 2.png"
import { Container,  HandImage,  MedyaQuery,  Welcome } from "./styles";

export function WelcomeTutilabs() {

    return (
        <MedyaQuery>
        <Container>
            <Welcome className="title" fontSize={80} mt={-3}>
                Bem-vido ao
            </Welcome>
            <Welcome className="title" fontSize={80} mt={-4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    Tutilabs
                    <HandImage src={Hello} alt="Hello" />
                </Box>
            </Welcome>

            <Typography className="subtitle">
                Olá,
                Agradecemos seu interesse em estagiar na Tutiplast e por participar do nosso teste de front-end. Este teste foi desenvolvido para avaliar suas habilidades e conhecimentos na área, portanto, não se preocupe se não conseguir completar todas as tarefas. O objetivo é entender seu processo de resolução de problemas e seu conhecimento técnico.
            </Typography>
        </Container>
        </MedyaQuery>
    );
}