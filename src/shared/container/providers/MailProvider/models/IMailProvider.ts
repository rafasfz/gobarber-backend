import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvide {
  sendMail(data: ISendMailDTO): Promise<void>;
}
