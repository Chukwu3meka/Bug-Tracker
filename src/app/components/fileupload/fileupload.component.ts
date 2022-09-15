import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {
  Pageable,
  IPagedContent,
} from 'src/app/module/global/interface/IPagedContent';
import {
  ISpotConverted,
  ISpotConvertedExtra,
} from '../../shared/interfaces/ISpotConverted';
import { ConvertForwardToSpotService } from '../../shared/service/convert-forward-to-spot.service';
import { ModalService } from 'src/app/module/global/service/modal-service.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadFile, NzOptionComponent } from 'ng-zorro-antd';
import { MoneyPipe } from 'src/app/module/global/pipe/money.pipe';
import {
  IUpdateConversion,
  ConversionData,
} from '../../shared/interfaces/IUpdateConversion';
import { SharedDataService } from 'src/app/module/global/service/shared-data.service';
import { CoreBidDollarODAttachments } from '../../../dollar-draft/helpers/interface/IOverdraft';
import { IFiles } from '../../shared/interfaces/IFiles';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-rejected-conversions',
  templateUrl: './rejected-conversions.component.html',
  styleUrls: ['./rejected-conversions.component.css'],
})
export class FileuploadComponent implements OnInit {
  loading = {
    spotConvertedRecords: false,
    updatingRecord: false,
  };
  defaultPage: Pageable = {
    pageSize: 20,
    pageNumber: 0,
  };
  spotConvertedRecords: IPagedContent<ISpotConvertedExtra> = {
    content: [],
    last: true,
    totalPages: 0,
    pageable: this.defaultPage,
    totalElements: 0,
  };
  totalRecordsSummary = '';
  searchFormValues = {
    formNumber: '',
    customerName: '',
    fundingRef: '',
    transactionType: null,
  };
  premiereFileList: UploadFile[] = [];
  deuxiemeFileList: UploadFile[] = [];
  maxFileSize = 0;
  maxFileSizeDisplay = 0;
  drawerVisible = false;
  previewVisible = false;
  pdfFile = '';
  previousFile = '';
  showRejectedRow: boolean = true;
  showUploadRow: boolean = false;
  convertedRecordAttachments: CoreBidDollarODAttachments[] = [];
  tabName: string;
  rejectedRecordForm: FormGroup;
  temporaryHolder = {
    crossRate: null,
  };
  fileList: UploadFile[] = [];
  newFileList: IFiles = {
    fileList1: {},
    fileList2: {},
    fileList3: {},
    fileList4: {},
  };
  isDisabled = false; // property handles disabling all checkboxes in a list
  isIndeterminate: boolean = false;
  allChecked: boolean;
  checkedItem: boolean = false;
  enableCheckAll: boolean;
  checkedItems: ISpotConvertedExtra[];
  documentTabNames: string[] = [
    'Contract Letter',
    'Application Letter',
    'Approval Letter',
    'Others',
  ];
  constructor(
    private convertForwardToSpotService: ConvertForwardToSpotService,
    private modalService: ModalService,
    private modal: NzModalService,
    private formBuild: FormBuilder,
    private sharedDataService: SharedDataService,
    private message: NzMessageService
  ) {
    this.rejectedRecordForm = this.formBuild.group({
      forwardAmount: ['', [Validators.required, Validators.min(0.01)]],
      spotRate: ['', [Validators.required, Validators.min(0.01)]],
      ngnEquiv: ['', [Validators.required, Validators.min(0.01)]],
      spotAmt: ['', [Validators.required, Validators.min(0.01)]],
    });
  }
  ngOnInit() {
    this.getSpotConvertedRecords();
    this.getMaximumFileSizeInBytes();
    this.rejectedRecordForm.controls['forwardAmount'].valueChanges.subscribe(
      (term) => {
        let new3rdValue = term * this.temporaryHolder.crossRate;
        let _1stNgnEquiv =
          term * this.rejectedRecordForm.controls['spotRate'].value;
        this.rejectedRecordForm.patchValue({
          spotAmt: new3rdValue,
          ngnEquiv: _1stNgnEquiv,
        });
      }
    );
    this.rejectedRecordForm.controls['spotRate'].valueChanges.subscribe(
      (term) => {
        let _2ndNgnEquiv =
          term * this.rejectedRecordForm.controls['forwardAmount'].value;
        let new3rdValue =
          this.rejectedRecordForm.controls['forwardAmount'].value *
          this.temporaryHolder.crossRate;
        this.rejectedRecordForm.patchValue({
          ngnEquiv: _2ndNgnEquiv,
          spotAmt: new3rdValue,
        });
      }
    );
  }
  getMaximumFileSizeInBytes() {
    this.sharedDataService
      .getConfigByKey('BID_LETTER_MAX_FILE_SIZE_IN_BYTES')
      .subscribe((response) => {
        if (response.success) {
          this.maxFileSize = +response.data.value;
          this.maxFileSizeDisplay = parseInt(
            (this.maxFileSize / 1024 / 1000).toString()
          );
        }
      });
  }
  setPage(pageNumber: number) {
    if (pageNumber < 0) {
      return;
    }
    this.spotConvertedRecords.pageable.pageNumber = pageNumber - 1;
    this.getSpotConvertedRecords();
  }
  getSpotConvertedRecords() {
    this.loading.spotConvertedRecords = true;
    let params = new HttpParams();
    params = params.append(
      'page',
      this.spotConvertedRecords.pageable.pageNumber + ''
    );
    params = params.append(
      'size',
      this.spotConvertedRecords.pageable.pageSize + ''
    );
    this.convertForwardToSpotService.getRejectedRecords(params).subscribe(
      (response) => {
        this.loading.spotConvertedRecords = false;
        if (response.success) {
          this.spotConvertedRecords = response.data;
          this.totalRecordsSummary = this.spotConvertedRecords.totalElements
            ? `Total Records Retrieved: ${this.spotConvertedRecords.totalElements}`
            : '';
        }
      },
      (err) => {
        this.loading.spotConvertedRecords = false;
        this.modalService.error(err.error.message);
      }
    );
  }
  showDeleteConfirm() {
    const idToDelete = this.spotConvertedRecords.content
      .filter((data) => data.checked)
      .map((data) => data.id);
    const data = {
      spotId: idToDelete,
    };
    //console.log(data)
    this.modal.confirm({
      nzTitle:
        idToDelete.length <= 1 ? 'Cancel SPOT Record' : 'Cancel SPOT Records',
      nzContent:
        idToDelete.length <= 1
          ? `<b style="color: red;">Are you sure you want to cancel this record?</b>`
          : `<b style="color: red;">Are you sure you want to cancel these records?</b>`,
      nzOkText: idToDelete.length <= 1 ? 'Cancel Record' : 'Cancel Records',
      nzOkType: 'primary',
      nzOnOk: () => {
        console.log('OK');
        this.convertForwardToSpotService.cancelSPOTrecord(data).subscribe(
          (response: any) => {
            if (response.success) {
              this.createDeleteMessage(idToDelete.length);
              this.modal.closeAll();
              this.getSpotConvertedRecords();
            }
          },
          (err) => {
            this.modalService.error(err.error.message);
          }
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
  createDeleteMessage(input: number) {
    if (input === 1) {
      this.message.create(
        'success',
        `${input} SPOT Record Cancelled Successfully`
      );
    } else {
      this.message.create(
        'success',
        `${input} SPOT Records Cancelled Successfully`
      );
    }
  }
  checkAll(event) {
    this.spotConvertedRecords.content.forEach((data) => {
      if (!data.disabled) {
        data.checked = event;
      }
    });
    this.refreshStatus();
  }
  refreshStatus(event?: boolean) {
    const validData = this.spotConvertedRecords.content.filter(
      (value) => !value.disabled
    );
    const allChecked =
      validData.length > 0 &&
      validData.every((value) => value.checked === true);
    const checkedItems = validData.filter((value) => value.checked === true);
    const allUnChecked = validData.every((value) => value.checked === false);
    const numberOfChecked = checkedItems.length;
    this.allChecked = allChecked;
    this.checkedItems = checkedItems;
    this.checkedItem = numberOfChecked > 0;
    // Indeterminate: One item is checked but not all items are checked
    this.isIndeterminate = this.checkedItem && !allChecked;
  }
  createRejectionModal(
    modalContent: TemplateRef<{}>,
    data: ISpotConverted
  ): void {
    let selectedRecordId = data.id.toString();
    this.getPreviousLetter(selectedRecordId);
    if (data.thirdCurrencyEquivalent === null) {
      data.thirdCurrencyEquivalent =
        data.forwardAmount * this.temporaryHolder.crossRate;
    }
    this.rejectedRecordForm.patchValue({
      forwardAmount: data.forwardAmount,
      spotRate: data.spotRate,
      ngnEquiv: data.ngnEquivalent,
      spotAmt: data.thirdCurrencyEquivalent,
    });
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Rejected Conversions',
      nzContent: modalContent,
      nzWidth: 600,
      nzWrapClassName: 'vertical-center-modal',
      nzClosable: false,
      nzFooter: [
        {
          label: 'Close',
          onClick: () => (
            this.modal.closeAll(), this.getSpotConvertedRecords()
          ),
        },
        {
          label: 'Update Record',
          type: 'primary',
          onClick: () => {
            //console.log(this.rejectedRecordForm)
            if (!this.newFileList.fileList1.file) {
              this.modalService.warning(
                'Upload Contract Letter',
                'Update Error'
              );
            } else if (!this.newFileList.fileList2.file) {
              this.modalService.warning(
                'Upload Application Letter',
                'Update Error'
              );
            } else if (!this.newFileList.fileList3.file) {
              this.modalService.warning(
                'Upload Approval Letter',
                'Update Error'
              );
            } else if (!this.rejectedRecordForm.valid) {
              this.modalService.warning(
                'Ensure all fields are entered correctly',
                'Update Error'
              );
            } else {
              this.loading.updatingRecord = !this.loading.updatingRecord;
              const { forwardAmount, spotRate, ngnEquiv, spotAmt } =
                this.rejectedRecordForm.getRawValue();
              const updatedRecord: ConversionData = {
                id: data.id,
                spotUsdAmount: forwardAmount,
                spotRate: spotRate,
                ngnEquiv: ngnEquiv,
                spotAmt: spotAmt,
              };
              this.updateRejectedRecord(updatedRecord);
            }
          },
        },
      ],
    });
  }
  getPreviousLetter(selectedRecordId: string) {
    this.convertForwardToSpotService
      .getSpotConvertedRecordDetails(selectedRecordId)
      .subscribe(
        (response) => {
          if (response.success) {
            this.convertedRecordAttachments =
              response.data.coreBidDollarODAttachments;
            //.filter(attachment => attachment.description === 'contractLetter');
            this.temporaryHolder.crossRate = response.data.crossRate;
          }
        },
        (err) => {}
      );
  }
  amountFormatter = (value: number) => {
    if (!value) {
      return 0;
    }
    return `${new MoneyPipe().transform(value, ' ')}`;
  };
  updateRejectedRecord(updatedRecord: ConversionData) {
    const formData = new FormData();
    const fileA = this.newFileList.fileList1.file[0] as any;
    const fileB = this.newFileList.fileList2.file[0] as any;
    const fileC = this.newFileList.fileList3.file[0] as any;
    formData.append('contractLetter', fileA);
    formData.append('applicationLetter', fileB);
    formData.append('attachment', fileC);
    if (this.newFileList.fileList4.file) {
      const fileD = this.newFileList.fileList4.file[0] as any;
      formData.append('others', fileD);
    }
    formData.append('spot', JSON.stringify(updatedRecord));
    console.log(updatedRecord);
    this.convertForwardToSpotService.updateForwardToSpot(formData).subscribe(
      (response: any) => {
        if (response.success) {
          this.loading.updatingRecord = !this.loading.updatingRecord;
          this.getSpotConvertedRecords();
          this.rejectedRecordForm.reset();
          this.modal.closeAll();
          this.modalService.success('Successfully Updated Record');
        }
      },
      (err) => {
        this.loading.updatingRecord = !this.loading.updatingRecord;
        this.modalService.error(err.error.message);
      }
    );
  }
  onFileRemove = (file: UploadFile) => {
    setTimeout(() => console.log(this.premiereFileList), 2500);
    return true;
  };
  beforeFirstUpload = (file: UploadFile): boolean => {
    this.newFileList.fileList1.file = [file];
    let [fileUpload] = this.newFileList.fileList1.file;
    if (this.maxFileSize && fileUpload.size > this.maxFileSize) {
      this.modalService.error(
        `File Attachment must be ${this.maxFileSizeDisplay}MB or less`
      );
      this.newFileList.fileList1.file = [];
    }
    if (
      fileUpload.name &&
      !fileUpload.name.toLocaleLowerCase().endsWith('.pdf')
    ) {
      this.modalService.error('PDF File Attachments Only');
      this.newFileList.fileList1.file = [];
    }
    return false;
  };
  beforeSecondUpload = (file: UploadFile): boolean => {
    this.newFileList.fileList2.file = [file];
    let [fileUpload] = this.newFileList.fileList2.file;
    if (this.maxFileSize && fileUpload.size > this.maxFileSize) {
      this.modalService.error(
        `File Attachment must be ${this.maxFileSizeDisplay}MB or less`
      );
      this.newFileList.fileList2.file = [];
    }
    if (
      fileUpload.name &&
      !fileUpload.name.toLocaleLowerCase().endsWith('.pdf')
    ) {
      this.modalService.error('PDF File Attachments Only');
      this.newFileList.fileList2.file = [];
    }
    return false;
  };
  beforeThirdUpload = (file: UploadFile): boolean => {
    this.newFileList.fileList3.file = [file];
    let [fileUpload] = this.newFileList.fileList3.file;
    if (this.maxFileSize && fileUpload.size > this.maxFileSize) {
      this.modalService.error(
        `File Attachment must be ${this.maxFileSizeDisplay}MB or less`
      );
      this.newFileList.fileList3.file = [];
    }
    if (
      fileUpload.name &&
      !fileUpload.name.toLocaleLowerCase().endsWith('.pdf')
    ) {
      this.modalService.error('PDF File Attachments Only');
      this.newFileList.fileList3.file = [];
    }
    return false;
  };
  beforeFourthUpload = (file: UploadFile): boolean => {
    this.newFileList.fileList4.file = [file];
    let [fileUpload] = this.newFileList.fileList4.file;
    if (this.maxFileSize && fileUpload.size > this.maxFileSize) {
      this.modalService.error(
        `File Attachment must be ${this.maxFileSizeDisplay}MB or less`
      );
      this.newFileList.fileList4.file = [];
    }
    if (
      fileUpload.name &&
      !fileUpload.name.toLocaleLowerCase().endsWith('.pdf')
    ) {
      this.modalService.error('PDF File Attachments Only');
      this.newFileList.fileList4.file = [];
    }
    return false;
  };
  previewFirstPDFDocument(event) {
    event.stopPropagation();
    const [excelFile] = this.premiereFileList;
    this.drawerVisible = true;
    this.pdfFile = URL.createObjectURL(excelFile);
  }
  closeDrawer() {
    this.drawerVisible = false;
    setTimeout(() => (this.pdfFile = ''), 1000);
  }
  closeDrawerTwo() {
    this.previewVisible = false;
  }
  showPreviousFile(filename: string, b: string) {
    this.previewVisible = true;
    this.tabName = b;
    this.previousFile = 'data:application/pdf;base64,' + filename;
  }
  previewPDFDocument(event, fileList) {
    event.stopPropagation();
    const [file] = fileList;
    this.drawerVisible = true;
    this.pdfFile = URL.createObjectURL(file);
  }
  onFileRemove1 = (file: UploadFile) => {
    this.newFileList.fileList1.file = [];
    return true;
  };
  onFileRemove2 = (file: UploadFile) => {
    this.newFileList.fileList2.file = [];
    return true;
  };
  onFileRemove3 = (file: UploadFile) => {
    this.newFileList.fileList3.file = [];
    return true;
  };
  onFileRemove4 = (file: UploadFile) => {
    this.newFileList.fileList4.file = [];
    return true;
  };
}
