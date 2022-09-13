import { Component, OnInit } from '@angular/core';
import { platforms } from 'libs/constants';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.less'],
})
export class AddBugComponent implements OnInit {
  inputValue: string | null = null;
  textValue: string | null = null;

  public platformOptions = platforms;

  constructor(private msg: NzMessageService) {}

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    try {
      const { type, size } = file;

      console.log(file);

      if (!type || type?.split('/')[0] !== 'image') throw 'Upload only images';

      // ? check if image size is greater than 5mb
      if (!size || 34988 / 1024 > 5120)
        console.log('Image size too exceed 5mb or is invalid');

      console.log(fileList.length, { type, size });

      // console.log(`Image ${34988 / 1024} ${size} ${`);

      // const status = file.status;
      // if (status !== 'uploading') {
      //   console.log(file, fileList);
      // }
      // if (status === 'done') {
      //   this.msg.success(`${file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   this.msg.error(`${file.name} file upload failed.`);
      // }
    } catch ({ errLabel }) {
      this.msg.error(`${errLabel}`);
    }
  }
  ngOnInit(): void {}
}
