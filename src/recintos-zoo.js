class RecintosZoo {
    constructor() {
        //Definindo os dados do zoologico, especificando bioma, tamanho etc... 
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanho: 10, animaisExistentes: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: 'floresta', tamanho: 5, animaisExistentes: [] },
            { numero: 3, bioma: 'savana e rio', tamanho: 7, animaisExistentes: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: 'rio', tamanho: 8, animaisExistentes: [] },
            { numero: 5, bioma: 'savana', tamanho: 9, animaisExistentes: [{ especie: 'LEAO', quantidade: 1 }] }
        ];

        //Definindo as caracteristicas dos animais como peso, tamanho, biomas que podem ficar e se são carnivoros.
        this.animais = {
            'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
            'LEOPARDO': { tamanho: 2, biomas: ['savana'], carnivoro: true },
            'CROCODILO': { tamanho: 3, biomas: ['rio'], carnivoro: true },
            'MACACO': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
            'GAZELA': { tamanho: 2, biomas: ['savana'], carnivoro: false },
            'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };
    }

    analisaRecintos(animalEspecie, quantidade) {
        //Valida a espécie e a quantidade do animal
        if (!this.animais[animalEspecie]) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }

        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }

        const animalInfo = this.animais[animalEspecie];
        let recintosViaveis = [];

        for (let recinto of this.recintos) {
            //Verificando se o bioma do recinto é equivalente para o animal.
            if (!animalInfo.biomas.includes(recinto.bioma) && !(recinto.bioma === "savana e rio" && animalInfo.biomas.includes("savana"))) {
                continue;
            }

            let espacoOcupado = recinto.animaisExistentes.reduce((total, animal) => total + (animal.quantidade * this.animais[animal.especie].tamanho), 0);

            if (recinto.animaisExistentes.length > 0 && !recinto.animaisExistentes.some(a => a.especie === animalEspecie)) {
                espacoOcupado += 1;
            }

            const espacoNecessario = (animalInfo.tamanho * quantidade);
            const espacoDisponivel = recinto.tamanho - espacoOcupado;

            if (espacoDisponivel >= espacoNecessario) {
                const temCarnivoro = recinto.animaisExistentes.some(a => this.animais[a.especie].carnivoro);
                if (temCarnivoro && animalInfo.carnivoro && recinto.animaisExistentes.length > 0) {
                    continue;
                }

                if (temCarnivoro && !animalInfo.carnivoro) {
                    continue;
                }

                if (animalEspecie === "HIPOPOTAMO" && recinto.bioma !== "savana e rio") {
                    continue;
                }

                if (animalEspecie === "MACACO") {
                    const temMacacos = recinto.animaisExistentes.some(a => a.especie === 'MACACO');

                    if (!temMacacos && recinto.animaisExistentes.length === 0) {
                        if (quantidade === 1) {
                            continue;
                        } else {
                            recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - espacoNecessario} total: ${recinto.tamanho})`);
                            continue;
                        }
                    }
                }

                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - espacoNecessario} total: ${recinto.tamanho})`);
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        } else {
            return { erro: null, recintosViaveis: recintosViaveis };
        }
    }
}

export { RecintosZoo };
