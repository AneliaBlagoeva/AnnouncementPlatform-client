export class StudentUser {
    email: string;
    user:
    {
      email: string;
      phone: string;
      city: string;
      country: string;
      fName: string;
      lName: string;
      role:
      {
      id:null;
      description: string;
      }
    }
    password: string;
    grade: null;
    degree: 
    {
      id: Number;
      description: String;
    };
    university: string;
    program: string;
    year: Number;
  }