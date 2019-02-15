import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionarioRoutingModule } from './questionario-routing.module';
import { QuestionarioComponent } from './questionario.component';
import { QuestaoComponent } from './questao/questao.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RespostaComponent } from './questao/resposta/resposta.component'

@NgModule({
  declarations: [QuestionarioComponent, QuestaoComponent, RespostaComponent],
  imports: [
    CommonModule,
    QuestionarioRoutingModule,

    ReactiveFormsModule
  ]
})
export class QuestionarioModule { }
