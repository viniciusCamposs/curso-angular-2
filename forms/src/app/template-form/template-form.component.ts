import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

   onSubmit(form: any){
     console.log(form);

    // console.log(this.usuario);

    this.http.post('https://httpbin.org/get', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados));
   }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo)
    }
  }

  consultaCep(cep: any, form: any){
    var cep = cep.replace(/\D/g, '');

    if(cep != null && cep !== ''){
      this.cepService.consultaCep(cep)
        ?.subscribe(data => this.populaDadosForm(data, form));
    }
  }
  
  populaDadosForm(dados: any, form: any){
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(form){
    form.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
