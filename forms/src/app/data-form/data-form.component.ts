import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from './../shared/models/estado-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;
  //estados!: EstadoBr[];
  estados!: Observable<EstadoBr[]>;
  cargos!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {

    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

   /* 
    this.estados=[];
    this.dropdownService.getEstadoBr().subscribe((res: EstadoBr)=>{     
    this.estados.push(res)   ;
    console.log(this.estados);
    
  });
  */
    /*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });
    */
 
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),

      cargo: [null]
    });

  }

  onSubmit(){
    if(this.formulario.valid){
      console.log(this.formulario.value);
      this.resetar();
    }else {
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsTouched();

      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }

    });
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: any){

    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo)
    }
  }

  
  consultaCep(){

    let cep = this.formulario.get('endereco.cep')?.value;

    if(cep != null && cep !== ''){
      this.cepService.consultaCep(cep)
        ?.subscribe(data => this.populaDadosForm(data));
    }

  }

  populaDadosForm(dados: any){
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
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

  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1, obj2){
    return obj1 && obj2 ? (obj1.nome === obj2.nome) : obj1 === obj2;
  }


}
