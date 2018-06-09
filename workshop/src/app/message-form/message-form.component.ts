import { Message } from './../../shared/object/message';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  messages: AngularFirestoreCollection;
  constructor(private db: AngularFirestore){
  this.messages = db.collection('message');
  }
  name = new FormControl('', [Validators.required]);
  body = new FormControl();

  onFormSubmit() { 
    let data = {
      sender:this.name.value,
      body:this.body.value

    }
    this.messages.add(data);
  }

}
