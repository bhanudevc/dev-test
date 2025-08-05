export type SSEClient = {
  write: (chunk: string) => Promise<void>;
  end: () => Promise<void>;
};
