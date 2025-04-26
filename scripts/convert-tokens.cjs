const fs = require('fs');
const path = require('path');

// 들여쓰기 단위
const INDENT = '  '; // 2칸

// tokens.json 읽기
const tokens = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../tokens/tokens.json'), 'utf-8'),
);

// 변환할 문자열 만들기
const output = [
  '// Auto-generated from tokens.json. DO NOT EDIT MANUALLY.',
  '',
  'export const designTokens = {',
];

// 들여쓰기 유틸 함수
function indent(level) {
  return INDENT.repeat(level);
}

// tokens 객체를 순회하며 변환
for (const [groupName, groupTokens] of Object.entries(tokens)) {
  output.push(`${indent(1)}${groupName}: {`);

  for (const [tokenName, tokenValue] of Object.entries(groupTokens)) {
    if (
      typeof tokenValue === 'object' &&
      'value' in tokenValue &&
      'type' in tokenValue
    ) {
      output.push(`${indent(2)}${tokenName}: '${tokenValue.value}',`);
    } else if (typeof tokenValue === 'object') {
      output.push(`${indent(2)}${tokenName}: {`);
      for (const [nestedName, nestedValue] of Object.entries(tokenValue)) {
        if (
          typeof nestedValue === 'object' &&
          'value' in nestedValue &&
          'type' in nestedValue
        ) {
          output.push(`${indent(3)}${nestedName}: '${nestedValue.value}',`);
        }
      }
      output.push(`${indent(2)}},`);
    }
  }

  output.push(`${indent(1)}},`);
}

output.push('};');

// 최종 파일 쓰기
const outputPath = path.resolve(__dirname, '../src/styles/design-tokens.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output.join('\n'));

console.log('design-tokens.ts 생성 완료');
