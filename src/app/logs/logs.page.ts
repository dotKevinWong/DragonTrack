import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Platform } from '@ionic/angular';
import { Place, FirebaseService } from 'src/app/services/firebase.service'

@Component({
  selector: 'app-logs',
  templateUrl: 'logs.page.html',
  styleUrls: ['logs.page.scss'],
})
export class LogsPage {

  places: Place[];
 
  constructor(private firebaseService: FirebaseService,
    private tts: TextToSpeech, public platform: Platform, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    }
    
  /* 
  OnInit, subscribe to Firebase function getWords()
  and return an array of words from Firebase Firestore  
  */

  ngOnInit() {
    this.firebaseService.getPlaces().subscribe( places => {
      this.places = places;
    });
  }

}
