import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;

  constructor(private leaderService: LeaderService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    // this.leaderService.getLeaders().then(leaders => this.leaders = leaders);
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,
      errmess => this.errMess = <any>errmess);
  }

}
