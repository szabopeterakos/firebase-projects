export interface Lesson {
  id: number;
  description: string;
  duration:string;
  seqNo: number;
  courseId: number;
}

export interface Course {
  id:number;
  lessonsCount: number;
}
