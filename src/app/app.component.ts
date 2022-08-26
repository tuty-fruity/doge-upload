import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doge-upload';

  private imgSrc: string;

  constructor() {
      this.imgSrc = "";
  }

  onDragOver(e: Event) : void {
    e.preventDefault();
  }

  onDragLeave(e: Event) : void {
    e.preventDefault()
  }

  onDrop(e: DragEvent) : void {
    e.preventDefault();

    if (e.dataTransfer !== null) { 
        const targetFile = e.dataTransfer.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(targetFile);
        reader.onloadend = (e) => {
            this.imgSrc = reader.result as string;
        }
    }
  }

  public getImgSrc() : string {
    return this.imgSrc;
  }
}
