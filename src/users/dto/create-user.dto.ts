import { IsEmail, IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
	@IsEmail()
	@IsNotEmpty({ message: "Email cannot be empty" })
    email: string;

	@IsNumber({}, {message: 'Age must be a number'})
    age: number;

    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    country: string;
}
