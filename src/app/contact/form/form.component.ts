import { Component, OnInit } from '@angular/core';
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

  messageForm: Message = {
    pseudo: '',
    destinataire: '-',
    message: ''
  };

  sentMessage: Message[] = [];
  showMessages: boolean = false;

  

  constructor() { }

  ngOnInit(): void {

    let destinataire: Destinataire = {
      nom: 'luc',
      age: 45
    };
    let personne: Personne = destinataire;
  }

  onSend(){
    const toAdd = {
      pseudo: this.messageForm.pseudo,
      destinataire: this.messageForm.destinataire,
      message: this.messageForm.message
    }
    this.sentMessage.push( toAdd );
  }

  toggleShowMessages(){
    this.showMessages = !this.showMessages;
  }

}
