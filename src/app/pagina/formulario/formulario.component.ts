import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as express from 'express';
import { PessoaService } from 'src/app/servico/pessoa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

   formulario!: FormGroup;

   constructor(private formBuilder: FormBuilder, private pessoaServico: PessoaService) { }

   ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Outros campos do formulário
    });

  }

  cadastrar(){

    const app = express();

    app.post('/api/cadastrar', (req, res) => {

      res.json({ message: 'Dados da API' });
    });
     this.pessoaServico.cadastrar();
  }

  listar(){
    const app = express();
    app.post('/api/listar', (req, res) => {

      res.json({ message: 'Dados da API' });
    });

    this.pessoaServico.listar();
  }

  editar(id: number){

    const app = express();
    app.post('/api/editar', (req, res) => {

      res.json({ message: 'Dados da API' });
    });

    this.pessoaServico.editar(id);

    
 }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Lógica adicional para enviar os dados do formulário
    }
  }
}
