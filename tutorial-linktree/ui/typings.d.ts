type DTO = {
  data: Profile;
  success: boolean;
  message: string;
};

type Profile = {
  id: number;
  name: string;
  userName: string;
  profilePictureUrl: string;
  links: Link[];
  socials: Social[];
};

type Link = {
  id: number;
  profileModelId: number;
  title: string;
  url: string;
};

type Social = {
  id: number;
  profileModelId: number;
  platform: string;
  url: string;
};
