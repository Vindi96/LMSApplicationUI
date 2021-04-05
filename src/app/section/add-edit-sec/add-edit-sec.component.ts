import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'app-add-edit-sec',
  templateUrl: './add-edit-sec.component.html',
  styleUrls: ['./add-edit-sec.component.css']
})
export class AddEditSecComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() sec: any;
  SectionId: string = "";
  SectionName: string = "";

  ngOnInit(): void {
    this.SectionId = this.sec.SectionId;
    this.SectionName = this.sec.SectionName;
  }
  addSection() {
    var val = { SectionId: this.SectionId, Sectionname: this.SectionName };
    this.service.addSection(val).subscribe(res => {
      alert(res.toString());
    });
  }
  updateSection() {
    var val = { SectionId: this.SectionId, Sectionname: this.SectionName };
    this.service.updateSection(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
