export class VolunteerAnnouncement {
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
    dateCreated: null;
    userEmail: String;
  }
  anncmntOrganization: null;
}
