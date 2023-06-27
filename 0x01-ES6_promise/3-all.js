import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // craete user
  return createUser()
    .then(({ firstName, lastName }) => {
      // if creating user was successful upload photo
      uploadPhoto()
        .then(({ body }) => console.log(`${body} ${firstName} ${lastName}`))
        .catch((err) => new Error(err));
    })
    .catch((err) => new Error(err));
}
