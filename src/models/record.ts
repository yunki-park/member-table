/**
 * 레코드(Record)는 회원 한 명에 대한 정보를 나타내며, 총 6개의 필드로 구성되어 있습니다.
 * 각 필드는 key와 value(string 또는 boolean)로 관리됩니다.
 *
 * - value 타입
 *   - string: 텍스트 기반 입력 (이름, 주소, 메모, 가입일, 직업)
 *   - boolean: 체크 여부 입력 (이메일 수신 동의)
 *
 * - 예시
 * {
 *   name: '박윤기',
 *   address: '서울시 용산구',
 *   memo: '프론트엔드 지원자',
 *   joinDate: '2025-04-25',
 *   job: '개발자',
 *   agreeToEmail: false
 * }
 */

export type RecordData = {
  [key: string]: string | boolean;
};
