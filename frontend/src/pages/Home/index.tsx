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
            <div>
              <h1>Explore nossa gama de Produtos Tecnológicos</h1>
              <p className="home-content-description">
                De dispositivos inovadores a acessórios essenciais, oferecemos
                soluções para atender a todas as suas necessidades tecnológicas.
              </p>
            </div>
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
