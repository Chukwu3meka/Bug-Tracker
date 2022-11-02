interface formDataErrorField {
  status: number;
  message: string;
  title: string;
  validator: string;
}

export interface labelDataInterface {
  title: formDataErrorField;
  platform: formDataErrorField;
  description: formDataErrorField;
  date: formDataErrorField;
}
