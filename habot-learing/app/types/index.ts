export interface Provider {
  id: string;
  name: string;
  specialization: string;
  imageUrl: string;
  location: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  contactEmail: string;
  phoneNumber: string;
}


export interface PaginationProps {
  totalPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number,
}