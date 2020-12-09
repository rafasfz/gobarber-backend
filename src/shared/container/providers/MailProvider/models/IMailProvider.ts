export default interface IMailProvide {
  sendMail(to: string, body: string): Promise<void>;
}
