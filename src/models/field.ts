/**
 * 필드(Field)는 레코드를 이루고 있는 각 속성들을 의미하며,
 * 회원 레코드에는 이름, 주소, 메모, 가입일, 직업, 이메일 수신 동의 총 6개 필드가 존재합니다.
 *
 * 각 필드는 type, label, required로 이루어집니다.
 * - type: 필드의 입력 형태
 *   - text
 *   - textarea
 *   - date
 *   - select
 *   - checkbox
 *
 * - label: 필드명
 *   - 이름 (name) [필수]
 *   - 주소 (address)
 *   - 메모 (memo)
 *   - 가입일 (joinDate) [필수]
 *   - 직업 (job)
 *   - 이메일 수신 동의 (agreeToEmail)
 *
 * - required: 필수 입력 여부
 */

export type FieldType = 'text' | 'textarea' | 'date' | 'select' | 'checkbox';

export interface FieldOption {
  value: string;
  label: string;
}

export interface Field {
  // common
  key: string;
  label: string;
  type: FieldType;
  required: boolean;

  // select 타입 옵션 목록
  options?: FieldOption[];
}

export const fieldItems: Field[] = [
  {
    key: 'name',
    label: '이름',
    type: 'text',
    required: true,
  },
  {
    key: 'address',
    label: '주소',
    type: 'text',
    required: false,
  },
  {
    key: 'memo',
    label: '메모',
    type: 'textarea',
    required: false,
  },
  {
    key: 'joinDate',
    label: '가입일',
    type: 'date',
    required: true,
  },
  {
    key: 'job',
    label: '직업',
    type: 'select',
    required: false,
    options: [
      { value: '개발자', label: '개발자' },
      { value: 'PO', label: 'PO' },
      { value: '디자이너', label: '디자이너' },
    ],
  },
  {
    key: 'agreeToEmail',
    label: '이메일 수신 동의',
    type: 'checkbox',
    required: false,
  },
];
