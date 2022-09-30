import { Component, OnInit } from '@angular/core';
import { DateAgoPipe } from 'src/app/pipes/dateago.pipe';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.less'],
})
export class BugDetailsComponent implements OnInit {
  public details = {
    title: 'Bug Title her',
    platform: 'Mobile app',
    description: `Aliquip esse tempor reprehenderit commodo aute in. Nisi ad ut ipsum eu ipsum commodo tempor laboris veniam enim. Incididunt est culpa dolor incididunt aliquip velit non esse. Tempor laboris veniam cillum commodo irure sunt esse. Occaecat veniam amet consectetur incididunt velit.

Eu amet et non id proident deserunt in voluptate culpa ad excepteur cupidatat ad non. Cillum minim sit sit consequat voluptate laborum. Aliqua sint occaecat velit adipisicing.

Ex cupidatat fugiat sint proident qui esse. Cillum ullamco tempor consectetur eu. Ex laborum aute officia nulla anim aliqua anim id cupidatat elit nisi. Ullamco excepteur ipsum incididunt id qui quis in id in non proident minim qui. Mollit proident eu quis sunt voluptate ex quis tempor.

Aute officia qui magna exercitation officia adipisicing tempor cillum sit non et pariatur. Sunt non ut occaecat est. Sint id magna mollit aute do nisi. Tempor ex ea laborum nisi officia nostrud magna ullamco cillum cupidatat cillum. Aliquip sint id id laborum anim culpa amet est eu sunt eu ad.`,
    screenshots: [
      'https://placeimg.com/200/200/people',
      'https://placeimg.com/200/200/people',
      'https://placeimg.com/200/200/people',
      'https://placeimg.com/200/200/people',
      'https://placeimg.com/200/200/people',
      'https://placeimg.com/200/200/people',
      'https://placeimg.com/200/200/people',
    ],
  };

  public activities = [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ date, description }) => ({
      date: new DateAgoPipe().transform(date),
      description,
    }));
  constructor() {}

  ngOnInit(): void {}
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
