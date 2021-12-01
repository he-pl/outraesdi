var config = {
    style: 'mapbox://styles/pammarques/ckwlb128e02fu14qizhz9i9mt',
    accessToken: 'pk.eyJ1IjoicGFtbWFycXVlcyIsImEiOiJja3dsNGFmajcxeHpnMnVtcHRwNG9oczlnIn0.88RhWVZ1tZp3H9-pk4o92g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Outra ESDI, Outros Caminhos',
    subtitle: 'Especulações entre a ESDI, a cidade e a floresta',
    byline: 'Um mapa interativo por Pamela Marques',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Cartografia sensível',
            description: 'O desafio de cartografar com um olhar cuidadoso o caminho entre as ESDI em ruínas e a Esdi provisória em Petrópolis parte de um sentimento pessoal, da necessidade de também fazer parte de uma comunidade para além da questão institucional (afinal, um número de matricula eu tenho). Fabular e contar histórias se torna o jeito escolhido para tentar estreitar nossos laços e pensar uma Outra universidade neste mundo em colapso (ou neste mundo de mundos colapsados). Nessa proposta, trago vários parceiros comigo, muitas vezes sem mencionar ou saber como concretizar a menção. Isso porque seguimos, sem questionar, a mesma lógica industrial: engolimos leituras, consumimos autores. Desejo Outro tempo, Outro espaço, Outro espaço-tempo e não seria diferente para a minha formação intelectual. À deriva, portanto, me permiti coletar vestígios e registrar amenidades para contar outras histórias. E no desvio, compartilho o conteúdo da cesta dessa aventura.',
            location: {
                center: [-43.18544, -22.50083],
                zoom: 14.81,
                pitch: 60.00,
                bearing: -16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ]
        },
        {
            id: 'outraesdi01',
            alignment: 'left',
            hidden: false,
            title: 'ESDI em ruínas',
            image: './images/outraesdi01.jpg',
            description: 'Dizem que é preciso deixar o velho ir embora para o novo vir. Encontrar essa ESDI em ruínas é fruir da beleza do devir. Gosto de pensar também que talvez seja a reinvindicação da floresta sobre este lugar na cidade: precisamos negociar a nossa coexistência ao gosto da diplomacia de Barão do Rio Branco. Ou, sem romantizações, é apenas o reflexo do descaso do poder público. A verdade é que, muito provável, sejam todas essas alternativas emaranhadas. Mas nem a história da ESDI em Petrópolis, nem seu início de precipitação, para mim, começam aqui, nesta edificação encantada (adoro pensar que essas letras desalinhadas do endereço no muro sejam pura provocação). Falo com a propriedade de quem acompanhou com a distância que me foi permitida a chegada da instituição na cidade. Lembro da felicidade no meu rosto quando anunciaram: a ESDI vai se fixar em um dos espaços mais carentes e sociodiversos, o Bairro Independência. E não só isso, no Brizolão, o CIEP de Darcy, Brizola e de toda uma camada social que tem o acesso dificultado no ensino superior público por uma classe que sempre representou a universidade. É a UERJ comprovando a sua fama de luta social, eu vibrava por dentro! Não durou muito toda essa excitação. A condição específica da ESDI, do seu berço elitista, europeu, modernista e colonial, conseguiu manipular para estar num lugar mais próximo do que julga ser “à sua altura”, sem precisar afirmar que isso seria uma questão. Só não imaginava que a rebeldia do tempo e da floresta não estavam de acordo!',
            location: {
                center: [-43.18247, -22.50135],
                zoom: 18.24,
                pitch: 60.00,
                bearing: -32.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: .8
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi02',
            alignment: 'left',
            hidden: false,
            title: 'A natureza abrindo espaço',
            image: './images/outraesdi02.jpg',
            description: 'Toda boa história de ascensão do homem tem que ter conflito. A ESDI em Petrópolis foi parar na antiga casa do senhor especializado em solucionar problemas geográficos e políticos! Será que posso ser um pouco atrevida e dizer na casa do designer de fronteiras do Brasil na monarquia? Um nobre arquiteto de divisas? Aliás, essa questão me faz pensar que a contradição, as delimitações e os conflitos são marcas de nascença da ESDI em Petrópolis. Até aqui não havia adicionado um predicado muito importante: DAU, de arquitetura e urbanismo. A expectativa de como ia se desdobrar a questão design x arquitetura era grande, pelo menos da minha parte. Por fim, essa possível desavença ficou secundária quando o conflito se deu entre a natureza e a cidade, através da casa. Será que a floresta adentrando o muro, o telhado, as paredes, está dizendo: foram em torno de 900 mil quilômetros quadrados, foi o Acre ... nós acompanhamos e observamos o processo. Se essa é a forma de linguagem e atitude que precisamos adotar para sermos vistos, nos comunicar e negociar, assim será! Às vezes, infelizmente, é preciso usar das ferramentas dos “senhores”, sabendo, claro, que não será a ruptura profunda para outros caminhos, mas a necessária luta contra aqueles que só reconhecem a sua verdade e a impõe a qualquer custo.',
            location: {
                center: [-43.18247, -22.50135],
                zoom: 18.24,
                pitch: 60.00,
                bearing: -32.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: .8
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi03',
            alignment: 'left',
            hidden: false,
            title: 'Rebelión de los carpinchos',
            image: './images/outraesdi03.jpg',
            description: '<i>¡Atención! La rebelión de los carpinchos — el inicio de la revolución latinoamericana, la formación de Nuestra America de Martí — se quedó reconocida después del enfrentamiento en Nordelta, Buenos Aires.</i> Bem, pelo menos, a intentona da América Latina está se estruturando e a incursão não apenas nesse condomínio de luxo, que parece ser a reprodução arquitetônica de alguma parte da França (ah, a velha lógica colonial!). No Brasil, temos notícias também do Lago Paranoá, o paraíso aristocrático na modernista, concreta e utópica Brasília. Um levante com viés feminista na Pampulha, em Belo Horizonte, depois da implementação de um projeto polêmico de contenção. E não menos importante, a rua Barão do Rio Branco (em Petrópolis, que se diz ser a única cidade imperial e latino-americana), onde fica (!) a casa do Barão do Rio Branco (que é a ESDI em ruínas), já foi tomada pela acalorada e controversa discussão: da Serra ao poder — contam aqueles que tem a “habilidade de cruzar deliberadamente as barreiras corporais entre as espécies e adotar a perspectiva de subjetividades ‘estrangeiras’” e que ficam juntos na margem esquerda do Rio Piabanha, que divide a rua em dois lados. Dizem também que o propósito de tomar como território justamente a curva de frente à ESDI em ruínas é simbólica. Porque a revolução pretendida não é somente política, é de imaginário. É da possibilidade de imaginar e construir mundos, vários mundos.',
            location: {
                center: [-43.18270, -22.50234],
                zoom: 18.24,
                pitch: 60.00,
                bearing: -32.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: .8
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi04',
            alignment: 'left',
            hidden: false,
            title: 'Ciclo da vida',
            image: './images/outraesdi04.jpg',
            description: 'Ando mais um pouco observando a margem do rio e me pego em dúvida: Será que a ESDI em ruínas está na verdade reivindicando que respeitem seu processo? Afinal, mais uma vez, “dizem que é preciso deixar o velho ir embora para o novo vir” (apesar dessa ESDI ter curiosamente nascido velha). Temos muitas marcas coloniais, algumas que certamente ainda nem conseguimos verbalizar, tornar consciente ou concreta. Me permitindo falhar a memória, lembro que li recentemente Todorov, assim como também o diário de Colombo e mais alguns autores relacionados e é dito provavelmente por um deles que os colonizadores não quiseram sequer conhecer o povo originário das terras invadidas. Para eles, sempre fomos uma imagem daquilo que desejavam. O controle, do outro e de tudo, se torna ordem por essas terras com a imposição da modernidade. Krenak, com um certo receio, disse uma vez que o controle sobre a vida também deveria ser colocado em pauta. Essa tentativa de “eternidade” deveria ser questionada, deveríamos aprender a aceitar inclusive o ciclo da vida. Ainda tenho muita dificuldade para conseguir elaborar o que eu acredito ser os limites desta proposta. Mas definitivamente devemos intensificar cada vez mais o debate na esfera acadêmica sobre o controle (a própria universidade pode se tornar um dispositivo, há quem afirme com firmeza que é) e sobre a vida; e também sobre o que significa a produção e a reprodução da vida.',
            location: {
                center: [-43.18293, -22.50361],
                zoom: 18.58,
                pitch: 60.00,
                bearing: -32.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: .8
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi05',
            alignment: 'left',
            hidden: false,
            title: 'Umidade urbana',
            image: './images/outraesdi05.jpg',
            description: 'Petrópolis é muito mais da Floresta do que um dia foi de Pedro. E é onde estou agora, junto com as Outras ESDIs. Cada vez mais próxima do meio do caminho, entre meu ponto de partida e meu ponto de chegada, percebo que a floresta foi se tornando por “força maior” (obviamente) mais tímida, porém sempre se faz presente de alguma forma. A obstinação é tamanha que nem o concreto é impedimento, e é graças a essa qualidade que podemos reconhecê-la de um outro jeito pela cidade. Ter a floresta por perto é estar com a chama da esperança sempre acessa. (em desenvolvimento)',
            location: {
                center: [-43.18223, -22.50376],
                zoom: 18.58,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: .8
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi06',
            alignment: 'left',
            hidden: false,
            title: 'Resistência na fresta',
            image: './images/outraesdi06.jpg',
            description: 'Concordo plenamente com Luiz Antônio Simas e com Milton Santos: que a vida acontece nas frestas e que a cidade é o lugar onde os excluídos resistem e se reinventam. Tão antropocentristas que somos, muitas vezes nem percebemos que os excluídos não são apenas os humanos subalternizados, mas também todas as outras formas de vida e não-vida que coexistem conosco. Como produzir a vida, habilidade básica desenvolvida e aprimorada nas ESDIs, sem perder de vista a condição de interdependência radical? (em desenvolvimento)',
            location: {
                center: [-43.18180, -22.50457],
                zoom: 18.58,
                pitch: 60.00,
                bearing: 9.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: .8
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],        },
        {
            id: 'outraesdi07',
            alignment: 'left',
            hidden: false,
            title: 'Reencantar',
            image: './images/outraesdi07.jpg',
            description: 'Se existe uma característica inegável da floresta é a sua capacidade de tornar à vida, de encantar e ser encantada. Talvez o desejo do homem de controle venha da realização de sua pequenez frente a essa constatação. Quem mexe na terra e observa a natureza sabe que o imprevisível, para o bem ou para mal, faz parte do jogo. Você pode separar a semente, colocar no substrato preparado, regar na quantidade certa, expor à luz ideal e ainda assim, não brotar. Ao mesmo tempo que você pode arrancar a planta pela raiz e ela incrivelmente renascer por um pequeno pedaço esquecido. Ou como este toco que apesar da sua condenação, reviveu. Como o espontâneo, o imprevisível e o inesperado (como método e condição) é trabalhado nesta ESDI provisória que estamos chegando ao encontro e de encontro? (em desenvolvimento)',
            location: {
                center: [-43.18027, -22.50508],
                zoom: 18.60,
                pitch: 60.00,
                bearing: 24.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: .8
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi08',
            alignment: 'left',
            hidden: false,
            title: 'Território',
            image: './images/outraesdi08.jpg',
            description: 'O pixo como marcação de território numa sociedade estratificada. A rua Ipiranga como o metro quadrado mais caro da cidade. A comunalidade como território na América Latina "surge como um espaço, um tecido-mundo de resistência e reexistência (Escobar). “O território não é apenas o resultado da superposição de um conjunto de sistemas naturais e um conjunto de sistemas de coisas criadas pelo homem. O território é o chão e mais a população, isto é, uma identidade, o fato e o sentimento de pertencer àquilo que nos pertence.” (Santos) Como podemos falar de comunalidade na rua mais elitista de Petrópolis, que é onde está a ESDI provisória? Por que ela está aqui? Ela quis estar aqui? A parte elitista da escola conseguiu reverter a situação de rebeldia do tempo e da floresta? (em desenvolvimento)',
            location: {
            center: [-43.17900, -22.50482],
            zoom: 18.94,
            pitch: 54.50,
            bearing: 1.10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: .8
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi09',
            alignment: 'left',
            hidden: false,
            title: 'Semente no chão',
            image: './images/outraesdi09.jpg',
            description: 'Se tenho uma memória marcante de infância é a de catar sementes pelo caminho do Parque Cremerie até a minha casa, no limite entre o bairro Cremerie e o Independência. Umas sementinhas cinzas, que eu jurava chamar lágrimas de Cristo até a pouco quando descobri que na verdade são lágrimas de Nossa Senhora. Ainda assim, pranto cristão. Fazíamos lindas pulseiras e colares que tinham uma duração naturalmente limitada. Já na adolescência catava umas vagens duras que não faço ideia do nome, mas ainda estão pelo centro da cidade. Petrópolis tem disso, sementes espalhadas pelo chão de terra ou concreto, a espera de seu destino: brotar, morrer ou virar bijuteria. O que a ESDI provisória faz com suas sementes? (em desenvolvimento)',
            location: {
            center: [-43.17648, -22.50410],
            zoom: 18.94,
            pitch: 54.50,
            bearing: 1.10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: .8
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
        {
            id: 'outraesdi10',
            alignment: 'left',
            hidden: false,
            title: 'ESDI provisória',
            image: './images/outraesdi10.jpg',
            description: 'Na chegada ao meu destino, uma mistura de admiração e hesitação. <i>“A imagem de nós mesmos que não nos reconhecemos.” </i>(Cançado; Viveiros de Castro). Será que a ESDI provisória vai ser tão provisória quanto a ESDI do Rio de Janeiro, a ESDI mesma? Será que ela já está também no caminho de questionamento das estruturas coloniais como a parte que conheço da ESDI mesma? Um grupo de pessoas passam por mim e ficam estarrecidos que tem uma UERJ em Petrópolis! Qual é o estreitamento de laços entre a cidade, a ESDI e a floresta? A casa é a edificação mais alta da rua mais cara da cidade, espero que a intenção não tenha sido provar o “estar à sua altura” ou olhar de cima para baixo a cidade, ou ainda, afrontar a enorme montanha florestada que fica à sua frente. Observem que a floresta também está abrindo espaço por aqui (fazer alusão as frestas, arrebentações no concreto)! Será que este mundo acadêmico é que, na verdade, está colapsando? (em desenvolvimento)',
            location: {
                center: [-43.17510, -22.50363],
                zoom: 18.51,
                pitch: 54.50,
                bearing: 1.10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'oem01',
                    opacity: 0
                },
                {
                    layer: 'oem02',
                    opacity: 0
                },
                {
                    layer: 'oem03',
                    opacity: 0
                },
                {
                    layer: 'oem04',
                    opacity: 0
                },
                {
                    layer: 'oem05',
                    opacity: 0
                },
                {
                    layer: 'oem06',
                    opacity: 0
                },
                {
                    layer: 'oem07',
                    opacity: 0
                },
                {
                    layer: 'oem08',
                    opacity: 0
                },
                {
                    layer: 'oem09',
                    opacity: 0
                },
                {
                    layer: 'oem10',
                    opacity: 0
                }

            ],
        },
    ]
};
