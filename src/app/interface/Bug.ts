export interface Bug {
  id: string;
  severity: string;
  created: string;
  platform: string;
  reporter: Reporter;
  label: string;
  status: string;
  description: string;
  developer?: Developer;
}

export interface Developer {
  img: string;
  name: string;
}

export interface Reporter {
  img: string;
  name: string;
  email: string;
}
