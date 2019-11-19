import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}
  todo = ["Header", "Body", "Footer"];
  html = "";
  done = [];
  componentCode = [
    { title: "Header", html: "<div> i am header</div>" },
    { title: "Body", html: "<div> i am Body</div>" },
    { title: "Footer", html: "<div> i am Footer</div>" }
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.updateHtml();
  }
  updateHtml() {
    let tempHtml = "";
    const br = "<br>";
    this.done.map(d => {
      const flag = this.componentCode.find(p => p.title === d);
      if (flag) {
        tempHtml += flag.html + br;
      }
    });
    this.html = tempHtml;
    console.log("TCL: FormComponent -> updateHtml -> this.html", this.html);
  }

  ngOnInit() {}
}
