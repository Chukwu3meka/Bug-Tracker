import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { authenticationHeader } from 'src/app/libs/appConstants';
import { PlatformsService } from 'src/app/services';
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

  public formData = {
    bugTitle: '',
    platform: 'mobile-app',
    date: new Date(),
    description: '',
  };

  public platformOptions;
  public maxFileSize: number = 5120;

  isLoadingOne = false;
  isLoadingTwo = false;

  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private platformsServices: PlatformsService
  ) {}

  beforeUpload = (file: NzUploadFile): boolean => {
    // ! Enforce maximum limit of files
    if (this.fileList.length < 5) {
      this.fileList = this.fileList.concat(file);
    }
    return false;
  };

  submitBug = (): void => {
    console.log(this.formData);

    this.isLoadingOne = true;

    // console.log(this.formData);
    setTimeout(() => (this.isLoadingOne = false), 1000);

    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });

    console.log(formData);

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
    // const { role } = getLocalProfile('profile', localStorage);
    // const platforms = getLocalProfile('platforms', localStorage);

    // console.log();

    this.platformsServices.getPlatforms().subscribe((res) => {
      console.log(res);

      //   {
      //     "platformId": 1,
      //     "platformName": "Mobile App",
      //     "platformStatus": "ACTIVE"
      // },
    });

    this.platformOptions = [
      { id: 'mobile-app', name: 'Mobile App' },
      { id: 'internet-banking', name: 'Internet Banking' },
      { id: 'ussd', name: 'USSD' },
      { id: 'form-a', name: 'FORM A' },
      { id: 'x-path', name: 'XPath' },
      { id: 'cip', name: 'CIP' },
      { id: 'workflow', name: 'Workflow' },
      { id: 'appraisal', name: 'Appraisal' },
    ];

    // this.platforms = JSON.parse();

    // console.log({ role, platforms });
  }
}
