export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type RepeatEndCondition = 'date' | 'count' | 'no-end';

export interface RepeatInfo {
  type: RepeatType;
  interval: number;
  endDate?: string;
  endCondition?: RepeatEndCondition;
  endCount?: number;
  id?: string;
  isUpdated?: boolean;
}

export interface EventForm {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  category: string;
  repeat: RepeatInfo;
  notificationTime: number; // 분 단위로 저장
}

export interface Event extends EventForm {
  id: string;
}
