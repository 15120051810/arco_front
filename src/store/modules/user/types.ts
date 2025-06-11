
export interface UserState {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  introduction?: string;
  personalWebsite?: string;
  jobName?: string;
  organizationName?: string;
  locationName?: string;
  phone?: string;
  registrationDate?: string;
  accountId?: string;
  certification?: number;
  homepage?: string;
  role: string[];
  permission:string[];
}


export interface LoginResponse {
  code: number,
  mes: string,
  ok: Boolean,
  data: {
    username: string;
    name: string;
    token: string;
    refresh: string;
  } 
}

export interface SkipAuthLoginResponse {
    username: string;
    router_obj: object;
    token: string;
    refresh: string;
}