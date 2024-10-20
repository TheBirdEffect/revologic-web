import { ISectionModel } from "../../dataLayer/models/Section";

export interface ISectionCardProps {
    data: ISectionModel;
    children: React.ReactNode;
    noOverline?: boolean;
    noReadMoreButton?: boolean;
}