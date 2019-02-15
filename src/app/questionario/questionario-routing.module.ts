import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestaoComponent } from './questao/questao.component';
import { QuestionarioComponent } from './questionario.component';

const routes: Routes = [
  {path: 'processo/:numeroRegistro', component: QuestionarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionarioRoutingModule { }
