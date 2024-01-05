import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([signUpUser, uploadPhoto]) => {
      const reslist = [];
      const obj1 = {
        status: signUpUser.status,
        value: signUpUser.value,
      };
      reslist.push(obj1);
      const obj2 = {
        status: uploadPhoto.status,
        value: uploadPhoto.value,
      };
      reslist.push(obj2);
      return reslist;
    });
}
