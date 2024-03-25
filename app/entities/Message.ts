export default interface Message {
  id: number,
  role: string,
  content: string,
  image?: string
}