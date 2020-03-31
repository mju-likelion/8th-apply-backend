export function isUser(request: any) {
  if (!request.user) throw Error('Please login first.');
  return;
}

export function isStaff(request: any) {
  isUser(request);
  if (!request.user.isStaff) throw Error('You are not staff!');
  return;
}
