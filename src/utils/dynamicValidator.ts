import { ValidationOptions, registerDecorator } from 'class-validator';
export const DynamicValidator = (
  validator: (value: any) => boolean,
  validationOptions?: ValidationOptions,
) => {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'DynamicValidator',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate: validator,
      },
    });
  };
};
