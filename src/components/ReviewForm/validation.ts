import { makeValidate } from 'mui-rff';
import { schema } from './config';

const validateFunction = makeValidate(schema);

export default validateFunction;