import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DateAgoPipe } from 'src/app/pipes/dateago.pipe';
import { BugsService } from 'src/app/services';
import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.less'],
})
export class BugDetailsComponent implements OnInit {
  @Input() bugId?: string;
  @Output() closeDrawerHandler = new EventEmitter();

  public platforms;
  public constants: Observable<ConstantsModel>;

  constructor(private store: Store<AppState>, private bugService: BugsService) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.platforms = constants.platforms;
    });
  }

  ngOnChanges(changes: SimpleChange) {
    if (typeof this.bugId !== 'undefined') {
      this.bugService.getBug(this.bugId).subscribe((res) => {
        const bug = res[0];

        if (!bug) return;

        console.log(bug.developer);

        this.details = {
          platformDevelopers: [
            { id: '1', name: 'Clay Robel' },
            { id: '2', name: 'Cathy Shanahan' },
            { id: '3', name: 'Jill Jacobs' },
            { id: '4', name: 'Deanna Bednar' },
            { id: '5', name: 'Lloyd Muller`' },
          ],
          developer: bug.developer?.id || 0,
          title: bug.title,
          platform: this.platforms.find((x) => x.id === bug.platform).title,
          description: bug.description,
          screenshots: [
            'https://placeimg.com/200/200/people',
            '/assets/images/add-bug.png',
            'https://placeimg.com/200/200/people',
            '/assets/images/zenith-logo.png',
            'https://placeimg.com/200/200/people',
            'https://placeimg.com/200/200/people',
            '/assets/images/profilePic.png',
            'https://placeimg.com/200/200/people',
            'https://placeimg.com/200/200/people',
            '/assets/images/zenith-logo.png',
            'https://placeimg.com/200/200/people',
          ],
          activities: [...data]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map(({ date, description }) => ({
              date: new DateAgoPipe().transform(date),
              description,
            })),

          currentDeveloper: bug.developer?.id || 0,
        };
      });
    }
  }

  // public currentDeveloper = 3;

  public assignDeveloper = () => {
    console.log({
      'new dev': this.details.developer,
      'current dev': this.details.currentDeveloper,
    });

    // console.log('public assignDeveloper = () => {');
    // this.details.currentDeveloper = this.details.developer;
    // save to database here
    // this.currentDeveloper = this.details.developer.id;
    // this.currentDeveloper = this.details.developer.id;
  };

  public zoomImage;

  public zoomImagehandler = (imgSrc) => {
    if (imgSrc) {
      // console.log(imgSrc);
      this.zoomImage = imgSrc;
    } else {
      this.zoomImage = undefined;
    }
  };

  public hideDrawer = () => this.closeDrawerHandler.emit();

  public details;
}

const data = [
  {
    date: 'Mon Oct 18 2021 13:33:42 GMT+0100 (West Africa Standard Time)',
    description: 'Eu laboris est est id ea Lorem anim ex.',
  },
  {
    date: 'Thu Aug 11 2022 17:21:59 GMT+0100 (West Africa Standard Time)',
    description: 'Ipsum fugiat nostrud id dolore esse elit.',
  },
  {
    date: 'Fri Apr 29 2022 03:19:32 GMT+0100 (West Africa Standard Time)',
    description:
      'Culpa laborum labore culpa fugiat ad aliqua in quis labore cillum.',
  },
  {
    date: 'Mon Jul 04 2022 12:53:29 GMT+0100 (West Africa Standard Time)',
    description:
      'Velit proident incididunt esse ut excepteur pariatur exercitation esse laboris voluptate dolore elit ad.',
  },
  {
    date: 'Tue Mar 22 2022 11:13:16 GMT+0100 (West Africa Standard Time)',
    description: 'Magna ea qui amet quis est non ut nulla consectetur.',
  },
  {
    date: 'Sun Jan 23 2022 16:48:19 GMT+0100 (West Africa Standard Time)',
    description:
      'Id irure aliquip anim sit nostrud consequat aliqua nisi quis.',
  },
  {
    date: 'Fri Feb 04 2022 12:56:22 GMT+0100 (West Africa Standard Time)',
    description:
      'Ullamco qui esse velit consectetur laboris excepteur officia sint sint.',
  },
  {
    date: 'Mon May 09 2022 05:14:24 GMT+0100 (West Africa Standard Time)',
    description:
      'Officia laborum est aute fugiat fugiat labore officia labore esse sunt eu.',
  },
  {
    date: 'Fri Jan 28 2022 22:49:56 GMT+0100 (West Africa Standard Time)',
    description:
      'Sint pariatur elit anim pariatur cupidatat consequat ex dolore duis duis fugiat.',
  },
];
