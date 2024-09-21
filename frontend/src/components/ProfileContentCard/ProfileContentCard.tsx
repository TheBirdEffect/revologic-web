import React from 'react';
import { IProfileContentCardProps } from './IProfileContentCardProps';
import { StackLayout } from '../../styles/core/ui/StackLayout';
import { theme } from '../../styles/Theme';
import { ProfileImage } from '../../styles/core/Image';
import { Text } from '../../styles/Text';

export const ProfileContentCard: React.FC<IProfileContentCardProps> = ({
    name,
    degree,
    position,
    offers,
    interests,
    image,
    alt,
}) => {

    return (
        <StackLayout backgroundColor={theme.colors.teaserPrimary} borderRadius>
            <ProfileImage src={image} alt={alt} />
            <StackLayout id="Header">
                <Text bold>{name}</Text>
                <Text>{degree}</Text>
            </StackLayout>
            <StackLayout id="Middle">
                <Text bold>{position}</Text>
                {offers.map((offer, index) => (
                    <Text key={index}>{offer}</Text>
                ))}
            </StackLayout>
            <StackLayout id="Footer">
                <Text bold>Interests</Text>
                {interests.map((interest, index) => (
                    <Text key={index}>{interest}</Text>
                ))}
            </StackLayout>

        </StackLayout>       
    );

}