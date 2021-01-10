import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
;

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      endereco: new FormGroup({
        cep: new FormControl(null),...
      })
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep:[null, Validators.required],
        numero:[null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado:  [null, Validators.required]
      })
    })
  }

  onSubmit(){
    console.log(this.formulario.value);

    if(this.formulario.valid){
      //reseta o form
      this.resetar();
    }else{
      console.log('formulario invaliado');
        }

  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: string){
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;   
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo)
    }
  }

  populaDadosForm(dados: any){
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  consultaCep(){

    let cep = this.formulario.get('endereco.cep')?.value;

    cep = cep.replace(/\D/g, '');

    if (cep !='') {
      var validaCep = /^[0-9]{8}$/;
        if (validaCep.test(cep)){

          this.resetaDadosForm();

          this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(data => this.populaDadosForm(data));
        }
    }
  }

}
