import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { authenticationHeader } from 'src/app/libs/appConstants';
import { BugsService, PlatformsService } from 'src/app/services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { ConstantsModel } from 'src/app/store/models';
// import { getLocalProfile } from 'src/app/libs/commonFunction';

// import { platforms } from 'libs/constants';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.less'],
})
export class AddBugComponent implements OnInit {
  inputValue: string | null = null;
  textValue: string | null = null;
  private serverPlatforms;

  public formData = {
    bugTitle: '',
    platform: 'mobile-app',
    date: new Date(),
    description: '',
  };

  // public platformOptions;
  public maxFileSize: number = 5120;

  isLoadingOne = false;
  isLoadingTwo = false;

  public bugPlatforms;

  uploading = false;
  fileList: NzUploadFile[] = [];

  private constants: Observable<ConstantsModel>;

  constructor(
    private store: Store<AppState>,
    private bugsServices: BugsService
  ) {
    this.constants = this.store.select('constants');
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    // ! Enforce maximum limit of files
    if (this.fileList.length < 5) {
      this.fileList = this.fileList.concat(file);
    }
    return false;
  };

  submitBug = (): void => {
    // ! unnecessary code, to be sent
    const { platformId, platformName, platformStatus } =
      this.serverPlatforms.find((x) => x.id == this.formData.platform);

    this.bugsServices
      .addBug({
        ...this.formData,
        label: this.formData.bugTitle,
        bugReview: this.formData.description || 'No data',
        platformses: { platformId, platformName, platformStatus },
      })
      .subscribe();

    // // console.log(this.formData);
    // console.log({
    //   // ...this.formData,
    //   platformses: { platformId, platformName, platformStatus },
    //   label: this.formData.bugTitle,
    //   bugReview: this.formData.description || 'No data',
    // });

    // console.log(platform);

    this.isLoadingOne = true;

    // console.log(this.formData);
    setTimeout(() => (this.isLoadingOne = false), 1000);

    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });

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
  };

  ngOnInit(): void {
    this.constants.subscribe(({ platforms }) => {
      this.bugPlatforms = platforms.filter((x) => x.disabled !== true);
      this.formData.platform = this.bugPlatforms[0].id; // <=  set default bugPlatform
    });
  }
}
