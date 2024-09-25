import React, { useCallback } from "react";
import { IProfileContentCardProps } from "./IProfileContentCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { theme } from "../../styles/Theme";
import { ProfileImage } from "../../styles/core/Image";
import { Text } from "../../styles/Text";
import { observer } from "mobx-react-lite";

export const ProfileContentCard: React.FC<IProfileContentCardProps> = ({
  data,
}) => {
  const handleClick = useCallback(() => {
    console.log(data.target);
}, [data.target]);

  
  return (
    <StackLayout backgroundColor={theme.colors.teaserPrimary} borderRadius onClick={handleClick}>
      <ProfileImage src={data.profileImg} alt={data.imgAlt} />
      <StackLayout id="Header">
        <Text bold>{data.name}</Text>
        <Text>{data.degree}</Text>
      </StackLayout>
      <StackLayout id="Middle">
        <Text bold>{data.position}</Text>
        {data.offers !== undefined ? data.offers.map((offer, index) => (
          <Text key={index}>{offer}</Text>
        )): null}
      </StackLayout>
      <StackLayout id="Footer">
        <Text bold>Interests</Text>
        {data.interests !== undefined ? data.interests.map((interest, index) => (
          <Text key={index}>{interest}</Text>
        )):null}
      </StackLayout>
    </StackLayout>
  );
};

export default observer(ProfileContentCard);
