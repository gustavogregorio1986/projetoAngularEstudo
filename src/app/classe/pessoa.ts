class ItemLista {
  constructor(id: number, nome: string, email: string, idade:number) {}
}

export class Pessoa {
     id: number = 0;
     nome: string = '';
     email: string = '';
     idade:number = 0;

     listaItens: ItemLista[] = [
      new ItemLista(1,"luiz","luiz@gmail.com",45),
      new ItemLista(2,"Mayara","mayara@gmail.com", 32),
      new ItemLista(3,"Ricardo","ricardo@gmail.com", 31)
    ];
}
