const fs = require('fs');
const path = require('path');

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

// tokens 객체를 순회하며 변환
for (const [groupName, groupTokens] of Object.entries(tokens)) {
  output.push(`  ${groupName}: {`);
  for (const [tokenName, { value }] of Object.entries(groupTokens)) {
    output.push(`    ${tokenName}: '${value}',`);
  }
  output.push(`  },`);
}

output.push('};');

// 최종 파일 쓰기
const outputPath = path.resolve(__dirname, '../src/styles/design-tokens.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output.join('\n'));

console.log('✅ design-tokens.ts 생성 완료');
