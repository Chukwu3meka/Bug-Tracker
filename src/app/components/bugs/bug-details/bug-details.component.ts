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
import {
  BugsService,
  PlatformsService,
  TeamsService,
  UsersService,
} from 'src/app/services';
import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.scss'],
})
export class BugDetailsComponent implements OnInit {
  @Input() bugId?: string;
  @Output() closeDrawerHandler = new EventEmitter();

  public platforms;
  public constants: Observable<ConstantsModel>;

  constructor(
    private store: Store<AppState>,
    private bugService: BugsService,
    private usersService: UsersService,
    private teamsService: TeamsService
  ) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.platforms = constants.platforms;
    });
  }

  ngOnChanges(changes: SimpleChange) {
    if (typeof this.bugId !== 'undefined') {
      this.bugService.getBug(this.bugId).subscribe((bug) => {
        if (!bug) return;

        // // get teams incharge of bugs
        // this.teamsService.getTeams().subscribe((teams) => {
        //   const { id: teamId } = teams?.find((x) =>
        //     x.platforms.includes(bug.platform)
        //   );

        this.usersService.getAllDeveloper().subscribe((res) => {
          const developers = res.map(({ id, firstName, lastName }) => ({
            id,
            name: `${lastName} ${firstName}`,
          }));

          console.log({ developers, bug });
          this.details = {
            id: bug.bugId,
            details: `Reported by '${'Unknown User'}' on ${new Date(
              bug.reportDate
            ).toDateString()}`,
            developers,
            developer: {
              assigned: bug.userAssignedToBug.id || 0,
              reassigned: bug.userAssignedToBug.id || 0,
              selected: bug.userAssignedToBug.id || 0,
            },
            title: bug.label,
            // platform: this.platforms.find((x) => x.id === bug.platform).title,
            platform: bug.platformses.platformName,
            description: bug.bugReview,
            screenshots: [
              'https://placeimg.com/200/200/people',
              '/assets/images/add-bug.png',
              'https://placeimg.com/200/200/people',
              '/assets/images/zenith-logo.png',
              '/assets/images/profilePic.png',
              'https://placeimg.com/200/200/people',
              'https://placeimg.com/200/200/people',
              '/assets/images/zenith-logo.png',
              'https://placeimg.com/200/200/people',
            ],

            // activities: [...data]
            //   .sort(
            //     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            //   )
            //   .map(({ date, description }) => ({
            //     date: new DateAgoPipe().transform(date),
            //     description,
            //   })),
          };
          //   //   });
        });
      });
    }
  }

  // public currentDeveloper = 3;

  public assignDeveloper = () => {
    // developer::: stand for previously assigned developer which can be new for new bugs
    // pendingDeveloper::: stands for recently selected developer, who's expected to accept assignment

    this.details.developer = this.details.pendingDeveloper;

    this.usersService
      .getDeveloper(this.details.pendingDeveloper)
      .subscribe((res) => {
        const developer = res[0];

        // console.log({
        //   developer: {
        //     id: this.details.pendingDeveloper,
        //     img: developer.img,
        //     name: developer.name,
        //   },
        //   bug: this.details.id,
        // });

        this.bugService.assignDeveloperToBug({
          developer: {
            id: this.details.pendingDeveloper,
            img: developer.img,
            name: developer.name,
          },
          bug: this.details.id,
        });
      }); // assignDeveloperToBug

    // this.details.pendingDeveloper
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
