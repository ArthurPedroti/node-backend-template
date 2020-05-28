class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statuscode = 400) {
    this.message = message;
    this.statusCode = statuscode;
  }
}

export default AppError;
