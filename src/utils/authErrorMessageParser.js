export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid e-mail address';
    case 'auth/email-already-exists':
      return 'User already registered';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/weak-password':
      return 'Password too weak';
    default:
      return errorCode;
  }
}
