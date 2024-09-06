

const MENU = {
    'lanches': [
    {
        id: 'tropeiro',
        img: '../img/cardapio/burgers/tropeiro.jpg',
        nome: 'X-Tropeiro',
        ingredientes: ['Pão artesanal', 'Hambúrguer de carne', 'Queijo minas', 'Couve crocante', 'Bacon', 'Molho de feijão tropeiro'],
        preco: 19.99
    },
    {
        id: 'cabral',
        img: '../img/cardapio/burgers/cabral.jpg',
        nome: 'X-Cabral',
        ingredientes: ['Pão com gergelim', 'Hambúrguer de picanha', 'Queijo coalho', 'Alface americana', 'Cebola roxa', 'Maionese de alho'],
        preco: 21.99
    },
    {
        id: 'carioca',
        img: '../img/cardapio/burgers/carioca.jpg',
        nome: 'X-Carioca',
        ingredientes: ['Pão francês', 'Hambúrguer de carne', 'Queijo prato', 'Tomate', 'Ovo frito', 'Molho de ervas'],
        preco: 17.99
    },
    {
        id: 'nordestino',
        img: '../img/cardapio/burgers/nordestino.jpg',
        nome: 'X-Nordestino',
        ingredientes: ['Pão de milho', 'Hambúrguer de carne de sol', 'Queijo coalho', 'Manteiga de garrafa', 'Tomate', 'Rúcula'],
        preco: 22.99
    },
    {
        id: 'sertanejo',
        img: '../img/cardapio/burgers/sertanejo.jpg',
        nome: 'X-Sertanejo',
        ingredientes: ['Pão com gergelim', 'Hambúrguer de frango', 'Queijo mussarela', 'Alface', 'Molho de mostarda e mel'],
        preco: 16.99
    },
    {
        id: 'mineiro',
        img: '../img/cardapio/burgers/mineiro.jpg',
        nome: 'X-Mineiro',
        ingredientes: ['Pão de queijo', 'Hambúrguer de carne', 'Queijo minas', 'Tomate', 'Couve refogada', 'Maionese de alho'],
        preco: 20.99
    },
    {
        id: 'japa',
        img: '../img/cardapio/burgers/japa.jpg',
        nome: 'X-Japa',
        ingredientes: ['Pão brioche', 'Hambúrguer de salmão', 'Cream cheese', 'Cebolinha', 'Gengibre', 'Molho tarê'],
        preco: 23.99
    },
    {
        id: 'caipira',
        img: '../img/cardapio/burgers/caipira.jpg',
        nome: 'X-Caipira',
        ingredientes: ['Pão integral', 'Hambúrguer de frango', 'Queijo prato', 'Tomate', 'Alface', 'Maionese caseira'],
        preco: 18.99
    },
    {
        id: 'americano',
        img: '../img/cardapio/burgers/americano.jpg',
        nome: 'X-Americano',
        ingredientes: ['Pão com gergelim', 'Hambúrguer de carne', 'Queijo cheddar', 'Bacon', 'Picles', 'Molho barbecue'],
        preco: 19.99
    },
    {
        id: 'baiano',
        img: '../img/cardapio/burgers/baiano.jpg',
        nome: 'X-Baiano',
        ingredientes: ['Pão de mandioca', 'Hambúrguer de carne', 'Queijo coalho', 'Tomate', 'Vinagrete', 'Molho de pimenta'],
        preco: 21.99
    },
    {
        id: 'gauderio',
        img: '../img/cardapio/burgers/gaudério.jpg',
        nome: 'X-Gaudério',
        ingredientes: ['Pão ciabatta', 'Hambúrguer de costela', 'Queijo provolone', 'Cebola roxa', 'Alface', 'Maionese temperada'],
        preco: 22.99
    },
    {
        id: 'urbano',
        img: '../img/cardapio/burgers/urbano.jpg',
        nome: 'X-Urbano',
        ingredientes: ['Pão australiano', 'Hambúrguer de carne', 'Queijo suíço', 'Cogumelos', 'Rúcula', 'Molho de iogurte'],
        preco: 24.99
    }
],

    'porcoes': [
    {
        id: 'fritas-gourmet',
        img: '../img/cardapio/fritas-gourmet.jpg',
        nome: 'Fritas Gourmet',
        ingredientes: ['Batata frita', 'Queijo parmesão', 'Ervas finas', 'Maionese trufada'],
        preco: 14.99
    },
    {
        id: 'onion-classic',
        img: '../img/cardapio/onion-classic.jpg',
        nome: 'Onion Classic',
        ingredientes: ['Anéis de cebola empanados', 'Molho barbecue', 'Maionese de alho'],
        preco: 12.99
    },
    {
        id: 'mandioca-crocante',
        img: '../img/cardapio/mandioca-crocante.jpg',
        nome: 'Mandioca Crocante',
        ingredientes: ['Mandioca frita', 'Queijo ralado', 'Sal grosso', 'Molho de alho'],
        preco: 13.99
    },
    {
        id: 'mini-pastel-mix',
        img: '../img/cardapio/mini-pastel.jpg',
        nome: 'Mini Pastel Mix',
        ingredientes: ['Mini pastéis variados', 'Carne', 'Queijo', 'Palmito', 'Molho de pimenta'],
        preco: 16.99
    },
    {
        id: 'frango-crocante',
        img: '../img/cardapio/frango-crocante.jpg',
        nome: 'Frango Crocante',
        ingredientes: ['Tirinhas de frango empanado', 'Molho barbecue', 'Maionese temperada'],
        preco: 18.99
    },
    {
        id: 'polenta-dourada',
        img: '../img/cardapio/polenta.jpg',
        nome: 'Polenta Dourada',
        ingredientes: ['Polenta frita', 'Queijo parmesão', 'Ervas finas', 'Molho de iogurte'],
        preco: 15.99
    },
    {
        id: 'queijo-coalho',
        img: '../img/cardapio/queijo-coalho.jpg',
        nome: 'Queijo Coalho na Chapa',
        ingredientes: ['Espetos de queijo coalho', 'Melado de cana', 'Orégano'],
        preco: 19.99
    },
    {
        id: 'linguica-acebolada',
        img: '../img/cardapio/linguica-acebolada.jpg',
        nome: 'Linguiça Acebolada',
        ingredientes: ['Linguiça suína grelhada', 'Cebola caramelizada', 'Farofa crocante'],
        preco: 22.99
    },
    {
        id: 'pao-alho-supreme',
        img: '../img/cardapio/pao-alho.jpg',
        nome: 'Pão de Alho Supreme',
        ingredientes: ['Pão de alho gratinado', 'Queijo muçarela', 'Orégano', 'Azeite de oliva'],
        preco: 10.99
    },
    {
        id: 'batata-rustica',
        img: '../img/cardapio/batata-rustica.jpg',
        nome: 'Batata Rústica',
        ingredientes: ['Batata rústica', 'Alecrim', 'Sal grosso', 'Molho de mostarda e mel'],
        preco: 17.99
    },
    {
        id: 'nacho-fusion',
        img: '../img/cardapio/nacho-fusion.jpg',
        nome: 'Nacho Fusion',
        ingredientes: ['Nachos crocantes', 'Queijo cheddar derretido', 'Jalapeños', 'Guacamole'],
        preco: 23.99
    },
    {
        id: 'salada-grega',
        img: '../img/cardapio/salada-grecia.jpg',
        nome: 'Salada à Grega',
        ingredientes: ['Tomate cereja', 'Pepino', 'Azeitonas', 'Queijo feta', 'Molho grego'],
        preco: 21.99
    }
],

    'pizzas': [
    {
        id: 'pizza-toscana',
        img: '../img/cardapio/pizzas/pizza-toscana.jpg',
        nome: 'Pizza Toscana',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Calabresa', 'Cebola roxa', 'Azeitonas pretas', 'Orégano'],
        preco: 34.99
    },
    {
        id: 'pizza-camponesa',
        img: '../img/cardapio/pizzas/pizza-camponesa.jpg',
        nome: 'Pizza Camponesa',
        ingredientes: ['Molho de tomate', 'Queijo parmesão', 'Frango desfiado', 'Milho verde', 'Catupiry', 'Cebolinha'],
        preco: 37.99
    },
    {
        id: 'pizza-baiana',
        img: '../img/cardapio/pizzas/pizza-baiana.jpg',
        nome: 'Pizza Baiana',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Calabresa apimentada', 'Pimenta dedo-de-moça', 'Cebola', 'Orégano'],
        preco: 36.99
    },
    {
        id: 'pizza-carioca',
        img: '../img/cardapio/pizzas/pizza-carioca.jpg',
        nome: 'Pizza Carioca',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Presunto', 'Ovo cozido', 'Azeitonas', 'Orégano'],
        preco: 33.99
    },
    {
        id: 'pizza-mineira',
        img: '../img/cardapio/pizzas/pizza-mineira.jpg',
        nome: 'Pizza Mineira',
        ingredientes: ['Molho de tomate', 'Queijo minas', 'Linguiça artesanal', 'Cebola caramelizada', 'Couve refogada', 'Orégano'],
        preco: 38.99
    },
    {
        id: 'pizza-nordestina',
        img: '../img/cardapio/pizzas/pizza-nordestina.jpg',
        nome: 'Pizza Nordestina',
        ingredientes: ['Molho de tomate', 'Queijo coalho', 'Carne de sol', 'Banana-da-terra', 'Cebolinha', 'Molho de pimenta'],
        preco: 39.99
    },
    {
        id: 'pizza-sertaneja',
        img: '../img/cardapio/pizzas/pizza-sertaneja.jpg',
        nome: 'Pizza Sertaneja',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Carne seca', 'Tomate seco', 'Catupiry', 'Orégano'],
        preco: 37.99
    },
    {
        id: 'pizza-gaucha',
        img: '../img/cardapio/pizzas/pizza-gaucha.jpg',
        nome: 'Pizza Gaúcha',
        ingredientes: ['Molho de tomate', 'Queijo provolone', 'Costela desfiada', 'Cebola roxa', 'Orégano', 'Chimichurri'],
        preco: 41.99
    },
    {
        id: 'pizza-portuguesa',
        img: '../img/cardapio/pizzas/pizza-portuguesa.jpg',
        nome: 'Pizza Portuguesa',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Presunto', 'Ovo cozido', 'Cebola', 'Azeitonas pretas', 'Orégano'],
        preco: 35.99
    },
    {
        id: 'pizza-quatro-queijos',
        img: '../img/cardapio/pizzas/pizza-quatro-queijos.jpg',
        nome: 'Pizza Quatro Queijos',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Queijo gorgonzola', 'Queijo provolone', 'Queijo parmesão', 'Orégano'],
        preco: 39.99
    },
    {
        id: 'pizza-marguerita',
        img: '../img/cardapio/pizzas/pizza-marguerita.jpg',
        nome: 'Pizza Marguerita',
        ingredientes: ['Molho de tomate', 'Queijo mussarela', 'Tomate', 'Manjericão', 'Azeite de oliva', 'Orégano'],
        preco: 32.99
    },
    {
        id: 'pizza-calabresa',
        img: '../img/cardapio/pizzas/pizza-calabresa.jpg',
        nome: 'Pizza Calabresa',
        ingredientes:['Molho de tomate', 'Queijo mussarela', 'Calabresa', 'Cebola', 'Azeitonas', 'Orégano'],
        preco: 34.99
    }
],
   
    'sobremesas': [
    {
        id: 'petit-gateau-supremo',
        img: '../img/cardapio/petit-gateau.jpg',
        nome: 'Petit Gateau Supremo',
        ingredientes: ['Bolo de chocolate', 'Sorvete de creme', 'Calda de chocolate', 'Avelãs trituradas'],
        preco: 18.99
    },
    {
        id: 'torta-holandesa-classica',
        img: '../img/cardapio/torta-holandesa.jpg',
        nome: 'Torta Holandesa Clássica',
        ingredientes: ['Base de biscoito', 'Recheio de creme de baunilha', 'Cobertura de ganache de chocolate', 'Chantilly'],
        preco: 21.99
    },
    {
        id: 'mousse-maracuja-tropical',
        img: '../img/cardapio/mousse-maracuja.jpg',
        nome: 'Mousse de Maracujá Tropical',
        ingredientes: ['Mousse de maracujá', 'Calda de maracujá', 'Raspas de limão', 'Folhas de hortelã'],
        preco: 15.99
    },
    {
        id: 'cheesecake-frutas-vermelhas',
        img: '../img/cardapio/cheesecake-frutas-vermelhas.jpg',
        nome: 'Cheesecake Frutas Vermelhas',
        ingredientes: ['Base de biscoito', 'Recheio de cream cheese', 'Calda de frutas vermelhas', 'Amoras e morangos'],
        preco: 22.99
    },
    {
        id: 'pudim-leite-perfeito',
        img: '../img/cardapio/pudim-leite-condensado.jpg',
        nome: 'Pudim de Leite Perfeito',
        ingredientes: ['Leite condensado', 'Caramelo', 'Baunilha', 'Raspas de laranja'],
        preco: 13.99
    },
    {
        id: 'brigadeiro-gourmet',
        img: '../img/cardapio/brigadeiro-gourmet.jpg',
        nome: 'Brigadeiro Gourmet',
        ingredientes: ['Chocolate belga', 'Granulado de chocolate belga', 'Leite condensado', 'Cacau em pó'],
        preco: 11.99
    },
    {
        id: 'tiramisu-classico',
        img: '../img/cardapio/tiramisu.jpg',
        nome: 'Tiramisù Clássico',
        ingredientes: ['Biscoito champagne', 'Café espresso', 'Creme mascarpone', 'Cacau em pó', 'Licor de café'],
        preco: 24.99
    },
    {
        id: 'milkshake-oreo',
        img: '../img/cardapio/milkshake-oreo.jpg',
        nome: 'Milkshake de Oreo',
        ingredientes: ['Sorvete de baunilha', 'Biscoito Oreo', 'Chantilly', 'Calda de chocolate', 'Oreo triturado'],
        preco: 17.99
    },
    {
        id: 'creme-papaya',
        img: '../img/cardapio/creme-papaya.jpg',
        nome: 'Creme de Papaya',
        ingredientes: ['Mamão papaya', 'Sorvete de creme', 'Licor de cassis', 'Folhas de hortelã'],
        preco: 19.99
    },
    {
        id: 'bolo-chocolate-intenso',
        img: '../img/cardapio/bolo-chocolate.jpg',
        nome: 'Bolo de Chocolate Intenso',
        ingredientes: ['Bolo de chocolate', 'Ganache de chocolate', 'Morango', 'Raspas de chocolate meio amargo'],
        preco: 20.99
    },
    {
        id: 'crepe-nutella',
        img: '../img/cardapio/crepe-doce.jpg',
        nome: 'Crepe de Nutella',
        ingredientes: ['Massa de crepe', 'Nutella', 'Banana', 'Sorvete de creme', 'Avelãs trituradas'],
        preco: 18.99
    },
    {
        id: 'pave-sonho',
        img: '../img/cardapio/pave.jpg',
        nome: 'Pavê de Sonho',
        ingredientes: ['Biscoito champagne', 'Camadas de creme de chocolate', 'Camadas de creme de baunilha', 'Granulado de chocolate'],
        preco: 16.99
    }
],
   
    'bebidas': [
    {
        id: 'agua-mineral',
        img: '../img/cardapio/agua-mineral.jpg',
        nome: 'Água Mineral',
        tipo: 'Água',
        preco: 4.99
    },
    {
        id: 'agua-com-gas',
        img: '../img/cardapio/agua-com-gas.jpg',
        nome: 'Água com Gás',
        tipo: 'Água',
        preco: 5.49
    },
    {
        id: 'coca-cola',
        img: '../img/cardapio/coca-cola.jpg',
        nome: 'Coca-Cola',
        tipo: 'Refrigerante',
        preco: 7.99
    },
    {
        id: 'guarana-antarctica',
        img: '../img/cardapio/guarana-antartica.jpg',
        nome: 'Guaraná Antarctica',
        tipo: 'Refrigerante',
        preco: 7.99
    },
    {
        id: 'sprite',
        img: '../img/cardapio/sprite.jpg',
        nome: 'Sprite',
        tipo: 'Refrigerante',
        preco: 7.99
    },
    {
        id: 'suco-laranja-natural',
        img: '../img/cardapio/suco-laranja.jpg',
        nome: 'Suco de Laranja Natural',
        tipo: 'Suco',
        preco: 9.99
    },
    {
        id: 'suco-uva-integral',
        img: '../img/cardapio/suco-uva.jpg',
        nome: 'Suco de Uva Integral',
        tipo: 'Suco',
        preco: 10.99
    },
    {
        id: 'suco-manga-natural',
        img: '../img/cardapio/suco-manga.jpg',
        nome: 'Suco de Manga Natural',
        tipo: 'Suco',
        preco: 9.99
    },
    {
        id: 'cerveja-heineken',
        img: '../img/cardapio/cerveja-heineken.jpg',
        nome: 'Cerveja Heineken',
        tipo: 'Cerveja',
        preco: 12.99
    },
    {
        id: 'cerveja-budweiser',
        img: '../img/cardapio/cerveja-budweiser.jpg',
        nome: 'Cerveja Budweiser',
        tipo: 'Cerveja',
        preco: 11.99
    },
    {
        id: 'caipirinha-limao',
        img: '../img/cardapio/cocktail-caipirinha.jpg',
        nome: 'Caipirinha de Limão',
        tipo: 'Bebida Alcoólica',
        preco: 14.99
    },
    {
        id: 'vinho-tinto-malbec',
        img: '../img/cardapio/vinho-tinto.jpg',
        nome: 'Vinho Tinto Malbec',
        tipo: 'Vinho',
        preco: 49.99
    }
],

}


export default MENU