# Desafio Zoologico

## Olá!! Sejam bem vindos! irei explicar um pouco sobre meu desafio e como cheguei a solução desse exercício, e a logica utilizada para passar nos 5 testes:
Primeiramente gostaria de agradecer a empresa por essa oportunidade, foi uma grande experiência para melhorar minhas habilidades com javascript e logica.

<h2>Desafio: </h2>
O objetivo do desafio era desenvolver uma lógica em JavaScript para alocar novos animais em recintos existentes de um zoológico, garantido que os animais estejam confortáveis e que as regras de convivência não sejam quebradas.

<h2>Solução: </h2>

O codigo todo foi escrito em javascript, a classe "RecintosZoo", que implementa a lógica necessaria para definir quais recintos são viáveis para a inclusão de novos animiais, irei explicar as partes dessa classe e o que elas faem no literal:
<h1>this.recintos:</h1> 

![Code](https://github.com/user-attachments/assets/4197e101-92ab-4f8c-9e69-17a033673cf5)
O "this.recintos" é uma das principais partes do codigo, ele define os dados dos recintos para que não haja erro ou algum tipo de convergência na hora de criar a logica, ele define os biomas, tamanho, especies e a quantidade.

<h2>This.animais</h2>

![Animais](https://github.com/user-attachments/assets/21bae23c-4ad8-4e6c-895d-a674a6df271e)


O this.animais cria um conjunto de informações sobre alguns animais. Ele lista cada animal com detalhes, é uma forma de organizar essas informações para poder ajudar no desenvolvimento da logica.

<h2>analiseRecintos</h2>

![AnaliseRecintos](https://github.com/user-attachments/assets/e0eb0d20-4205-424b-b412-6724487f0210)

A função "analiseRecintos" verifica se a espécie de animal e a quantidade fornecidas são válidas, checa se a espécie existe, se não retorna uma mensagem de erro, em seguida verifica se a quantidade é um úmero positivo e inteiro. Se não for, retorna uma mensagem de erro para quantidade inválida. Caso esteja tudo certo, a função prossegue para determinar quais recintos são adequados para a espécie fornecida.

![Analisept2](https://github.com/user-attachments/assets/351c042e-6ada-4461-a007-3758c8662660)

Essa parte percorre cada recinto e verifica se o bioma é adequado para o animal, considerando que "savana e rio" pode acomodar animais que também se adaptam a "savana". Em seguida, calcula o espaço ocupado pelos animais existentes no recinto, caso houver outros animais diferentes da nova espécie, adiciona um espaço extra necessário.

![Ultima_parte](https://github.com/user-attachments/assets/ad5b8d5d-d689-4daa-aa2e-2c29067ecacd)

Essa sendo a finalização de "analiseRecintos" é a parte onde calcula o espaço necessário para os novos animais e verifica se há espaço disponiível no recinto(Sendo a parte mais complicada). Se o espaço disponível for suficiente, ele checa se há animais carnívoros no recinto e faça que não haja conflitos com animais novos, além disso, confirma que hipopótamos só estão em recintos com "savana e rio" e que macacos não podem estar sozinhos no recinto.

<h2>Finalização do codigo</h2>

![Snap](https://github.com/user-attachments/assets/deca8442-9493-4844-a72e-aa4afc3cc670)

O trecho final do código adiciona informações sobre recintos disponíveis a lista de recintos viáveis, detalhando o numero do recinto, o espaço livre restante e o tamanho total do recinto. Se não houver recintos livres na lista a função retorna com uma mensagem de erro informando que não há recintos adequados. Caso o contrário, ela retorna a lista de recintos viáveis com os detalhes.

Finalizando o codigo exporta a classe "RecintosZoo" para que possa ser utilizada em outras partes do programa(teste).






