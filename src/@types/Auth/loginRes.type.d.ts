// Metadata type
interface UserMetadata {
    creationTime: number;
    lastSignInTime: number;
  };
  
  // MultiFactor type
  interface MultiFactorInfo {
    enrolledFactors: any[]; // Can be typed more strictly if structure is known
  };
  
  // ProviderData type
  interface ProviderData {
    providerId?: string;
    uid?: string;
    displayName?: string;
    email?: string;
    phoneNumber?: string;
    photoURL?: string;
  }[];
  
  // FirebaseUser type
  interface FirebaseUser  {
    displayName: string | null;
    email: string | null;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: UserMetadata;
    multiFactor: MultiFactorInfo;
    phoneNumber: string | null;
    photoURL: string | null;
    providerData: ProviderData;
    providerId: string;
    tenantId: string | null;
    uid: string;
  };
  
  // Additional user info type
  interface AdditionalUserInfo {
    isNewUser: boolean;
  };
  
  // AuthResult type
  interface LoginResult {
    additionalUserInfo: AdditionalUserInfo;
    user: FirebaseUser;
  };