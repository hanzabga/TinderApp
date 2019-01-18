import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  ModalController,
  NavParams,
  Slides
} from "ionic-angular";
import { EmployeeProvider } from "./../../providers/employee/employee";
import { LoginPage } from "../login/login";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public employees;
  ingelogdId: string;
  @ViewChild("mainSlides") slides: Slides;
  count: number = 0;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public empProv: EmployeeProvider,
    public storage: Storage
  ) {}

  ionViewDidEnter() {
    this.empProv.createPouchDB();

    this.empProv
      .read()
      .then(employees => {
        this.employees = employees;
      })
      .catch(err => {
        console.log(err);
      });
    this.ingelogdId = this.navParams.get("id");
  }

  ionViewWillEnter() {}
  showDetails(employee) {
    let modal = this.modalCtrl.create("EmployeePage", { employee: employee });
    modal.onDidDismiss(data => {
      this.reReadEmployees();
    });
    modal.present();
  }

  addEmployee() {
    let modal = this.modalCtrl.create("EmployeePage", { employee: null });
    modal.onDidDismiss(data => {
      this.reReadEmployees();
    });
    modal.present();
  }

  readChat() {
    this.navCtrl.push("ChatLijstPage", {
      id: this.ingelogdId,
      count: this.count
    });
  }

  reReadEmployees() {
    this.empProv
      .read()
      .then(employees => {
        this.employees = employees;
      })
      .catch(err => {
        console.log(err);
      });
  }

  like() {
    this.slides.slideNext();
    if (this.slides._slides.length > this.count) {
      this.storage.set("_id" + this.count, this.slides._slides[this.count].id);

      this.count++;
    }
  }

  dislike() {
    if (this.slides._slides.length >= this.count) {
      this.slides.slideNext();
      this.count++;
    }
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
    this.storage.clear();
  }
}
