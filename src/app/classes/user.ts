// check usersUrl (ApiService) to get idea on src data
export class User {
    id: number; // `0` unused?, continuous numeration? but we do not count on that
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        // floats, positive and negative
        lat: number;
        lng: number;
      }
    }
    phone: string; // may contain hyphens
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
    // these are not present in the src
    noOfPosts = 0;
    closestNeighbourID = null;
}
