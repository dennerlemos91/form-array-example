import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Questionario } from '../questionario.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  apiUrl = 'http://localhost:3000/api/questionarios';

  constructor(
    private http: HttpClient
  ) { }

  getQuestionario(numeroRegistro: string) : Observable<Questionario> {
    return this.http.get(`${this.apiUrl}/${numeroRegistro}/processo`).pipe(
      map( questionarioList => Questionario.fromJson(questionarioList[0]))
    );
  }
}
