import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/servico/pessoa.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{

  constructor(private pessoaServico: PessoaService) { }


  ngOnInit() {
  }

  listar(){
    const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.json());

    this.pessoaServico.listar();
  }



  editar(id: number){
    const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.json());
    this.pessoaServico.editar(id);
    this.pessoaServico.obterRecursoPorId(id);
  }
}
