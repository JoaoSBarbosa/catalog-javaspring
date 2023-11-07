import "./styles.css";
import {ReactComponent as ArrowIcon} from "assets/images/Seta.svg";
import {ProductPrice} from "../../components/ProductPrice";

export const ProductDetails = () => {
    return (
        <div className={"product-details-container"}>
            <h1>Produto detalhado</h1>
            <div className={"product-details-card"}>
                <div className={"product-details-go-back"}>
                    <ArrowIcon/><h2>voltar</h2>
                </div>
                <div className={"row"}>
                    <div className={"col-xl-6"}>

                        <div className={"product-image-container"}>
                            <img
                                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                                alt=""/>
                        </div>
                        <div className={"product-name-price-container"}>
                            <h1>TV LED 55 Polegadas</h1>
                            <ProductPrice price={3500}/>
                        </div>

                    </div>

                    <div className={"col-xl-6"}>
                        <div className={"product-description-container"}>
                            <h2>Descrição do produto</h2>
                            <p>Apresentamos a mais recente inovação em entretenimento doméstico: a TV Ultra HD. Com uma
                                resolução deslumbrante e cores vivas, esta TV redefine a forma como você experimenta
                                seus filmes, programas de TV e jogos favoritos. Sua tecnologia avançada proporciona
                                detalhes nítidos e uma profundidade de contraste impressionante, proporcionando uma
                                visão mais realista do que nunca. Com opções de conectividade de última geração, você
                                pode transmitir conteúdo, acessar aplicativos e até mesmo espelhar seus dispositivos
                                para uma experiência verdadeiramente integrada. Eleve o nível da sua experiência de
                                entretenimento com a nova TV Ultra HD e mergulhe em um mundo de imagens deslumbrantes e
                                som imersivo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}