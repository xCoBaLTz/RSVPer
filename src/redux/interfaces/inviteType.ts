export default interface InviteType {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  rsvpStatus: boolean;
  createdAt: Date;
  updatedAt: Date;
}
