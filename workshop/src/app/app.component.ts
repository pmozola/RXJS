import { Message } from './../shared/object/message';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<Message[]>;
  constructor(db: AngularFirestore){
    this.items = db.collection<Message>('message').valueChanges();
    this.items.pipe(map( 
        array=> array.sort( function(m1, m2) {
        if (m1.timestamp > m2.timestamp) {
          return 1;
        }
        return 0;
    }
  )))
  }
  
  title = 'app';
}
