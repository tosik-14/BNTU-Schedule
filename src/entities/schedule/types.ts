import {Metadata} from "@/src/entities/schedule/metadata/metadata";
import {Week} from "@/src/entities/schedule/week/types";


export interface Schedule {
    week: Week[];
    metadata: Metadata;
}