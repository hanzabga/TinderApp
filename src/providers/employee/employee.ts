import cordovaSqlitePlugin from "pouchdb-adapter-cordova-sqlite";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import PouchDB from "pouchdb";

@Injectable()
export class EmployeeProvider {
  public pdb;
  public remote;
  employees;

  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB("employees");
    this.remote = "http://localhost:5984/employees";

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.pdb.sync(this.remote, options);
  }

  create(employee) {
    this.pdb.post(employee);
  }

  update(employee) {
    return this.pdb.put(employee);
  }

  delete(employee) {
    return this.pdb.remove(employee);
  }

  read() {
    let pdb = this.pdb;

    function allDocs() {
      let _employees = pdb.allDocs({ include_docs: true }).then(docs => {
        return docs.rows;
      });

      return Promise.resolve(_employees);
    }
    return allDocs();
  }
}
