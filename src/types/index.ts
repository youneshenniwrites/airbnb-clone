export type Listing = {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  price: number;
  userId: string;
};

export type RequestBody = {
  email: string;
  name: string;
  password: string;
};
