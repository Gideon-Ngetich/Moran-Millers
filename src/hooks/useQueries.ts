// src/hooks/useQueries.ts

import { useQuery } from '@tanstack/react-query';

// Import static JSON data files
import contactDetailsData from '../data/contactDetails.json';
// import blogSummariesData from '../data/blogSummaries.json';
import companyComparisonData from '../data/companyComparison.json';
import productsData from '../data/products.json';
import impactPointsData from '../data/impactPoints.json';
import investorInfoData from '../data/investorInfo.json';
import leadershipBiosData from '../data/leadershipBios.json';
import dailyScheduleData from '../data/dailySchedule.json';

// Define types (adjust these based on your actual data structure)
export type Product = {
  id: string;
  name: string;
  description?: string;
  // add other fields as needed
};

export type LeadershipBio = {
  name: string;
  title: string;
  bio: string;
  // ...
};

export type ScheduleEvent = {
  time: string;
  activity: string;
  // ...
};

export type ContactDetails = {
  address: string;
  phone: string;
  email: string;
};

export type BlogSummary = {
  id: string;
  title: string;
  date: bigint;
  // ...
};

export type ImpactPoint = {
  title: string;
  description: string;
  // ...
};

export type InvestorInfo = {
  // your investor info fields
};

export type CompanyComparison = {
  company: string;
  quality: number;
  innovation: number;
  sustainability: number;
};

// Products
export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => productsData,
    staleTime: Infinity, // static data, never stale
  });
}

// Leadership Bios
export function useLeadershipBios() {
  return useQuery<LeadershipBio[]>({
    queryKey: ['leadershipBios'],
    queryFn: async () => leadershipBiosData,
    staleTime: Infinity,
  });
}

// Daily Schedule
export function useDailySchedule() {
  return useQuery<ScheduleEvent[]>({
    queryKey: ['dailySchedule'],
    queryFn: async () => dailyScheduleData,
    staleTime: Infinity,
  });
}

// Contact Details
export function useContactDetails() {
  return useQuery<ContactDetails | null>({
    queryKey: ['contactDetails'],
    queryFn: async () => contactDetailsData,
    staleTime: Infinity,
  });
}

// Blog Summaries
// export function useBlogSummaries() {
//   return useQuery<BlogSummary[]>({
//     queryKey: ['blogSummaries'],
//     queryFn: async () => blogSummariesData,
//     staleTime: Infinity,
//   });
// }

// Impact Points
export function useImpactPoints() {
  return useQuery<ImpactPoint[]>({
    queryKey: ['impactPoints'],
    queryFn: async () => impactPointsData,
    staleTime: Infinity,
  });
}

// Investor Info
export function useInvestorInfo() {
  return useQuery<InvestorInfo | null>({
    queryKey: ['investorInfo'],
    queryFn: async () => investorInfoData,
    staleTime: Infinity,
  });
}

// Company Comparison
export function useCompanyComparison() {
  return useQuery<CompanyComparison[]>({
    queryKey: ['companyComparison'],
    queryFn: async () => companyComparisonData,
    staleTime: Infinity,
  });
}

// Note: Since there's no backend, we remove useSubmitInquiry and usePlaceOrder
// If you want mock mutations later, we can add them with local state