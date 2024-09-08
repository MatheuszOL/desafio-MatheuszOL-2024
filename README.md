# RECINTOS DO ZOO

## Olá!! Boa tarde, irei explicar um pouco como cheguei a solução do desafio zoo, e a logica utilizada para passar nos 5 testes:
Primeiramente gostaria de agradecer a empresa por essa oportunidade, foi uma grande experiência para melhorar minhas habilidades com javascript e logica.

## O desafio:
O objetivo do desafio era desenvolver uma lógica para alocar novos animais em recintos existentes de um zoológico, garantido que os animais estejam confortáveis e que as regras de convivência não sejam quebradas.

<h2>Solução: </h2>

O codigo todo foi escrito em javascript, a classe "RecintosZoo", que implementa a lógica necessaria para analisar quais recintos são viáveis para a inclusão de novos animiais, irei explicar as partes dessa classe e o que elas faem no literal:
<h1>this.recintos:</h1> 

![Code](https://github.com/user-attachments/assets/4197e101-92ab-4f8c-9e69-17a033673cf5)
O "this.recintos" é uma das principais partes do codigo, ele define os dados dos recintos para que não haja erro ou algum tipo de convergência na hora de criar a logica, ele define os biomas, tamanho, especies e a quantidade.
