// src/api/fetchUsersData.ts
import companies from "@/data/companies.json";
import departments from "@/data/departments.json";
import users from "@/data/users.json";
import type { HRData } from "@/entities/user/model";

export type Company = {
    id: string;
    name: string;
    industry: string;
    address: string;
    contactPerson: string;
    employeeCount: number;
    founded: number;
};

export type Department = {
    id: string;
    name: string;
    companyId: string;
};

export async function fetchUsersData(): Promise<HRData> {
    // В реальном API тут будет fetch('/api/hr-data') и т.п.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                users,
                departments,
                companies
            });
        }, 50); // Имитация задержки сети
    });
}
