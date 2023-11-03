import { ReactComponent as MainImage } from "assets/images/catalogo.svg";
import "./styles.css";
import { ButtonIcon } from "components/Buttons/ButtonIcon";
import { NavBar } from "components/Navbar";
export const Home = () => {
  return (
    <>
      <NavBar />
      <section className="home-container ">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Explore nossa gama de Produtos Tecnológicos</h1>
            <p className="home-content-description">
              Descubra uma ampla variedade de produtos tecnológicos de última
              geração em nosso catálogo. De dispositivos inovadores a acessórios
              essenciais, oferecemos soluções para atender a todas as suas
              necessidades tecnológicas. Clique no botão abaixo para explorar
              nossos produtos e encontrar o que se encaixa perfeitamente em seu
              estilo de vida digital.
            </p>

            <ButtonIcon value="Explorar Catálogo" />
          </div>

          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </section>
    </>
  );
};
