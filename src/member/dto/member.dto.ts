export class MemberDto {
    user_email: string;
    password: string;
    annualInfoId: number;
    holiday: {
        holiday_total: number;
        holiday_remain: number;
        holiday_use: number;
        holiday_add: number;
    }
}