import { useState, useEffect } from "react";
import Receita from "../../componentes/Receita/Receita";
import "./ListaReceitas.css";

const listaDeReceitasPadrao = [
    {
        id: 1,
        nome: "FRANGO ASSADO COM LIMÃO-SICILIANO E ERVAS",
        descricao: "Pode marcar esta receita para servir em dias de festa, almoço de família, reunião de amigos. É sucesso garantido. O limão e as ervas deixam o sabor especial e a técnica do preparo garante carne macia e suculenta.",
        imagem: "https://cdn.panelinha.com.br/receita/1557156324276-_MGL7602.jpg",
        categoria: "Prato Principal",
        tempo: "2 horas",
        porcoes: 6,
        ingredientes: [
            "1 frango inteiro (cerca de 1,7 kg)",
            "3 cebolas grandes",
            "1 cabeça de alho",
            "2 limões sicilianos",
            "1 colher (sopa) de flor do sal (ou sal grosso)",
            "1 ½ colher (chá) de páprica doce",
            "1 colher (chá) de açúcar mascavo",
            "2 ramos de louro",
            "4 ramos de alecrim",
            "pimenta-do-reino moída na hora a gosto",
            "azeite a gosto",
        ],
        preparacao: [
            "Lave e seque os limões sicilianos. Com um zester (ou ralador) faça raspas da casca de 1 limão. Caso esteja utilizando sal grosso, bata no pilão para quebrar em pedaços menores. Numa tigela pequena, misture o sal, a páprica, o açúcar mascavo, as raspas de limão e pimenta-do-reino moída na hora a gosto – essa é a marinada seca, que vai temperar o frango.",
            "Seque bem o frango com papel-toalha. Coloque o frango numa tigela grande (ou travessa) e tempere com a marinada seca – esfregue bem a mistura de sal com especiarias sobre toda a pele, entre a pele e a carne do peito e dentro da cavidade do frango. Tampe a tigela (ou cubra com filme) e leve à geladeira para marinar por 1 hora.",
            "Passado o tempo da marinada, preaqueça o forno a 220 ºC (temperatura alta). Retire o frango da geladeira por 30 minutos para perder o gelo enquanto o forno aquece.",
            "Descasque e corte a cebola em rodelas grossas de 1,5 cm. Regue o fundo de uma assadeira grande com um fio de azeite e distribua as rodelas de cebola, uma ao lado da outra, formando uma cama para o frango. Disponha sobre as cebolas 3 ramos de alecrim untados com azeite e 1 ramo de louro; coloque também na assadeira a cabeça de alho inteira. Regue tudo com um 1 colher (sopa) de azeite.",
            "Regue o frango com 2 colheres (sopa) de azeite e espalhe bem com as mãos. Corte em quartos o limão siciliano que você usou para fazer as raspas. Coloque os quartos de limão no interior da cavidade do frango, com 4 folhas de louro. Pique fino as folhas do ramo de alecrim restante e misture com 2 colheres (sopa) de azeite numa tigela pequena.",
            "Posicione o frango na tábua, com o peito para cima, e encaixe as pontas das asas sob as costas – assim elas não queimam enquanto assam. Corte um pedaço grande de barbante, segure uma ponta em cada mão e posicione o centro do fio na parte mais grossa do peito (onde estava o pescoço do frango). Passe o barbante sobre as coxas, rente à lateral do peito; dê uma volta por fora das pontas das coxas, cruze e amarre – dessa forma as coxas ficam mais rentes ao peito, fazendo com que o calor se distribua de maneira mais uniforme na carne. Puxe as pontas do barbante para baixo, dando uma volta ao redor da cauda do frango e amarre junto com as coxas – assim, a cavidade do frango fica mais fechadinha, o que deixa a carne mais úmida. ",
            "Disponha o frango na assadeira, sobre a cama de cebolas e ervas, com o peito para cima e leve ao forno para assar por 15 minutos, até a pele começar a ganhar um tom dourado. Diminua a temperatura do forno para 180 ºC (temperatura média) e deixe o frango por mais 55 minutos, até assar por completo e ficar com a pele bem dourada e crocante. Nos últimos 5 minutos, abra o forno com cuidado e espalhe o azeite com alecrim picado sobre a pele do frango para dar um sabor extra da erva sem queimar.\nPara conferir se o frango está assado: com a ponta de uma faca, faça um furinho na junção da sobrecoxa com o peito. Se o líquido sair sem sangue é sinal que está pronto, do contrário volte ao forno por mais alguns minutos. Se estiver usando um termômetro: a temperatura interna do frango deve estar com no mínimo 75 ºC.",
            "Retire o frango do forno e deixe descansar por 10 minutos antes de cortar. Não pule essa etapa: nesse tempo, os sucos da carne se redistribuem, o que garante um assado úmido e saboroso. Sirva a seguir com as cebolas, o alho assado e com limão cortado em gomos.",
        ]
    },
    {
        id: 2,
        nome: "Miojo",
        descricao: "Uma receita de macarrão instantâneo, popularmente conhecido como Miojo. Ideal para refeições velozes e pouco saudáveis.",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/40b73d623fe9fca98a847f2a59bba32f_XL.jpg",
        categoria: "Comida rápida",
        tempo: "3 minutos",
        porcoes: 1,
        ingredientes: [
            "1 pacote de miojo",
            "1 saquinho de tempero de miojo.",
            "400ml de água."
        ],
        preparacao: [
            "Abra o pacote de miojo e remova o saquinho de tempero.",
            "Jogue o macarrão dentro de uma panela.",
            "Acrescente 400ml de água e deixe no fogo baixo por 3 minutos.",
            "Jogue o miojo num escorredor para remover a água.",
            "Coloque o miojo num prato, acrescente o tempero e misture.",
            "Coma."
        ]
    },
    {
        id: 3,
        nome: "FILÉ DE SALMÃO AO FORNO FACÍLIMO",
        descricao: "Muito fácil de preparar e saudável",
        imagem: "https://img.itdg.com.br/tdg/images/recipes/000/087/779/318348/318348_original.jpg?mode=crop&width=710&height=400",
        categoria: "Peixe e Fruto do Mar",
        tempo: "50 MIN",
        porcoes: 2,
        ingredientes: [
          "500 g de filé de salmão",
         " Azeitonas fatiadas sem caroço",
         " Orégano",
          "3 colheres de sopa de Molho de soja (shoyu)",
          "Sal a gosto",
          "Azeite a gosto",
          "Limão",
          "Papel alumínio",
          "1/2 cebola fatiada"
        ],
        preparacao: [
          "Lave o salmão com suco de limão.",
         "Aqueça o azeite e adicione a cebola fatiada, deixando no fogo até que fique transparente. Reserve.",
          "Cubra uma assadeira com papel alumínio de maneira que a sobra dê para forrar todo o peixe.",
          "Sobre o papel alumínio na assadeira, coloque o peixe já temperado com sal, regue com azeite e shoyu.",
          "Decore com fatias de azeitonas e um pouco de orégano. Despeje a cebola por cima. Embrulhe com o papel alumínio, de maneira que o líquido não derrame quando começar a esquentar. Leve ao forno médio para assar por cerca de 30 minutos.","Sirva com legumes e salada verde."
        ],
    },
    {
        id: 4,
        nome: "Arroz Doce com Leite Condensado MOÇA e Canela",
        descricao: "Receita de Arroz Doce com Leite Condensado MOÇA e canela",
        imagem: "https://d1uz88p17r663j.cloudfront.net/resized/628141b8d7e7bf9b6b5195468484e4ec_arroz-doce-receitas-nestle_1200_600.jpg",
        categoria: "Sobremesa",
        tempo: "30 minutos",
        porcoes: 6,
        ingredientes: [
            "1 xícara (chá) de arroz",
            "1 litro de água fria",
            "1 Leite MOÇA® (lata ou caixinha) 395 g",
            "canela em pó para polvilhar",
        ],
        preparacao: [
            "Em uma panela grande, misture o arroz com 1 litro de água fria e leve ao fogo até ferver.",
            "Abaixe o fogo e deixe cozinhar até que fique macio.",
            "Junte o Leite MOÇA, mexa bem e cozinhe por cerca de 10 minutos, ou até engrossar.",
            "Sirva polvilhado com a canela em pó.",
        ]
    },
    {
        id: 5,
        nome: "Macarrão com carne moida",
        descricao: "Descrição da receita",
        categoria: "Massa",
        imagem: "https://comidinhasdochef.com/wp-content/uploads/2020/03/Macarr%C3%A3o-com-Carne-Mo%C3%ADda.jpg",
        tempo: "2 horas",
        porcoes: 6,
        ingredientes: [
            "2 dentes de alho amassados",
            "1 cebola grande picada",
            "1 lata de molho de tomate",
            "1 xícara de água",
            "sal, pimenta, louro a gosto",
            "1 kg de macarrão de sua, preferência",
            "1 kg de carne moída",
            "1 caixinha de creme de leite",
        ],
        preparacao: [
            "Carne",
            "Frite a cebola e o alho e acrescente a carne moída.",
            "Tempere a gosto e deixe cozinhar.",
            "Após cozida, acrescente o molho de tomate e a água e deixe ferver por alguns minutos.",
            "Macarrão:",
            "Cozinhe até ficar al dente.",
            "Após tudo pronto coloque o macarrão em um refratário grande.",
        ]
    }
];

function ListaReceitas() {

    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        const jaSalvouListaPadraoDeReceitas = localStorage.getItem("ja-salvou-receitas-padroes");
        if (jaSalvouListaPadraoDeReceitas == undefined || jaSalvouListaPadraoDeReceitas == "") {
            localStorage.setItem("receitas", JSON.stringify(listaDeReceitasPadrao));
            localStorage.setItem("ja-salvou-receitas-padroes", "true");
        }
    }, [])

    useEffect(() => {
        const receitasSalvas = localStorage.getItem("receitas");
        if (receitasSalvas !== undefined && receitasSalvas !== "") {
            const arrayDeObjetos = JSON.parse(receitasSalvas);
            setReceitas(arrayDeObjetos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("receitas", JSON.stringify(receitas));
    }, [receitas])

    return (
        <>
            <h1>Receitas</h1>
            <section id="lista-receitas">
                { receitas.map(receita => <Receita {...receita} key={receita.id} />) }
            </section>
        </>
    );
}

export default ListaReceitas;