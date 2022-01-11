export class CreateCatDto {
  name: string;
  user: {
    id: number;
  };
  color: string;
  weight: number;
}
