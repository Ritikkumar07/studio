export interface Module {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title:string;
  description: string;
  longDescription: string;
  instructor: string;
  instructorBio: string;
  category: string;
  image: string;
  modules: Module[];
}

export interface Category {
  id: string;
  name: string;
}
