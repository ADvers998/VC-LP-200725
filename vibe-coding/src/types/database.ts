export interface InterestSubmission {
  id: string;
  name: string;
  email: string;
  subscribed: boolean;
  created_at: string;
}

export interface CreateInterestSubmission {
  name: string;
  email: string;
  subscribed?: boolean;
}

export interface Database {
  public: {
    Tables: {
      interest_submissions: {
        Row: InterestSubmission;
        Insert: CreateInterestSubmission;
        Update: Partial<CreateInterestSubmission>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface InterestCountResponse {
  count: number;
}
