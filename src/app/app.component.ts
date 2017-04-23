import { Component, OnInit } from '@angular/core';
// import { Pipe, PipeTransform } from '@angular/core';


import { AppService } from './app.service';

// import { DomSanitizer } from '@angular/platform-browser'

// @Pipe({ name: 'safeHtml'})
// export class SafeHtmlPipe implements PipeTransform  {
//   constructor(private sanitized: DomSanitizer) {}
//   transform(value) {
//     console.log(this.sanitized.bypassSecurityTrustHtml(value))
//     return this.sanitized.bypassSecurityTrustHtml(value);
//   }
// }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {}

  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d.pricelist;
    });
  }
}
