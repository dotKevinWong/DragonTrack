import { Component, OnInit } from '@angular/core';
import { Place, FirebaseService } from 'src/app/services/firebase.service'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  place: Place = {
    name: '',
    address: '',
    user: this.afAuth.auth.currentUser.uid,
  };

  constructor(private activatedRoute: ActivatedRoute, private firebaseService: FirebaseService,
    private toastCtrl: ToastController, private router: Router, private location: Location, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.firebaseService.getPlace(id).subscribe(place => {
        this.place = place;
      })
    }
  }

  addPlace() {
    this.firebaseService.addPlace(this.place).then(() => {
      this.location.back();
      this.showToast('place added');
    }, err => {
      this.showToast('There was a problem adding your place :(');
    });
  }

  deletePlace() { 
    this.firebaseService.deletePlace(this.place.id).then(() => {
      this.location.back();
      this.showToast('place deleted');
    }, err => {
      this.showToast('There was a problem deleting your place :(');
    });
  }

  updatePlace() { 
    this.firebaseService.updatePlace(this.place).then(() => {
      this.location.back();
      this.showToast('place updated');
    }, err => {
      this.showToast('There was a problem deleting your place :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  
}
