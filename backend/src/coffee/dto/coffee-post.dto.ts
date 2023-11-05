import {
  IsDefined,
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Length,
  Matches,
} from 'class-validator';
import { CoffeeType, regExp, textLength } from 'src/common/validations';
import { IsUnique } from 'src/utils/custom-decorators/is-unique/is-unique';

export class CoffeePostDto {
  @IsUnique({ tableName: 'coffee', column: 'name' })
  @IsString()
  @IsDefined()
  @Length(textLength.min, textLength.short)
  @Matches(regExp.name)
  name!: string;

  @IsEnum(CoffeeType)
  @IsDefined()
  type!: string;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  price!: number;

  @IsString()
  @IsDefined()
  @Length(textLength.min, textLength.large)
  @Matches(regExp.name)
  description!: string;

  @IsUrl()
  @IsDefined()
  imageUrl!: string;
}
