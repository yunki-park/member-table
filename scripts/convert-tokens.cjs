const fs = require('fs');
const path = require('path');

// tokens.json 읽기
const tokens = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../tokens/tokens.json'), 'utf-8'),
);

// 토큰 구조를 재귀적으로 변환하는 함수
function flattenTokens(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value.value !== 'undefined') {
      // 실제 값이 있는 경우
      result[key] = value.value;
    } else if (typeof value === 'object' && value !== null) {
      // 또 다른 그룹이 있는 경우 (재귀적으로 펼치기)
      result[key] = flattenTokens(value);
    }
  }

  return result;
}

// 변환한 결과
const flattened = flattenTokens(tokens);

// 변환된 토큰을 TypeScript 파일로 출력
const output = [
  '// Auto-generated from tokens.json. DO NOT EDIT MANUALLY.',
  '',
  'export const designTokens = ',
  JSON.stringify(flattened, null, 2) + ';',
];

const outputPath = path.resolve(__dirname, '../src/styles/design-tokens.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output.join('\n'));

console.log('design-tokens.ts 생성 완료');
