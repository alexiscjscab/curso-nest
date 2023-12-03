import {IsString, IsOptional} from 'class-validator'


export class UpdateCarDto {

/*
  @IsOptional()
  @IsString()
  @IsUUID()
  readonly id?: string
  
*/
  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}