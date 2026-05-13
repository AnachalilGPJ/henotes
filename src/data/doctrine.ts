export type DoctrineSource =
  | "scripture"
  | "fathers"
  | "catechism"
  | "summa"
  | "commentary";

export interface DoctrinalNode {
  id: string

  threadId: string
  stage: string

  claim: string

  sources: {
    type: DoctrineSource
    reference: string
    excerpt?: string
    weight: number
  }[]
}
