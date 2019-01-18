import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmployeeProvider } from './../../providers/employee/employee';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  firstName: string;
  employees: any = {};
  accesLogin: boolean = false;
  public  userId: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public empProv: EmployeeProvider,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController
    ) {}

  ionViewDidEnter() {
  //  this.navParams.push(this.userId);
    this.empProv.createPouchDB();

    this.empProv.read()
      .then(employees => {
        this.employees = employees;
      }).catch((err) => { console.log(err)} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "User doesn't exist",
      subTitle: 'Deze account bestaat nog niet',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  login(){
    this.employees.filter((emp) => {
      if (emp.doc.firstName == this.firstName){
        this.accesLogin = true;
        this.userId = emp.doc._id;
      }
    })


    if (this.accesLogin){
      //this.navCtrl.setRoot(HomePage, this.userId);
      this.navCtrl.setRoot(HomePage, {
        id: this.userId
      });
      
    }
    else {
      this.presentAlert();
    }
  }

  addEmployee() {
    let modal = this.modalCtrl.create('EmployeePage', { employee: null });
    modal.onDidDismiss(data => {
      this.reReadEmployees()
    });
    modal.present();
  }


  reReadEmployees() {
    this.empProv.read()
      .then(employees => {
        this.employees = employees;
      }).catch((err) => { console.log(err)} );
  }

}
