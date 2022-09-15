import { Component, OnInit } from '@angular/core';
import { platforms } from 'libs/constants';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';

import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.less'],
})
export class AddBugComponent implements OnInit {
  inputValue: string | null = null;
  textValue: string | null = null;

  public platformOptions = platforms;
  public maxFileSize: number = 5120;

  // constructor(private msg: NzMessageService) {}

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

  // beforeUpload = (singleFile: File, fileList: File[]): boolean => {
  //   // if (this.form.controls.files as FormArray)
  //   // const fileNames = this.form.controls.fileNames.value as [];
  //   // if (fileNames.length === this.fileMaxQuantity) {
  //   //   this.snackBarService.warning(this.localizationService.instant('::FileUpload:NumberFilesExceedsAllowed'), true);
  //   //   return false;
  //   // } else {
  //   //   for (let i = 0; i <= fileList.length; i++) {
  //   //     const file = fileList[i];
  //   //   // _.each(fileList, (file) => {
  //   //     if (this.form.controls.fileNames.value.length === this.fileMaxQuantity) {
  //   //       this.snackBarService.warning(this.localizationService.instant('::FileUpload:NumberFilesExceedsAllowed'));
  //   //       break;
  //   //       // return false;
  //   //     } else {
  //   //       const tempStackSize = this.actualFileStackSize + file.size;
  //   //       if (file.size > this.fileMaxSize || tempStackSize > this.fileMaxSize) {
  //   //         this.snackBarService.warning(this.localizationService.instant('::FileUpload:FileTooHeavy'), true);
  //   //         return false;
  //   //       } else if ( !this.fileList.some( p => p.name === file.name ) ) {
  //   //         const ext = this.extensionPipe.transform(file.name);
  //   //         let control: FormControl;
  //   //         (this.form.controls.files as FormArray).push(new FormControl(file.name));
  //   //         (!this.regexWithExt.test(file.name)) ?
  //   //           this.fileListRequired.push(true) : // debe cambiar filename
  //   //           this.fileListRequired.push(false);

  //   //         control = new FormControl(file.name.replace(ext, ''),
  //   //           [ Validators.pattern(this.regex),
  //   //             Validators.required,
  //   //             Validators.maxLength(this.fileNameMaxLength - ext.length),
  //   //             this.fileNameValidator()]);
  //   //         control.markAllAsTouched();
  //   //         (this.form.controls.fileNames as FormArray).push(control);
  //   //         // fileNames.push(file.name);
  //   //         this.fileList.push(file);
  //   //         this.actualFileStackSize = tempStackSize;
  //   //       }
  //   //     }
  //   //   }
  //   //   // fileList.forEach((file) => {
  //   //   // });
  //   // }
  //   return false;
  // };

  ngOnInit(): void {}
}
