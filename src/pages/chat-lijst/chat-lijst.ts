import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmployeeProvider } from "./../../providers/employee/employee";
import { ChatPage } from "../chat/chat";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ChatLijstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chat-lijst",
  templateUrl: "chat-lijst.html"
})
export class ChatLijstPage {
  public employees: any[] = [];
  public ingelogdId;
  public count = this.navParams.get("count");
  public matches: any[] = [];
  public final: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public empProv: EmployeeProvider,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.empProv.createPouchDB();

    for (let i = 0; i < this.count; i++) {
      this.storage.get("_id" + i).then(val => {
        this.matches.push(val);
      });
    }

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
  ionViewDidEnter() {
    console.log("ionViewDidEnter ChatLijstPage");
    this.load();
  }

  ionViewDidLeave() {
    this.empty();
  }

  load() {
    this.employees.forEach(element => {
      if (
        this.matches.filter(val => {
          if (val == element.id) {
            this.final.push(element);
          }
        })
      ) {
      }
    });
  }

  empty() {
    this.final = [];
  }

  chatten() {
    this.navCtrl.push(ChatPage);
  }
}
