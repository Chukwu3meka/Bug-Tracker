import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BugsService } from 'src/app/services';
import { AppState } from 'src/app/store/app.state';
import { validator } from 'src/app/source/validator';
import { ConstantsModel } from 'src/app/store/models';
import { labelDataInterface } from 'src/app/interface/AddBug';
import { SetAlertAction } from 'src/app/store/actions/alert.actions';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.scss'],
})
export class AddBugComponent implements OnInit {
  private maxFileSize: number = 5120;
  private constants: Observable<ConstantsModel>;

  public bugPlatforms;
  public uploading = false;
  public isLoadingOne = false;
  public isLoadingTwo = false;
  public fileList: NzUploadFile[] = [];
  public formData: FormGroup = this.formBuilder.group({
    title: [''],
    platform: [''],
    description: [''],
    date: [new Date()],
  });
  public labelData: labelDataInterface = {
    // ? status code
    //  * 0 : Clean state i.e not modified
    //  * 1 : Form Input has error
    //  * 2 : Form Input is safe for processing

    title: {
      status: 0,
      message: '',
      title: 'Bug Title',
      validator: 'bug-title',
    },
    platform: {
      status: 0,
      message: '',
      title: 'Bug Platform',
      validator: 'bug-platform',
    },
    date: {
      status: 0,
      message: '',
      title: 'Bug First Noticed',
      validator: 'bug-date',
    },
    description: {
      status: 0,
      message: '',
      title: 'Bug Description',
      validator: 'bug-description',
    },
  };

  constructor(
    private store: Store<AppState>,
    private bugsServices: BugsService,
    private formBuilder: FormBuilder
  ) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.onChanges();

    this.constants.subscribe(({ platforms }) => {
      this.bugPlatforms = platforms.filter((x) => x.disabled !== true);
      //  this.bugPlatforms[0].id; // <=  set default bugPlatform
      console.log(this.bugPlatforms);
      // this.formData.setValue({platform:""});
    });

    // this.store.dispatch(
    //   SetAlertAction({ payload: { message: 'dsfdsfds', status: 'success' } })
    // );
  }

  onChanges(): void {
    this.formData
      .get('title')!
      .valueChanges.subscribe((value) =>
        this.labelDataHandler({ label: 'title', value })
      );
    this.formData
      .get('date')!
      .valueChanges.subscribe((value) =>
        this.labelDataHandler({ label: 'date', value })
      );
    this.formData
      .get('description')!
      .valueChanges.subscribe((value) =>
        this.labelDataHandler({ label: 'description', value })
      );
  }

  labelDataHandler = ({ value, label }) => {
    try {
      validator(this.labelData[label].validator, value);
      this.labelData[label].status = 2;
      this.labelData[label].message = '';
    } catch ({ message }) {
      this.labelData[label].status = 1;
      this.labelData[label].message = `${message || 'Invalid Input'}`;
    }
  };

  beforeUpload = (file: NzUploadFile): boolean => {
    // ! Enforce maximum limit of files
    if (this.fileList.length < 5) {
      this.fileList = this.fileList.concat(file);
    }
    return false;
  };

  submitBug = (): void => {
    console.log(this.formData.value);
    // this.formData.forEach((x) => {
    //   console.log(x);
    // });
    // );
    // ! unnecessary code, to be sent

    // const {
    //   id: platformId,
    //   title: platformName,
    //   disabled: platformStatus,
    // } = this.bugPlatforms.find((x) => x.id == this.formData.platform);

    // console.log({
    //   platformId,
    //   platformName,
    //   platformStatus,

    //   a: this.bugPlatforms,
    //   // b: this.formData.platform,
    // });

    // this.bugsServices
    //   .addBug({
    //     ...this.formData,
    //     label: this.formData.title,
    //     bugReview: this.formData.description || 'No data',
    //     platformses: {
    //       platformId,
    //       platformName,
    //       platformStatus: platformStatus ? 'ACTIVE' : null,
    //     },
    //   })
    //   .subscribe(() => {
    //     this.formData = {
    //       title: '',
    //       platform: this.bugPlatforms[0].id,
    //       date: new Date(),
    //       description: '',
    //     };

    //     this.store.dispatch(
    //       SetAlertAction({
    //         payload: {
    //           message: 'Bug Reported Successfully',
    //           status: 'success',
    //           hidden: false,
    //         },
    //       })
    //     );
    //   });

    // // console.log(this.formData);
    // console.log({
    //   // ...this.formData,
    //   platformses: { platformId, platformName, platformStatus },
    //   label: this.formData.title,
    //   bugReview: this.formData.description || 'No data',
    // });

    // console.log(platform);

    this.isLoadingOne = true;

    // console.log(this.formData);
    setTimeout(() => (this.isLoadingOne = false), 1000);

    // const formData = new FormData();
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // this.fileList.forEach((file: any) => {
    //   formData.append('files[]', file);
    // });

    // console.log(formData);

    // return null;
    // this.uploading = true;
    // // You can use any AJAX library you like
    // const req = new HttpRequest(
    //   'POST',
    //   'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //   formData,
    //   {
    //     // reportProgress: true
    //   }
    // );
    // this.http
    //   .request(req)
    //   .pipe(filter((e) => e instanceof HttpResponse))
    //   .subscribe(
    //     () => {
    //       this.uploading = false;
    //       this.fileList = [];
    //       this.msg.success('upload successfully.');
    //     },
    //     () => {
    //       this.uploading = false;
    //       this.msg.error('upload failed.');
    //     }
    //   );

    // this.formData.get("title").

    // console.log(this.formData);
  };
}
