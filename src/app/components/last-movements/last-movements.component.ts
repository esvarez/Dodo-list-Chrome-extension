import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kbo-last-movements',
  templateUrl: './last-movements.component.html',
  styleUrls: ['./last-movements.component.scss']
})
export class LastMovementsComponent implements OnInit {

  loading = false;
  
  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 3'
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }

}
