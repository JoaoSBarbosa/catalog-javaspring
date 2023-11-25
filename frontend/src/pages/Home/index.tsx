import "./styles.css";
import {Link} from "react-router-dom";
import {ReactComponent as MainImage} from "assets/images/catalogo.svg";
import {ButtonIcon} from "components/Buttons/ButtonIcon";
import {NavBar} from "components/Navbar";
import {getTokenData, hasAnyRoles, isAuthenticated} from "../../util/request";

export const Home = () => {
    return (
        <section className="home-container ">
            <h1>{hasAnyRoles(['ROLE_ADMIN'])?"Bem-vindo, senhor admin! 🫡":"Você não é admin! 😶‍🌫️😒"}</h1>
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                        <h1>Explore nossa gama de Produtos Tecnológicos</h1>
                        <p className="home-content-description">
                            De dispositivos inovadores a acessórios essenciais, oferecemos
                            soluções para atender a todas as suas necessidades tecnológicas.
                        </p>
                    </div>
                    <div>
                        <Link to="/products">
                            <ButtonIcon value="Explorar Catálogo"/>
                        </Link>
                    </div>
                </div>

                <div className="home-image-container">
                    <MainImage/>
                </div>
            </div>
        </section>
    );
};
