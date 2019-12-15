export class ScholarshipAnnouncement {
  anncmntID: null;
  anncmnt: {
    anncmntId: null;
    anncmntName: null;
    status:
    {
      statusId: Number;
      statusName: String;
    };
    category:
    {
      categoryId: Number;
      categoryName: String;
    };
    description: null;
    url: null;
    dateCreated: String;
    userEmail: String;
  }
  minGrade: null;
  scholarshipAward: null;
  requirements: null;
  programAllowed: null;
  universityAllowed: null;
  yearAllowed: null;
  degreeAllowed: null;
}
