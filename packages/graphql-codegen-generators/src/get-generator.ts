import { GeneratorConfig } from './types';
import TypescriptSingleFile from './typescript-single-file/config';
import TypescriptMultiFile from './typescript-multi-file/config';
import TypescriptMultiFileCustomized from './typescript-multi-file-customized/config';

export const definitions = {
  // TypeScript single file
  ts: TypescriptSingleFile,
  typescript: TypescriptSingleFile,
  'ts-single': TypescriptSingleFile,
  'typescript-single': TypescriptSingleFile,
  // TypeScript multiple files
  'ts-multiple': TypescriptMultiFile,
  'typescript-multiple': TypescriptMultiFile,
  'typescript-multiple-customized': TypescriptMultiFileCustomized,
};

export function getGeneratorConfig(name: string): GeneratorConfig {
  return definitions[name];
}
