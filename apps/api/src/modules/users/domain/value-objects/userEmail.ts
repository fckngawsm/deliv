import { ValueObject } from "@api/modules/comon/ValueObject";

interface UserEmailProps {
  value: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
  private constructor(props: UserEmailProps) {
    super(props);
  }

  get value() {
    return this.props.value;
  }

  public static create(email: string): UserEmail {
    if (!email || email.trim().length === 0) {
      throw new Error("Email cannot be empty");
    }

    const normalized = email.toLowerCase().trim();

    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!emailRegex.test(normalized)) {
      throw new Error("Invalid email format");
    }

    return new UserEmail({ value: normalized });
  }
}
