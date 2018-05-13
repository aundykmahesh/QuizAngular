import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Quiz";
  currentquestion = 0;
  numberofcorrectanswer = 0;
  isDisplay = false;
  questions = [
    {
      "question": "What is the size of the moon?",
      "correctanswer": "2",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon1?",
      "correctanswer": "3",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon2?",
      "correctanswer": "1",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon3?",
      "correctanswer": "2",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon3?",
      "correctanswer": "3",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon4?",
      "correctanswer": "4",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon5?",
      "correctanswer": "2",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon6?",
      "correctanswer": "1",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon7?",
      "correctanswer": "4",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    },
    {
      "question": "What is the size of the moon8?",
      "correctanswer": "2",
      "useranswer": "0",
      "options": [
        { "value": "1000", "sortorder": "1" },
        { "value": "2000", "sortorder": "2" },
        { "value": "3000", "sortorder": "3" },
        { "value": "4000", "sortorder": "4" }
      ]
    }
  ];

  checkanswer = function () {
    if (this.questions[this.currentquestion].correctanswer == this.questions[this.currentquestion].useranswer) {
      this.numberofcorrectanswer++;

    }
    if (this.currentquestion < this.questions.length - 1) {
      debugger;
      this.currentquestion++;
    }
    else {
      this.isDisplay = true;
    }

  }

  returnClass = function (canswer, uanswer, cvalue) {
    if (cvalue == canswer) {
      return "correctanswer";
    }
    else if (cvalue == uanswer) {
      return "wronganswer";
    }
  }

  returnImageClass = function (canswer, uanswer) {
    if (uanswer == canswer) {
      return "correctimage";
    }
    else {
      return "wrongimage";
    }
  }
}

