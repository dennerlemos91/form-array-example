import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Questao } from '../questionario.component';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  @Input() questao: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.questao);
  }

  get respostas(): FormArray {
    return this.questao.get('respostas') as FormArray;
  }

}
