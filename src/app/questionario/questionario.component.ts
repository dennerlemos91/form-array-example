import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from './shared/questionario.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

export class ItemResposta {
  constructor(
    public seq?: number,
    public seqItemQuestao?: number,
    public valor?: string
  ) {}
}

export class Questao {
  constructor(
    public seq?: number,
    public desceicao?: string,
    public nomeDaParte?: string[],
    public paginaPeticaoREsp?: number,
    public respostas?: ItemResposta[]
  ) {

  }
}

export class Situacao {
  constructor (
    public codigo?: number,
    public descricao?: string
  ) {}
}

export class Questionario {
  constructor(
    public seq?: number,
    public numeroRegistro?: string,
    public situacao?: Situacao,
    public questoes?: Questao[]
  ) {}

  static fromJson(data: any) {
    return Object.assign(new Questionario(), data);
  }
}

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  questionario: Questionario;
  formulario: FormGroup;

  constructor(
    private questionarioService: QuestionarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.loadQuestionario();
  }

  buildForm() {
    this.formulario = this.fb.group({
      questoes: this.fb.array([])
    });
  }

  get questoes(): FormArray {
    return this.formulario.get('questoes') as FormArray;
  }

  buildFormQuestao(questao: Questao): FormGroup {
    return this.fb.group({
      seq: [questao.seq],
      paginaPeticaoREsp: [questao.paginaPeticaoREsp],
      nomeDaParte: [questao.nomeDaParte],
      respostas: this.fb.array([])
    });
  }

  respostas(index: number) {
    return this.questoes.at(index).get('respostas') as FormArray;
  }

  buildFormRespostas(resposta: ItemResposta): FormGroup {
    return this.fb.group({
      seqItemQuestao: [resposta.seqItemQuestao],
      valor: [resposta.valor]
    })
  }

  loadQuestionario() {
    this.questionarioService.getQuestionario('201500051676').subscribe((questionario) => {
      this.questionario = questionario;
      this.questionario.questoes.forEach((questao, index) => {
        this.questoes.push(this.buildFormQuestao(questao));
        if (questao.respostas.length) {
          questao.respostas.forEach(resposta => {
            this.respostas(index).push(this.buildFormRespostas(resposta));
          });
        }
      })
    })
  }

}
