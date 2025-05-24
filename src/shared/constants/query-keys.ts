export const queryKeys = {
  settings: {
    mainVoteEvent: ['settings', 'main-vote-event'] as const,
    registeredUsers: ['settings', 'main-vote-event', 'users'] as const,
  },
  weight: {
    users: ['weight', 'users'] as const,
  },
  roles: {
    all: ['roles'] as const,
  },
  users: {
    all: ['users'] as const,
    comments: ['users', 'comments'] as const,
    feedback: ['users', 'feedback'] as const,
    profile: ['users', 'profile'] as const,
  },
  budget: {
    usersWithoutSalary: ['budget', 'users', 'without-salary'] as const,
    votingShare: ['budget', 'voting-share'] as const,
  },
  employee: {
    users: ['employee', 'users'] as const,
    mainVoteEvent: ['employee', 'main-vote-event'] as const,
  },
  voting: {
    users: ['voting', 'users'] as const,
  },
  organization: {
    details: ['organization', 'details'] as const,
  },
  departments: {
    all: ['departments'] as const,
  },
};
