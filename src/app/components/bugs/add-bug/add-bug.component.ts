import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { getLocalProfile } from 'src/libs/commonFunction';

// import { platforms } from 'libs/constants';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.less'],
})
export class AddBugComponent implements OnInit {
  inputValue: string | null = null;
  textValue: string | null = null;

  public platformOptions;
  public maxFileSize: number = 5120;

  isLoadingOne = false;
  isLoadingTwo = false;

  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  beforeUpload = (file: NzUploadFile): boolean => {
    // ! Enforce maximum limit of files
    if (this.fileList.length < 5) {
      this.fileList = this.fileList.concat(file);
    }
    return false;
  };

  submitBug(): null {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);

    return null;

    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest(
      'POST',
      'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      formData,
      {
        // reportProgress: true
      }
    );
    this.http
      .request(req)
      .pipe(filter((e) => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }

  ngOnInit(): void {
    const { user } = getLocalProfile('profile', localStorage);

    // this.platforms = JSON.parse();
  }
}
