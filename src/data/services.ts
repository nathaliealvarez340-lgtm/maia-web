export const serviceIconKeys = ["orbit", "blocks", "workflow"] as const;

export type ServiceIconKey = (typeof serviceIconKeys)[number];
