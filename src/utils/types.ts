export interface singleTimelineType {
  date: string;
  title: string;
  description: string;
}
export interface singleCartigoryType {
  id: number;
  name: string;
}
export interface apiContactData {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}

export interface apiRegistrationData {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: string;
  privacy_poclicy_accepted: boolean;
}
