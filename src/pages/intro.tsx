import { MainLoadingStyle } from "../styles/intro";
export const LoadingPage = () => {
  return (
    <MainLoadingStyle>
      <section>
        <h1>Bem Vindo!</h1>
        <div className="finger-print"></div>
        <h2>ESCANEANDO...</h2>
      </section>
    </MainLoadingStyle>
  );
};
