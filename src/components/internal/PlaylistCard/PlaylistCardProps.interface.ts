import { Entity } from "@/core/models/client/Entity";

export interface PlaylistCardProps {
  readonly playlist: Entity;
  readonly variant?: "grid" | "list";
}
