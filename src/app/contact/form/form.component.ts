import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Destinataire } from 'src/app/models/destinataire.model';
import { Message } from 'src/app/models/message.model';
import { Personne } from 'src/app/models/personne.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  listDesti: string[] = [
    'cuistot',
    'serveur',
    'propriétaire'
  ]

  sentMessage: Message[] = [];
  showMessages: boolean = false;

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group(
      {
        'pseudo': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
        'email': new FormControl(null, Validators.email),
        'destinataire': new FormControl(null, Validators.required),
        'message': new FormControl(null, [Validators.required, Validators.maxLength(50)])
      }
    )
  }

  ngOnInit(): void {

    let destinataire: Destinataire = {
      nom: 'luc',
      age: 45
    };
    let personne: Personne = destinataire;
  }

  onSend(){
    if ( this.form.valid ){
      const toAdd = {
        pseudo: this.form.value.pseudo,
        email: this.form.value.email,
        destinataire: this.form.value.destinataire,
        message: this.form.value.message
      }
      this.sentMessage.push( toAdd );
      this.form.reset()
    }
    
  }

  toggleShowMessages(){
    this.showMessages = !this.showMessages;
  }

}
