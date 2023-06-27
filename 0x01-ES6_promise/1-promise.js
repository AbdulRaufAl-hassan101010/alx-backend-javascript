export default function (success) {
  return new Promise((relsove, reject) => {
    if (success === true) {
      return relsove({
        status: 200,
        body: 'Success',
      });
    }
    return reject(new Error('The fake API is not working currently'));
  });
}
