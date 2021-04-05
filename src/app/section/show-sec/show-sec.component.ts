import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'app-show-sec',
  templateUrl: './show-sec.component.html',
  styleUrls: ['./show-sec.component.css']
})
export class ShowSecComponent implements OnInit {

  constructor(private service: SharedService) { }
  SectionList: any = [];
  ModalTitle: String | undefined;
  ActivateAddEditSecComp: boolean = false;
  sec: any = [];

  ngOnInit(): void {
    this.refreshSecList();
  }
  addClick() {
    this.sec = {
      SectionId: 0,
      SectionName: ""
    }
    this.ModalTitle = "Add Section";
    this.ActivateAddEditSecComp = true;
  }
  editClick(item: any) {
    this.sec = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditSecComp = true;
  }
  deleteClick(item: any) {
    if (confirm("Are you sure?")) {
      this.service.deleteSection(item.SectionId).subscribe(data => {
        alert(data.toString());
        this.refreshSecList();
      })
    }

  }

  closeClick() {
    this.ActivateAddEditSecComp = false;
    this.refreshSecList();

  }

  refreshSecList() {
    this.service.getSecList().subscribe(data => {
      this.SectionList = data;
      console.log(this.SectionList);

    });
  }

}
