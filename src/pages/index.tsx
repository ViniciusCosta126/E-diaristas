import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SaveEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data Display/Page Title/PageTitle";
import UserInformation from "ui/components/data Display/User Information/UserInformation";

import TextFieldMask from "ui/components/inputs/TexFieldMask/TextFieldMask";
import { Button, Typography, Container, CircularProgress } from "@mui/material";

import {
  FormElementContainer,
  ProfisisonalPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";

import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscafeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e conheça todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementContainer>
          <TextFieldMask
            label={"Digite seu cep"}
            fullWidth
            mask={"99.999-999"}
            variant={"outlined"}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>
        {buscafeita &&
          (diaristas.length > 0 ? (
            <ProfisisonalPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista,index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                      picture={diarista.foto_usuario}
                    />
                  );
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}
                    no seu endereço
                  </Typography>
                )}
                <Button variant={"contained"} color="secondary" sx={{ mt: 5 }}>
                  {" "}
                  Contratar um profissional
                </Button>
              </Container>
            </ProfisisonalPaper>
          ) : (
            <Typography align="center" color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponivel em sua Regiao
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
