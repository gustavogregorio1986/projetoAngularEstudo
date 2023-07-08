import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  constructor(private http: HttpClient) { }



  cadastrar(){
    const express = require('express');
    const url = `/api/recurso/listar`;
    const app = express();
    const port = 3000;

    app.use(express.json());



  }


  listar(){
    const express = require('express');
    const url = `/api/recurso/listar`;
    const app = express();
    const port = 3000;

    app.use(express.json());
  }

  editar(id: number){
    const express = require('express');
    const url = `/api/recurso/${id}`;
    const app = express();
    const port = 3000;



    app.use(express.json());
  }

  obterRecursoPorId(id: number) {
    const url = `/api/recurso/${id}`;
    return this.http.get(url);
  }
}
