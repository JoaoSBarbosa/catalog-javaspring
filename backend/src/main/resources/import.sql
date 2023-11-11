INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('João', 'Barbosa', 'joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_category (name, created_At) VALUES ('Livros', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Eletrônicos', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Computadores', NOW());

INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('O Senhor dos Anéis', 90.5, TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', 'Explore o épico mundo da Terra Média com "O Senhor dos Anéis". Immerja-se em uma história de coragem, amizade e a batalha entre o bem e o mal.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Smart TV', 2190.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Experimente o entretenimento como nunca antes com nossa moderna Smart TV. Visuais deslumbrantes, recursos inteligentes e possibilidades infinitas de entretenimento.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Macbook Pro', 1250.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Aumente sua produtividade com o Macbook Pro. Desempenho excepcional, design elegante e uma experiência de usuário incomparável.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Console Playstation 5', 3700.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Desfrute do carregamento do seu PS5, extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation.', 'https://uploaddeimagens.com.br/images/004/662/064/full/console-playstation-removebg-preview%281%29.png?1699663810');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Rails for Dummies', 100.99, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Inicie sua jornada no desenvolvimento web com "Rails for Dummies". Aprenda os conceitos essenciais de forma fácil e divertida.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Ex', 1350.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Mergulhe em uma experiência de jogo extraordinária com o PC Gamer Ex. Desempenho excepcional e gráficos impressionantes aguardam por você.', 'https://uploaddeimagens.com.br/images/004/662/061/full/Notebook-Er.jpg?1699663406');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Smartphone Samsung Galaxy S22', 4200.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Conheça o Galaxy S22 Ultra com o poder do Note. Sua estrutura de metal espelhado é simétrica, transmitindo uma sensação de equilíbrio verdadeiro.', 'https://uploaddeimagens.com.br/images/004/662/068/full/smartphone-samsung.jpg?1699664000');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Alfa', 1850.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Experimente o poder supremo com o PC Gamer Alfa. Desempenho excepcional, gráficos impressionantes e design premium.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/8-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Tera', 1950.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Desbrave mundos virtuais com o PC Gamer Tera. Desempenho surpreendente e qualidade incomparável.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/9-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Y', 1700.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Aprimore sua experiência de jogo com o PC Gamer Y. Desempenho excepcional e design arrojado.', 'https://uploaddeimagens.com.br/images/004/662/071/full/Pc-Gamer-G-fire-Htgw-139-Intel-Core-I5-10a-Gera-o-16GB-RAM-SSD-512GB-Nvme-500w-80-W10-_1666371496_gg-removebg-preview.png?1699664201');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Nitro', 1450.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Acelere sua experiência de jogo com o PC Gamer Nitro. Desempenho incrível em um pacote compacto.', 'https://uploaddeimagens.com.br/images/004/662/047/full/nitro.jpg?1699662485');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Console Nintendo Switch ', 2200.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Conheça o mais novo membro da família: O novo sistema apresenta uma tela OLED vibrante de 7 polegadas, um amplo suporte ajustável, um dock com uma porta LAN com fio, 64 GB de armazenamento interno e áudio aprimorado.', 'https://uploaddeimagens.com.br/images/004/662/070/full/console-nintendo-removebg-preview.png?1699664167');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Plus', 1350.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Eleve sua experiência de jogo com o PC Gamer Plus. Desempenho surpreendente e confiabilidade incomparável.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/13-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Hera', 2250.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Deusa do desempenho: conheça o PC Gamer Hera. Gráficos impressionantes e desempenho excepcional.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/14-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Weed', 2200.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Entre no mundo dos jogos com o PC Gamer Weed. Desempenho de alta qualidade e estilo inconfundível.', 'https://uploaddeimagens.com.br/images/004/662/062/full/Notebook-weed.jpg?1699663450');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Max', 2340.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Maximize sua experiência de jogo com o PC Gamer Max. Desempenho extraordinário e estilo incomparável.', 'https://uploaddeimagens.com.br/images/004/662/062/full/Notebook-weed.jpg?1699663450');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Turbo', 1280.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Turbocharge sua experiência de jogo com o PC Gamer Turbo. Desempenho excepcional em alta velocidade.', 'https://uploaddeimagens.com.br/images/004/662/058/full/PC-Gamer-Turbo.png?1699663054');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Hot', 1450.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Aqueça sua paixão pelos jogos com o PC Gamer Hot. Desempenho impressionante em um pacote quente.', 'https://uploaddeimagens.com.br/images/004/662/054/full/PC-Gamer-hot.jpg?1699663017');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Ez', 1750.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Simplesmente fácil: conheça o PC Gamer Ez. Desempenho excepcional em um pacote fácil de usar.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/19-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Tr', 1650.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Entre no ritmo do jogo com o PC Gamer Tr. Desempenho incrível e estilo inconfundível.', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/20-big.jpg');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PLACA DE VÍDEO INNO3D SUPERFRAME', 1680.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'A poderosa placa GeForce RTX 3060TWIN X2 acelera seu trabalho com incríveis melhorias no desempenho. Esteja você fazendo edição de vídeo, animação 3D, fotografia, design gráfico, visualização arquitetônica ou transmissão, você pode economizar muito tempo.', 'https://uploaddeimagens.com.br/images/004/662/080/full/placa-de-video-nvidia-geforce--removebg-preview%281%29.png?1699664406');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Er', 1850.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Explore novas dimensões de jogos com o PC Gamer Er. Desempenho extraordinário e design inovador.', 'https://uploaddeimagens.com.br/images/004/662/053/full/Notebook-Er.jpg?1699662988');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Min', 2250.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Maximize sua diversão com o PC Gamer Min. Desempenho máximo em um pacote mínimo.', 'https://uploaddeimagens.com.br/images/004/662/057/full/lorenzo-herrera-yP89apz2TAA-unsplash.jpg?1699663045');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Boo', 2350.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Mergulhe no mundo dos jogos com o PC Gamer Boo. Desempenho assustadoramente incrível em cada jogada.', 'https://uploaddeimagens.com.br/images/004/662/060/full/pc-gamer-boo-removebg-preview.png?1699663391');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('PC Gamer Foo', 4170.0, TIMESTAMP WITH TIME ZONE '2020-07-14T10:00:00Z', 'Alcance o próximo nível de jogos com o PC Gamer Foo. Desempenho excepcional e estilo incomparável em cada vitória.', 'https://uploaddeimagens.com.br/images/004/662/059/full/pc-gamer-foo.jpg?1699663089');


INSERT INTO tb_product_category (product_id, category_id) VALUES (1, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (2, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (2, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (3, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (4, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (5, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (6, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (7, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (8, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (9, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (10, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (11, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (12, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (13, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (14, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (15, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (16, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (17, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (18, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (19, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (20, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (21, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (22, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (23, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (24, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (25, 3);


