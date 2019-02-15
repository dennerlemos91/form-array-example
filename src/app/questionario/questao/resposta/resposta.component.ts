import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  @Input() resposta: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.resposta);
  }

}
