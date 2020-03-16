import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


export interface IGif {
  tag: string;
  gif: string;
}
@Component({
  selector: 'app-formbar',
  templateUrl: './formbar.component.html',
  styleUrls: ['./formbar.component.scss']
})
export class FormbarComponent implements OnInit {

  tag = '';
  images: IGif[] = [];
  tags = [];
  formTag: FormGroup;
  visibleFlag = false;
  error  = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.formTag = new FormGroup({
      tagName: new FormControl('', [
        Validators.required
      ])
    });
  }

  clearImg(): void {
    this.images = [];
    this.tags = [];
    this.visibleFlag = false;
  }

  groupAll() {
    this.visibleFlag = !this.visibleFlag;
  }

  loadImg(tag) {
    this.dataService.searchImg(tag)
      .subscribe(response => {
        this.images.push({tag: this.formTag.get('tagName').value, gif: response.data.embed_url});
        if (!this.tags.includes(this.formTag.get('tagName').value)) {
          this.tags.push(this.formTag.get('tagName').value);
        }
        this.visibleFlag = false;
      }, (error => {
        this.error = error;
        console.log(error);
      }));
  }

}

