class User {
  public id!: number;
  public name!: string;
  public nickname!: string;
  public password! : string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

const user: User = {
  id: 1,
  name: "name",
  nickname: "nickname",
  password: "password",
  createdAt: new Date(),
  updatedAt: new Date(),
}